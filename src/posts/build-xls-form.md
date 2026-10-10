---
title: "How to create an XLSForm: A quick guide with examples"
date: "2026-09-30"
coverPath: "/blog/excel-is-not-a-db/cover.jpg"
tags: Blog
author: Alexandre Annic -- Software Engineer
hidden: true
---

XLSForm is a standard to define surveys using a Excep spreadsheet.
It is widely used in digital data collection and
is supported by tools such as KoboToolbox and ODK.

Its strength lies in how flexible it is. 
You can use it to build complex, dynamic forms with features such as skip logic, 
validation rules, calculations, etc.

---


There are UIs that try to simplify XLSForm creation, 
but they often become limiting once forms get more complex. 
For many people, a spreadsheet remains the most efficient way to build an XLSForm.

The disadvantage is that spreadsheets don't validate the form while you build it. 
You can work on a form for hours without knowing that 
a typo will cause an error when you validate or upload it. 
And when you are working on a more complex formula, 
it can take quite a few tries to get it right.

---

### 1. Create the `survey` sheet

An XLSForm starts with a sheet named `survey`. The 3 columns you will use the more often are:

| type                 | name           | label                                      |
| -------------------- | -------------- | ------------------------------------------ |
| text                 | household_name | Name of household                          |
| integer              | household_size | How many people live in this household?    |
| select_one gender    | gender         | Gender of respondent                       |

- `type`: defines the type of question. There are many other question types, such as `date`, `select_multiple`, `calculate` and more.
- `name`: the technical identifier of the question. 
  It should usually be unique, even though this is not always strictly required. 
  In missions I worked on, I encountered many forms where `name` was just random letters because the author didn't see much value in them,
  but it's important to make them short and understandable.
  2 main reasons for this: 
  - If you use export your data via an API like the KoboToolbox one or other app, this name will reference the question. 
    If you build Python script or whatever out of them, you will benefit from understable name. 
  - If you export your data and build spreadsheet with complex formula, using the name is much more reliable than relying on column positions. Your formulas are then less likely to break when the form changes over time.  
- `label`: as it will be displayed to the user. This column has specific rules once you start working with multiple languages, which will be covered later.

Note that a choice list can be reused in different questions. 
For instance, a form might ask the country of residence, country of birth and nationality. 
All those 3 questions can use the same
`country` choice list instead of defining the same choices 3 times.