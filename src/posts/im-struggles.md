---
title: "Why is Information Management such a headache in the humanitarian sector?"
date: "2026-02-25"
coverPath: "/blog/im-struggles/cover.jpg"
tags: Blog
author: Alexandre Annic -- Software Engineer
---

## The problem

In humanitarian sector, a typical **Information Management** workflow we met looks like:

- 📥 Data collection → `KoboToolbox`
- 🧹 Cleaning & calculations → `Excel`
- 📈 Visualisation → `PowerBi`
- ⚙️ Sometimes a bit of automation → `PowerAutomate`

Collection works but everything after export is chaos, for instance:

- When an activity or a project is spread in different surveys, **how do you compute consolidated indicators?**
- When someone edits data in Kobo, **how do you keep Excel in sync**, and vice versa?
- When multiple teams use the same form, **how to isolate data?**
- With high staff turnover, **how to keep permissions aligned over time?**
- When suspicious changes appear in a spreadsheet, **how you know who changed what and why?**
- When a form evolves, **how to prevent dashboards and reports from breaking?**

## The consequences

This kind of workflow has 3 major downsides:

1. **Time-consuming and repetitive**\
   Each step required a significant amount of manual work
2. **Fragile and hard to maintain**\
   `Excel` formulas, `PowerAutomate` processes, `PowerQuery` transformation, all of these easily breaks
   especially when a new survey version is deployed. When surveys are too complex, it becomes almost impossible to
   harmonize the data.
3. **Data duplication and divergence**\
   Changes will be made in Excel copies, or in KoboToolbox to re-trigger `calculate` fields, but it never propagates in
   the workflow.
4. **Weak data protection**\
   Access cannot be strictly controlled: staffs can see data they should not, and permissions quickly become outdated
   with staff turnover.

Trying to automate with `PowerAutomate` or similar tools come with trade off: improve **#1** but worsen **#2**.

The most critical issue are **#2** and **#3**: data duplication. It is what makes reporting to donors or clusters
inaccurate and a constant headache.
Every time, we ask ourselves:

> "Why is this figure different from the previous period?"

> "How do you get that numbers? I can't reproduce. Let's start over."

> "Let's round it to have something that looks coherent."

It leads to frustration and a loss of trust, making us fight against the data instead of relying on it.

## The diagnosis and our solution

Let's focus on the core issues #2 and #3:

- Data inconsistency
- Difficulty harmonizing complex surveys

These problems are not new, software engineering solved them years ago.

**The key idea:** instead of having data scattered and transformed in many places (Excel files, dashboards, manual edits), we:

1. Store data once, in a single, secure source
2. Apply transformations using "pure functions"

### What does that mean in simple terms?

A pure function is just a rule that:

- Always gives the same result for the same input
- Doesn't depend on hidden context or manual edits
- Can be run again and again with identical results

**In practice:**
Every time a survey submission is created or updated, it goes through these rules and produces a clean, standardized
output.

### Why this changes everything

#### **Your data never diverges**

There is only one **source of truth** and one way to transform it.
No more mismatches between files, dashboards, or reports.

#### You are not limited by tools like Excel

- No fragile formulas
- No broken cell references
- No "this logic is too complex to implement"

#### The logic is written in code (here `TypeScript`), so:

- It can handle any level of complexity
- It auto-validated by the compiler telling you if what you are writing is relevant.

#### Changes are safe and controlled. If a survey changes:

- The system automatically detects what is no longer valid
- You must update the logic before anything breaks

👉 This is something Excel or PowerQuery cannot guarantee.

#### It's easier to understand and maintain

Instead of:

- Hundreds of interconnected cells
- Hidden dependencies

You get:

- Clear, explicit transformation rules
- Logic that can be read and audited

### Real-world impact

This is the philosophy behind **NexusPortal**. It allows us to:

- Handle **200+ inconsistent Kobo forms**
- Harmonize them automatically
- Generate reports in **one click**
- Ensure data is **accurate, consistent, and auditable**

## Summary

When surveys become complex, manual tools break down.  
A centralized system with deterministic transformation rules is the only way to scale reliably.
