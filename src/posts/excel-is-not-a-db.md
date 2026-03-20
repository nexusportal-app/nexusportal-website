---
title: "When does Excel stop being enough?"
date: "2026-03-01"
coverPath: "/blog/excel-is-not-a-db/cover.jpg"
tags: Blog
author: Alexandre Annic -- Software Engineer
---

To manage our collected data in the humanitarian sector, we often use `Excel`. It's flexible, it's well known, and most
NGOs already have a global Office license. It's also really easy… but only at the beginning, **because complexity grows
exponentially** when:

- ⚙️ Calculations become harder
- 📈 Data volume increases
- 🔁 Data structure change
- 🔗 Sources multiply

An alternative is coding languages like `Python` or `JavaScript`. It's becoming more common in the IM sector, but there
is
still resistance due to a common misconception:
> "Coding is not for me, it's too complicated".

The paradox is that most of the `Excel` built in the humanitarian sector (with multi-sheets cross-references,
validation,
pivot-tables, nested formulas, etc) are complex engineering, more technical than a small code function that does the
exact same job.

### Concrete and simplified example

Let's take an example with a small KoboToolbox extract:

- 1 sheet for households
- 1 sheet for households individuals (it's how is extracted `begin_repeat` data from a `XLSForm`)

##### Submissions

| submission_id | date       | consent |
|---------------|------------|---------|
| 1             | 2025-01-03 | Yes     |
| 2             | 2025-01-04 | oui     |
| 3             | 2025-01-06 | No      |

##### Individuals

| submission_id | gender | has_disability |
|---------------|--------|----------------|
| 1             | female | Yes            |
| 1             | male   | No             |
| 2             | female | No             |
| 3             | female | Yes            |
| 3             | male   | Yes            |

And a typical MEAL indicator as:
> 🔎 Monthly number of female-headed households with at least 1 person with disability.

### Excel version

I won't detail the Excel version to keep it short (and because I'm not even sure about how explain it in a blog article
🙈) but it would
probably involve:

- `VLOOKUP`/`XLOOKUP`
- Intermediate sheets and pivot tables
- Hard to read formulas to normalize inputs (`IF`, `TRIM`, `MONTH` for date, etc.)
- Praying for it to not break in the future

### Code version

Now look at the `JavaScript` function. If you have never seen code, it may look intimidating at
first, but look closer:

- All the logic fits in **20 lines**
- **It's transparent**: no need to look at hidden sheets or cells to understand what happens
- **Each action is explicitly isolated**: for example, to stop filtering female-headed household, you remove one line
- **The logic is reusable**: the `normalizeYes` function is used for both `consent` and `has_disability`.

```js
function computeIndicator(data) {
  return data
    // Keep only valid consent
    .filter(row => normalizeYes(row.consent))
    // Keep HHs with at least one PwD
    .filter(row => row.individuals.some(ind => normalizeYes(ind.has_disability)))
    // Keep female headed HHs
    .filter(row => row.individuals[0].gender == 'female')
    // Compute per month
    .reduce((report, row) => {
      const month = getMonth(row.date)
      if (!report[month]) report[month] = 0
      report[month] = report[month] + 1
      return report
    }, {})
}

function normalizeYes(v) {
  return ['yes', 'oui', '1', true].includes(v.toLowerCase())
}

function getMonth(date) {
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear()
  return year + '-' + month
}
```

### How to make it works?

But one question remains: how do we make it run?

How do we:

- Pull data from Kobo?
- Automate it?
- Host it?
- Display the output?

This is the challenging part.
We would like to have such functions being **automatically executed** on our surveys,
triggered on **each new submission** and on **every update**, with the result being merged into **the same view**.
Meaning:

- Donors reports are always ready,
- Dashboards always up to date,
- Data always accurate.

That's exactly what **NexusPortal** does under the hood for you.