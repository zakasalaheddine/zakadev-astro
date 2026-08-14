---
title: Lincx Claude Marketplace
subtitle: >-
  A whole team can now ask an ad platform questions in plain language and get
  auditable, expert-grade answers in seconds.
meta: Client system
bucket: Cut costs
role: Design & build
stack: Claude Code, Model Context Protocol (MCP), TypeScript
year: 2026
---

## The short version

An internal advertising platform, 78 API paths and 134 operations deep, spread
across 63 client networks. Only a handful of people could actually read it. Ask
it "which ads can run in this slot, and why isn't this one showing?" and the
honest answer lived in five admin screens and one specialist's head.

I turned the questions the team kept asking into installable Claude skills, then
spent most of the project on the part that decides whether anyone trusts them:
making the answers provably correct.

## The bottleneck was never the interface

Every growing business hits this wall. The tools that run the business get more
powerful, and the number of people who can read them stays flat. Everyone else
queues behind the experts, and the experts stop doing judgment work because they
have become a human search engine for their own colleagues.

So the goal was not "add an AI chatbot". It was to let a non-expert get an
expert-grade answer, and to make that answer something a manager could stand
behind in front of a client. An AI that is confidently wrong about ad targeting
is worse than no AI at all.

## The question that turned out to be hard

"Which ad groups are eligible to serve in this zone, and why is this one not?"
sounds like a lookup. It is not. Eligibility depends on targeting rules and
exclusions applied at two different levels, on shared inventory that leaks
across groups, and on parent objects that can silently suppress everything
below them.

The first version counted eligibility at ad-group grain. That is the grain the
admin screens show, so it is the grain everyone assumes. It is wrong. A group
can be ineligible while individual ads inside it are whitelisted onto the zone,
and it can look healthy while every ad under it is held out by something else
entirely. Counting groups over-counted the answer, and it hid the cases that
actually matter.

Late in the project a stakeholder sharpened one edge case and exposed exactly
that. The fix was to re-model the join one grain finer, down to the individual
offer, and it was cheap to do right because the logic lived in one small tested
place rather than smeared across a dozen tool handlers. That is the whole thesis
in miniature: build the truth once, in the open, and correcting it later is an
edit instead of a rewrite.

## Proving it, rather than asserting it

Correctness you cannot demonstrate is a claim. I ran thirteen verification
passes against the eligibility tooling, across two production networks, plus a
probe of 25 more, with every assertion checked against live API responses rather
than fixtures.

That work fixed eight tooling defects, three of them blockers that stopped a
sweep outright. The most instructive one was not a logic bug. A response guard
was truncating oversized results by stripping fields from each row, so a large
zone came back as a list of bare ids with the payload gone, and no way to re-run
narrower. Rows run about 560 characters, so a 207-row zone is roughly 118k
against a 30k guard. Even one bucket with names removed did not fit, which meant
narrowing could never have worked. The fix was to page full rows instead of
shedding them, so a row keeps its complete field set at any zone size.

Proving absence took the same discipline. To confirm one class of conflict
simply does not occur, I swept all 1,150 ad groups in the network. To confirm
another, all 1,331 ads. "We never saw it" is not the same as "it is not there",
and only one of those is worth telling a client.

## What it found that nobody asked for

The tooling surfaced live configuration bugs that had been invisible to every
existing screen.

- **18 ads across 8 ad groups carried a zone whitelist naming a zone their
  parent group cannot reach.** The whitelist never fires, because the parent
  filter runs first. Six of those groups are live. They serve nothing on that
  zone, and nothing in the platform said so, because the groups were dropped
  from every bucket before anyone could see them. That class now has its own
  bucket and its own signal.
- **One archived ad whitelisted a zone that no longer exists.** A non-empty
  whitelist is treated as confining, so that ad serves in zero zones network
  wide and looks identical to an ad legitimately scoped elsewhere.
- **One ad group weighed 232 KB**, of which a single targeting field held 8,931
  ZIP codes. The tooling handles it now. The record itself is still worth a look.

Finding those was not the brief. It is what happens when you model the domain
properly instead of wrapping the API and hoping the model reasons its way to the
truth.

## The design rule that made it work

**Let the AI do language, not math.** The platform's own engine computes the
exact facts: who is eligible, what the numbers are. Claude explains them and
suggests what to do next. The model is never guessing at truth, it is
translating a truth the system already knows.

Everything else followed from that. Fixed output shapes, read-only by default,
answers that show their work, and never a number the model invented. Naming got
the same treatment. When a counter read as a problem where none existed, I
renamed it rather than documenting around it. When a reviewer proposed a second
counter that I could break with a counter-example, we shipped a per-row live
signal instead of a headline number that would mislead. Both branches are pinned
by unit tests, so a regression fails CI whether or not production data still
contains the shape.

## What I took away

- **The moat is not the model, it is the plumbing.** Clean access to real data,
  correct business rules, auditable answers. The AI is the easy, swappable part.
- **Get the grain right before you get the interface right.** Every wrong number
  in this project traced back to counting at the level the UI happened to show
  rather than the level the truth lives at.
- **Absence has to be proven.** Exhaustive sweeps are boring, and they are the
  difference between a demo and something a manager will repeat to a client.
- **Small, single-purpose tools beat one giant one.** Each skill does one thing,
  so it is cheap to trust, test and improve without breaking its neighbours.

---

*Built with Claude Code and the Model Context Protocol, on top of the Lincx MCP
server. The platform stays the system of record; the AI is the interface to it.*
