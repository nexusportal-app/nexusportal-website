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

To make Excel formulas robust, PowerBi data mapping working, or Python script readable,
labels are not an option. 

You can find concrete examples of why this matters in this article, where I can go into more detail than in a LinkedIn post:
https://www.nexusportal.app/

Choose names that are meaning, short and stable. Your future self and everyone working with your data will thank you for it.

