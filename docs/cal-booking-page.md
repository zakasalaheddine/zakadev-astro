# cal.com/zakadev — page copy

Paste-ready content for the booking page every "Book a call" on the site now
points at. Same voice as the site: outcome first, no adjectives a client cannot
check, no em dashes.

---

## Profile

**Display name:** Salah Eddine Zaka
**Username:** zakadev

**Bio (the "about" field, shown under your name):**

> I build AI systems that make businesses money: more customers, more revenue
> from each one, fewer hours lost to manual work. Twelve years of production
> engineering behind every build. Bring one workflow that is eating your team's
> time and you will leave knowing whether it is worth automating, what it takes,
> and roughly what it costs.

**Shorter variant**, if the field truncates:

> AI systems that make businesses money. Twelve years of production engineering
> behind every build. Bring the workflow that is eating your team's time.

Use the same avatar as the site so the page does not look like a different
person. Set the timezone to Africa/Casablanca and let Cal handle the visitor's
conversion.

---

## Event 1 — the one the site links to

**Title:** Automation audit call
**Slug:** `automation-audit` (so the full link reads cal.com/zakadev/automation-audit)
**Duration:** 30 minutes
**Price:** free
**Location:** Google Meet

**Description:**

> Bring one workflow that is eating your team's time. Lead follow-up that gets
> dropped. A report someone rebuilds every Monday. A queue of tickets nobody
> wants to own.
>
> In 30 minutes we cover three things:
>
> 1. How that work actually moves through your business today, step by step.
> 2. Whether AI is the right tool for it, and where it is not. Some of this is a
>    database query and a cron job, and I will tell you when it is.
> 3. What a first system would take to build, and roughly what it costs.
>
> You get a written summary afterward either way, whether we end up working
> together or not.
>
> No slides and no pitch deck. Come with the problem, not a spec.

**Booking questions** (Cal calls these additional inputs):

| Question | Type | Required |
|---|---|---|
| What workflow is eating the most time right now? | Long text | Yes |
| Roughly how many people touch it each week? | Short text | No |
| What does it run on today? (CRM, spreadsheets, email, a tool you pay for) | Short text | No |
| Company website | Short text | No |

The first question is the one that matters. It filters out the calls with
nothing behind them, and it means you arrive already knowing the shape of the
problem.

**Settings worth setting:**

- 15 minute buffer after, so a call that runs long does not eat the next one.
- 12 hours minimum notice.
- Availability that overlaps both markets: roughly 14:00 to 19:00
  Africa/Casablanca covers a European afternoon and a US East Coast morning.
- Confirmation email on, reminder 1 hour before.

**Confirmation message (shown after booking):**

> Booked. You will get a calendar invite with the meeting link.
>
> Nothing to prepare, and no access to any of your systems required. If there is
> something you want me to read first, reply to the invite and send it over.

---

## Event 2 — optional, and worth adding

The FAQ on the site quotes audits at $180 to $600. If you want that bookable
rather than negotiated over email, add it as a paid event.

**Title:** Paid workflow audit
**Slug:** `workflow-audit`
**Duration:** 90 minutes
**Price:** set within the $180 to $600 band the site quotes
**Location:** Google Meet

**Description:**

> A full pass over how work moves through your business, not one workflow.
>
> I map the paths that cost you the most hours, rank them by hours saved against
> build cost, and hand you a written plan you own: what to automate first, what
> to leave alone, what each piece would take to build.
>
> The plan is yours whether or not I build any of it. If you do go ahead, the
> audit fee comes off the first build.
>
> Start with the free 30 minute call if you are not sure this is the right size
> yet.

Keep that last line. Sending an unsure buyer to the cheaper option converts
better than losing them at a price they were not ready for.

---

## One thing to check after setup

The site links to `cal.com/zakadev`, the profile page, which lists every event
type you have. That works while there is one event. Once you add the paid audit,
point `bookingHref` in `src/data/site.ts` at the specific event
(`cal.com/zakadev/automation-audit`) so the button on the site means one thing,
and let the profile page be the place people browse.
