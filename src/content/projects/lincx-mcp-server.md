---
title: Lincx MCP Server
subtitle: >-
  The secure doorway behind it: one login, scoped to the right client, every
  answer read from the real platform.
role: Design & build
stack: TypeScript, Model Context Protocol (MCP), OAuth 2.1 + PKCE, Redis, Docker
year: 2026
meta: Client system
bucket: Cut costs
---

## The short version

One server sits between an advertising platform and Claude. It handles who you
are, which client's data you are allowed to see, and what you are allowed to do,
then hands the model a curated set of read tools. Roughly fifty of them, across
fifteen resource areas, on a platform that exposes 134 operations to 63 client
networks.

Every report, every inventory check, every "why isn't this ad running?" answer
flows through this one door. Credentials never reach the model.

## What it carries

Ten-plus people work through this server today, managers across the company
rather than the two or three specialists who could read the platform before.
The debugging question that used to cost a day and occupy several engineers at
once now takes one person about two minutes, and every one of those answers is
authenticated, scoped to the right client, and read from the live platform by
this layer.

## The constraint that shaped everything

The platform is multi-tenant. One person may work across several client
networks, and those networks must never bleed into each other. Now put a
language model in the middle of that, and the usual approach, telling the model
which tenant to use, becomes the weakest link in the system.

So the tenant is not something the model can express. Every call to the platform
API gets its network id appended server-side, from the session. There is no tool
argument for it, no prompt instruction about it, nothing to get wrong. A user
switches client in one sentence, and every question after that is answered in
that client's context because the server put it there.

That is the whole security posture in one sentence: **enforce it in the
plumbing, never in the prompt.** If "do not show the wrong client's data"
depends on the model behaving, you have already lost.

## How the login actually works

Clients connect by URL and authenticate themselves, with no shared secret pasted
into a config file anywhere:

1. The client calls the endpoint unauthenticated and gets a `401` naming where
   to find the auth metadata.
2. It discovers the OAuth endpoints and registers itself dynamically.
3. The user's browser opens the login page and they sign in with their normal
   platform credentials.
4. The client exchanges the auth code, with PKCE, for access and refresh tokens.

Two unrelated tokens then identify that person. The OAuth access token, which
the client sends on every request, and the platform's own session token, which
never leaves the server. They meet in Redis and nowhere else. The model holds
neither, and cannot be tricked into leaking what it was never given.

Because sessions live in Redis rather than process memory, tokens survive a
desktop-app reload and a server restart. Nobody re-authenticates because a
container cycled.

## Not 134 endpoints, 134 tools

The lazy version of this project is a generated wrapper: one tool per endpoint,
ship it, call it a platform integration. It fails twice over. Models choose
badly from a large flat list, and every write endpoint you expose is a way for a
conversation to damage production.

The surface is deliberately shaped instead, in three tiers.

- **Read primitives.** One `get` and one `list` per resource, plus a parent
  lookup, because almost every real question ends up walking upward through the
  hierarchy.
- **Composite tools, which are where the value is.** One call answers a real
  question rather than making the model orchestrate six. The zone trace fans out
  to the zone, its parents, matched and rejected ads with the reasons for both,
  their creatives and templates, and recent event stats, and returns one
  structured object plus a human summary.
- **Writes, role-gated and off by default.** Viewers and clients never see them.

Template rendering is the sharpest example of the split. Engineers can render a
template against real ads from a live zone and see the result, and that path
cannot write. Persisting a change is a separate, gated tool that writes to a
draft version. The renderer runs sandboxed with no network access beyond
whitelisted asset hosts, because templates are user-authored code and get
treated as untrusted input.

## The operational details that decide whether people keep using it

- **Answers are shaped before they reach the model.** Report summarisation
  happens on the server, so a manager gets a digest instead of thousands of raw
  rows filling the conversation. Deciding where that shaping happens is most of
  the difference between a demo and a daily tool.
- **Every call validates the session and the client context first**, before
  anything touches the platform.
- **A redeploy drops in-flight transport sessions.** OAuth tokens and platform
  sessions persist in Redis, but the transport map is in memory, so clients must
  reconnect after a deploy. It is documented with its exact symptom, because an
  undocumented reconnect looks like an outage to the person hitting it.
- **The whole thing runs in Docker** with a Redis fallback to in-memory sessions
  for local work, and a tunnel script for development, because remote MCP
  clients require https and a mismatched discovery host produces an error
  message that explains nothing.

## What I took away

- **The interface is easy, the trust layer is the product.** Anyone can wire a
  model to an API. Making it safe for many tenants, with credentials it can
  never leak and scopes it can never cross, is the actual work and the actual
  value.
- **Design the tool surface like an API you will support for years.** Tiering
  and role gating are not ceremony, they are what stops a conversation from
  reaching production write endpoints.
- **Anything the model can say, it can say wrong.** Identity and scope belong in
  the session, never in an argument.
- **One solid foundation makes everything after it cheap.** Each skill built on
  top of this server was faster and safer to write, because this layer already
  carried the risk.

---

*Credentials never pass through the AI. The platform stays the system of record.*
