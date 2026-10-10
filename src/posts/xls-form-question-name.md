---
title: "XLSForm question's name matter"
date: "2026-09-30"
coverPath: "/blog/xls-form-question-name/cover.png"
tags: Blog
hidden: true
author: Alexandre Annic -- Software Engineer
---

In an XLSForm, the `name` column represents the **technical identifier** of a question.
It should generally be unique, although this is not always strictly required.

In the missions I've worked on, I've come across forms where `name` was just a string of random letters because the author didn't see much value in it.
But it's worth **keeping names short and meaningful**.

### Why does the name matter?

When you paste your data into Excel, it's a good practice to export them as XML, meaning using `name` instead of labels.
It makes processing easier and more stable over time. Imagine such a table

please_desc...|wiyg|
2|fm
3|m 
2|un


When you paste your data into Excel and start writing complex formulas, using meaningful names is much more reliable than relying on column positions. Your formulas are then less likely to break when the form changes.
The same applies when you export submissions through an API, such as the KoboToolbox API. The `name` is used to identify the question, and you may then want to write scripts to process the data.
For example, this is easy to read:

```python
sum(
    person["gender"] == "female"
    for person in submission["persons"]
)
```

Compared with:

```python
sum(
    person["wiyg"] == "fm"
    for person in submission["please_describe_your_household_composition"]
)
```

The second example works too, but it is harder to write, read and reason about, one you start using data in scripts, reports or any other workflows.
