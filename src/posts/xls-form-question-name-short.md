---
title: "XLSForm question's name matter"
date: "2026-09-30"
coverPath: "/blog/xls-form-question-name/cover.png"
tags: Blog
hidden: true
author: Alexandre Annic -- Software Engineer
---

In an XLSForm, the `name` column represents the **technical identifier** of a question.

In the missions I've worked on, I've seen forms where `name` were just a string of random letters because the author didn't see much value in them, 
assuming the labels were enough.

And it caused us a lot of problems.

We must keep in mind that our form will also become a database and may also be used in external tools.

To make your Excel formulas robust, your PowerBi data mapping working, or your Python script readable,
labels are not an option. 

You can find concrete examples of why this matters in this article, where I can go into more detail than in a LinkedIn post:
https://www.nexusportal.app/

A little discipline when naming our questions can save hours of work.




Labels may change and be verbose when
Take for instance:

1. Making exported data easier to read

Your form will also become a database.

Question labels can be verbose, especially for forms shared publicly.
They are also change while you improve the wording.
But you don't want to have the verbose sentences you wrote in the form on your database.

KoboToolbox lets you export data using labels or XML values. When you choose XML values, 
the question names become column headers, and the choice names become the values for select questions.

For example, imagine a form with these questions:

#### Export with labels
|What are y...| What is you... | Please, can you...|
|---|---|---|
|I've diff..| 42 | I'm a w... |
|I've diff..| 3 | I'm a m... |
|I've diff..| 2 | I'm a w... |

#### Export with `name` we didn't realize they matter

|wdhthh| hoar | cytyg |
|---|---|---|
|cs cr| 42 | gf |
|cw| 3 | gm |
|cr cw| 2 | pnts |

#### Export with streamlined `name`

|difficulties| age | gender |
|---|---|---|
|seeing reading| 42 | female |
|walking| 3 | male |
|reading walking| 2 | prefer_not_to_say |

The last version is much easier to work with. You can understand the data without constantly checking the original form.

### 2.  Working with external tools

Example people working with both KoboToolbox and PowerBi have probably already faced when willing to build 
a chart based on a `select_multiple` question.

Imagine a question `select_multiple` about disabilities, with such options:
- **Label:** Can't see | **Name:** seeing
- **Label:** Can't read | **Name:** reading

Exporting such questions from KoboToolbox, options will be split by spaces. So, 
- Exporting with `name` gives: _"seeing reading"_
- Exporting with labels gives: _"Can't see Can't read"_

Since the label version contains space, it cannot be reliably split.

Also, So relying on `name` is way easier. Then in PowerQuery you will prefer reading this 
```aiignore
Table.SelectRows(
    Source,
    each [disabilities] = "seeing"
```

than 

```aiignore
Table.SelectRows(
    Source,
    each [wdhthh] = "cs"
```

### 3. Scripts written

The same applies when you export submissions through an API, such as the KoboToolbox API. The `name` is used to identify the question, and you may then want to write scripts to process the data.
For example, this is easy to read:

```python
if 'seeing' in data.disabilities:
  ...
```

```python
if 'cs' in data.wdhthh:
  ...
```

The second example works too, but it is harder to write, read and reason about especialyl when the script become large


4. `name` can't be changed easily

Once other systems depend on your names, changing them can break things.
For example, if a question named `household_id` is renamed to `family_id`, existing scripts referencing `household_id` may stop working.

Choose names that are meaningful, concise, and reasonably stable. They don't need to be perfect English sentences; they need to be useful identifiers.

----
----
----
----


it's a good practice to export them as XML, meaning using `name` instead of labels.
It makes processing easier and more stable over time. For instance, anyone who ever built a PowerBi dashboard from
KoboToolbox export knows the blocking point on `multi_select`

When you paste your data into Excel and start writing complex formulas, using meaningful names is much more reliable than relying on column positions. Your formulas are then less likely to break when the form changes.

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

