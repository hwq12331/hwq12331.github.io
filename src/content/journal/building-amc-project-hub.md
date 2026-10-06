---
title: "From business workflows to AMC Project Hub"
description: "Connecting projects, procurement, HR and quality records in a practical React/TypeScript workspace."
category: "Digital transformation"
published: 2026-10-06
order: 1
cover: "workflow"
---

Digital transformation becomes tangible when a business requirement turns into a usable workflow. A purchase order needs a project. A quality inspection needs a checklist. A gate pass needs a clear record of who arrived and when they left.

I developed **AMC Project Hub for Al Manaseeb Contracting Company** to bring operational workflows into a connected application. The portfolio version uses React, TypeScript and Supabase/PostgreSQL, and includes a sample-data browser demo that anyone can explore.

## Start with the relationships

The useful question is not simply “Which screens do we need?” It is “Which records belong together?”

A project provides context for procurement and inspections. A purchase order contains line items with quantities and prices. A QA checklist contains individual inspection items with categories, risk levels and outcomes. A gate pass has a lifecycle from check-in to completion or cancellation.

Modeling those relationships makes it easier to build interfaces that reflect the underlying work. It also keeps information such as a purchase-order total tied to the items that produce it.

In the application, shared TypeScript types describe these domain records, and SQL migrations define the database structures. The UI and the data model are two views of the same workflow.

## Seven modules, one workspace

The application brings together seven modules:

| Module | What it supports |
| --- | --- |
| Dashboard | Project, procurement and QA summaries, with recent activity |
| Projects | Project creation, lifecycle status and progress updates |
| Procurement | Purchase orders, line items, totals and order status |
| HR & Safety | Employee, department and certification records |
| QA/QC | Checklists, inspection items and category/risk/status filters |
| Clients | Client cards, additions and industry filtering |
| Gate Pass | Visitor/contractor records, check-in, checkout and cancellation |

The modules share a navigation structure and reusable interfaces. That consistency matters: a user should not need to relearn the application when moving from procurement to quality records.

## Make state changes explicit

A workflow is more than a form. It includes what happens after a record is created.

For projects, progress and lifecycle status should remain understandable. For procurement, an order can move from requested to ordered to received. For gate passes, checkout changes an active visit into a completed record.

The project interfaces expose these changes directly. The application also uses loading and error states around data operations, helping users distinguish between an action still in progress and one that did not complete.

## A demo that people can actually try

The public portfolio demo uses an in-memory adapter with sample projects, employees, orders, inspections and gate passes. Visitors can create or update sample records without configuring a Supabase account.

That is a useful separation:

- The **sample-data mode** makes the interface easy to evaluate. Changes reset when the page is refreshed.
- The **Supabase mode** uses the database integration and SQL migrations with a separately configured project.
- The **Clients screen** currently uses local component state. Some client-card actions remain interface placeholders.

Clear boundaries make the demo more informative. A visitor can see which workflows are implemented and which parts are still prototype interfaces.

## Verify the meaningful operations

The portfolio release includes regression checks for table loading, project updates, purchase-order totals, QA item updates, related-item deletion and gate-pass checkout.

Browser checks also exercised the seven modules, created a sample project and confirmed that refreshing resets demo changes. These checks support the behavior of the demo; they do not establish production adoption or measured time savings.

My wider internship work also included industrial-project requirements, quotations, delivery schedules, work breakdown structures and HSE documentation. That business context is valuable because it connects the implementation to the operational questions the software is meant to answer.

## Explore the project

- [Try the AMC Project Hub demo](https://hwq12331.github.io/AMC-Project-Hub-Portfolio/)
- [View the source and setup instructions](https://github.com/hwq12331/AMC-Project-Hub-Portfolio)

The central idea is simple: understand the relationships, make the workflow visible, and build an interface that supports the next action.
