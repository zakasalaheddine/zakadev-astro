---
title: Lincx MCP Server
subtitle: >-
  The secure doorway behind it: one login, scoped to the right client, every
  answer read from the real platform.
role: Design & build
stack: Claude Code, Model Context Protocol (MCP), TypeScript, OAuth 2.1, Redis
year: 2026
meta: Client system
bucket: Cut costs
---

## The short version

This is the foundation the rest of the Lincx AI work stands on. It's a single,
secure doorway between an advertising platform and Claude: it handles who you
are, which client's data you're allowed to see, and what you're allowed to do —
then hands the AI a small set of safe, well-labeled tools to read that data. Every
report, every inventory check, every "why isn't this ad running?" answer flows
through this one server.

If the plugins are the questions a team can ask, this is the thing that makes the
answers real, safe, and scoped to the right client.

## What I was trying to achieve

A platform like this serves many clients at once, and each client's data must stay
walled off from the others. On top of that, the people who most need answers —
account managers, team leads — are usually the *least* able to dig them out,
because pulling the data means knowing the admin screens, the query params, and
the gotchas.

So the objectives were:

- **One safe connection, not a pile of one-offs.** Every AI-driven workflow
  should go through the same audited door instead of each tool inventing its own
  access to the platform.
- **Correct client isolation, always.** A manager working on Client A must never
  accidentally see or touch Client B's data — and the AI must never be the thing
  that leaks it.
- **Credentials the AI can never see.** Logins and tokens stay server-side. The
  AI gets answers, never keys.
- **Data review that a non-expert can actually do** — ask in plain language,
  switch which client you're looking at, and get an auditable answer back.

## How it helps managers and the team

**Client management becomes a conversation.** The platform organizes work by
"network" — effectively one per client or publisher. This server makes that a
first-class idea: a manager can ask "switch me to this client," and every
question after that is answered *in that client's context automatically*. No
copy-pasting IDs, no risk of pulling the wrong account's numbers. Switching
clients is one sentence, and the walls between them are enforced by the server,
not by the person remembering to be careful.

**Reviewing data stops being a specialist task.** Because the plugins all sit on
top of this server, a team lead can pull a campaign performance summary, spot a
creative that's misbehaving, or audit which ad groups are actually live in a zone
— by asking, inside their normal Claude session. The heavy lifting (fetching,
scoping, aggregating) happens on the server; what comes back is a clean answer,
not a wall of raw rows.

**The team evolves how they work.** Instead of the usual "message the one person
who knows the platform and wait," the knowledge is now reachable by everyone
through a shared, trustworthy interface. Experts stop being a lookup service and
get their time back for judgment work. Managers stop waiting. New team members get
productive without first memorizing the platform's internals.

## The design decisions that made it trustworthy

- **The AI never holds credentials.** Two separate tokens meet only inside the
  server's memory store — one proves who the session is, the other authorizes the
  platform calls. The AI touches neither.
- **Client scope is injected, never requested.** The AI can't ask to see a
  specific client's data by ID; the current client is stamped onto every call from
  the session. That removes a whole class of "wrong account" mistakes by design.
- **Read-first, and every call is validated.** Before anything touches the
  platform, the server confirms the session is real and the client context is
  legitimate.
- **Thin, single-purpose tools.** Each tool maps to roughly one real platform
  action, kept deliberately small and boring. The one exception — summarizing
  reports — exists purely so managers get a digest instead of thousands of raw
  rows dumped into the conversation.

## What I took away from it

- **The interface is easy; the trust layer is the real product.** Anyone can wire
  an AI to an API. Making it safe for many clients, with credentials it can never
  leak and scopes it can never cross, is the actual work — and the actual value.
- **Enforce safety in the plumbing, not in the prompt.** If "don't show the wrong
  client's data" depends on the AI behaving, you've already lost. Bake it into the
  connection so it's true no matter what the AI does.
- **Shape the data for the reader.** Managers don't want rows, they want the
  answer. Deciding *where* summarization happens — on the server, before it ever
  reaches the AI — is what makes the difference between a demo and a daily tool.
- **Build one solid foundation, then let many tools grow on it.** Every plugin got
  cheaper and safer to build because this layer already handled the hard parts.

## How other businesses can use this

If you run any internal system that serves multiple clients, accounts, or teams,
this is the pattern worth copying:

1. **Build one secure gateway between the AI and your system** — not per-tool
   access. Everything audited in one place.
2. **Make identity and scope automatic.** The AI should inherit "who am I, which
   client am I on" from the session, never ask for it. That's how you get
   multi-client safety for free.
3. **Keep secrets out of the AI entirely.** It should receive answers, never
   credentials.
4. **Decide where the data gets shaped.** Summarize and scope *before* it reaches
   the model, so what people see is a clean, reviewable answer.
5. **Start thin and grow.** One safe, boring connection lets you add trustworthy
   tools quickly — each one cheap because the foundation already carries the risk.

Done this way, the AI becomes the layer that lets your whole team operate a
multi-client system safely — managers reviewing data, switching between accounts,
and acting on it, without a specialist in the loop and without the platform ever
being at risk.

---

*Built with Claude Code and the Model Context Protocol. Credentials never pass
through the AI; the platform stays the system of record.*
