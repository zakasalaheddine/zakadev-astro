---
title: Lincx Claude Marketplace
subtitle: >-
  Turned an internal ad-tech platform into something the whole team can query in
  plain language — expert-grade answers, auditable, in seconds.
meta: Client system
role: Design & build
stack: Claude Code, Model Context Protocol (MCP), TypeScript
year: 2026
---

## The short version

I took an internal advertising platform that only power users could operate — the
kind where the real answers live in five different admin screens and a person's
head — and made it something anyone on the team can talk to in plain language
inside Claude. Ask "which ad groups can actually run in this zone, and why isn't
this one showing?" and get a correct, auditable answer in seconds instead of a
half-day of clicking.

## What I was trying to achieve

Every growing business hits the same wall: the tools that run the business get
more powerful, but only a handful of experts can actually read them. Everyone
else waits on those experts. That queue is where momentum dies.

The goal here wasn't "add an AI chatbot." It was to close that gap for real:

- **Let non-experts get expert-grade answers** without learning the platform's
  internals.
- **Keep the answers trustworthy.** An AI that's confidently wrong about revenue
  or ad targeting is worse than no AI. Every answer had to be something a manager
  could stand behind.
- **Free the experts** to do judgment work instead of being a human search
  engine for their own colleagues.

## How it's built (in plain terms)

Two layers, kept deliberately separate:

1. **A secure connection** between Claude and the platform. It handles login,
   keeps each user inside their own data, and never lets the AI touch anything it
   shouldn't. Credentials never pass through the AI.
2. **A library of focused "skills"** — reports, inventory checks, targeting
   explanations, performance analysis — that anyone can install into their own
   Claude in one line and start using.

The design rule that made it work: **let the AI do language, not math.** The
platform's own engine computes the hard, exact facts (who's eligible, what the
numbers are). Claude's job is to explain them clearly and suggest next steps. So
the AI is never guessing at the truth — it's translating a truth the system
already knows.

## A concrete example of the hard part

One feature answers "which ads are eligible to run in this slot, and why?" Sounds
simple. It isn't — eligibility depends on overlapping targeting rules,
exclusions, and shared-inventory leaks at two different levels.

Late in the project a stakeholder sharpened the definition of one edge case: a
category we were counting was being over-counted, because we were measuring at
the wrong level of detail. The fix meant re-modeling the whole thing one grain
finer — and the interesting part is that it was *cheap to do right*, because the
logic lived in one small, well-tested place instead of being smeared across the
UI. We tightened the definition, proved it against the real system, shipped it,
and the guarantees the rest of the tool depended on stayed intact.

That's the whole thesis in miniature: **build the truth once, in the open, and
correcting it later is a small edit instead of a rewrite.**

## What I took away from it

- **The moat isn't the model — it's the plumbing.** The value came from the
  boring, careful work: clean access to the real data, correct business rules,
  and answers you can audit. The AI is the easy, swappable part.
- **Trust is a feature you design in, not bolt on.** Fixed output formats,
  read-only by default, "show your work" answers, and never letting the AI invent
  a number — those choices are what make people actually adopt it.
- **Separate the exact from the expressive.** Machines should own the facts;
  the LLM should own the phrasing. Blur that line and you get confident nonsense.
- **Small, single-purpose tools beat one giant one.** Each skill does one thing,
  so it's easy to trust, test, and improve without breaking the others.

## How other businesses can use this

You almost certainly have the same pattern: a powerful internal system, a few
experts who can read it, and everyone else waiting on them. Here's the playbook
this project proves out:

1. **Start from a real bottleneck, not from "we should use AI."** Find the
   question people keep pinging an expert for. That's your first skill.
2. **Connect the AI to your source of truth safely** — scoped to each user,
   read-only to start, credentials never exposed. This is the foundation
   everything else stands on.
3. **Let your existing systems compute the facts; let the LLM explain them.**
   Don't ask the model to be your calculator or your database. Ask it to be your
   translator and your analyst.
4. **Make every answer auditable.** Consistent formats and visible reasoning turn
   "a neat demo" into "a tool the team relies on."
5. **Ship narrow, then widen.** One trustworthy skill that people use daily beats
   a sprawling assistant nobody trusts.

Done this way, LLMs stop being a novelty and become infrastructure — the layer
that lets your whole team operate tools that used to need a specialist. That's
the shift: not replacing the experts, but giving everyone else a fluent way in.

---

*Built with Claude Code and the Model Context Protocol. The platform stays the
system of record; the AI is the interface to it.*
