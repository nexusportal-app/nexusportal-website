---  
title: "XLSForm question's name matters"  
description: "Learn why meaningful XLSForm question and choice names matter for data exports, Excel formulas, Power BI dashboards, and scripts."
date: "2026-11-11"  
coverPath: "/blog/xls-form-question-name/cover.png"  
tags:
    - Blog
metaTags:
    - XLSForm
    - KoboToolbox
    - PowerBi
    - Excel
    - Information Management 
author: Alexandre Annic -- Software Engineer
---  

In an XLSForm, the `name` column represents the **technical identifier** of a question or a choice.  
It should be unique, although this is not always strictly required in apps.

Here is a minimal example of a XLSForm for a household survey.  

| type | name | label | repeat_count |
|---|---|---|---|
| integer | `household_size` | How many people in this household? | |
| **begin_repeat** | `household` | Household member details | `${household_size}` |
| select_one gender | `gender` | What is this person's gender? | |
| integer | `age` | How old is this person? | |
| **end_repeat** | | | |

In the missions I have worked on, I have seen forms where `name` **values were just strings of random letters because the authors didn't see much value in them**,  assuming the labels were enough.

And it caused us a lot of problems.

For instance:

### 1. Making exported data easier to read

Keep in mind that your form will also become a database.

Question labels can be verbose, especially for forms shared publicly, and they may change as you improve the wording. But you don't want unstable and verbose cell contents when visualizing your database.

KoboToolbox lets you export data in 2 ways:
- using labels,
- using XML values which use `name` of questions and choices.

Now check those 3 use cases:

#### Export using labels

|What are y...| What is you... | Please, can you...|  
|---|---|---|  
|I've diff..| 42 | I'm a w... |  
|I've diff..| 3 | I'm a m... |  
|I've diff..| 2 | I'm a w... |  

#### Export using XML values with `name` we didn't realize they matter

|wdhthh| hoar | cytyg |  
|---|---|---|  
|cs cr| 42 | gf |  
|cw| 3 | gm |  
|cr cw| 2 | pnts |  

#### Export using XML values with streamlined `name`

|difficulties| age | gender |  
|---|---|---|  
|seeing reading| 42 | female |  
|walking| 3 | male |  
|reading walking| 2 | prefer_not_to_say |  

Isn't the last version much easier to work with?

### 2. Working with Excel

To write Excel formulas, you can rely on either:

1. Cell references (e.g. `=COUNTIF(B:B, "female")`)
2. Table names and column headers (e.g. `=COUNTIF(Survey[gender], "female")`)

Option 2 is more robust and easier to maintain because:

- Adding new questions or reordering them can shift columns and break cell references.
- It makes formulas easier to read, write and maintain.

However, option 2 is only possible if you export your data using XML values. Spaces and special characters in column names may break formulas, in addition to making them really verbose.

### 3. Working with PowerBi

Anyone that already worked with both KoboToolbox and PowerBi have certainly faced the problem below.

Imagine you want to build a bar chart based on how many times each choice of a `select_multiple` question has been selected.

Let's say the question is about beneficiary disabilities, with such choices:
- **Label:** Can't see | **Name:** seeing
- **Label:** Can't read | **Name:** reading

In KoboToolbox, when exported, selected choices of a `select_multiple` question are split by spaces. So,
- Exporting with `name` gives for instance: _"seeing reading"_
- Exporting with labels gives: _"Can't see Can't read"_

Since the labels themselves contain space, you cannot reliably split them. This makes it impossible to count how many times each choice was selected. The chart can't be built.

Therefore, you have no other choice to export as XML values.

Once established, compare those 2 versions of a PowerQuery:

```aiignore  
Table.SelectRows(
    Source,
    each List.Contains(
        Text.Split([disabilities], " "),
        "seeing"
    )
) 
```  

vs

```aiignore  
Table.SelectRows(
    Source,
    each List.Contains(
        Text.Split([wdhthh], " "),
        "cs"
    )
)
```  
The second example works too, but it is harder to write, read and reason about. Having meaningful `name` will save time and headache.

### 4. Scripts written

The same principle applies to scripts, even more strongly.

When you retrieve submissions through an API, such as the KoboToolbox API, the response uses question and choice `name`, not labels.

For example

#### Meaningful names

```python  
sum(  
    person["gender"] == "female"  
    for person in submission["persons"]  
)
```  
#### Meaningless names

```python  
sum(  
    person["wig"] == "gf"  
    for person in submission["hhm"]  
)
```  
Again, both scripts work, but as your code grows, meaningless `name` make the script increasingly difficult to read, debug and maintain. Again, having meaningful `name` will save time and headache.

### Conclusion

Think beyond the form itself.

When building a XLSForm, we tend to focus on what users will see: the labels. But the form will also become a data source that people will use in Excel, PowerBi, scripts or any other tools.

Choose `name` values that are meaningful, short and stable. Your future self and everyone working with your data will thank you for it.
