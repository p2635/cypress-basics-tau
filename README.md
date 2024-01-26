[![Cypress CI tests](https://github.com/p2635/cypress-basics-tau/actions/workflows/node.js.yml/badge.svg?event=push)](https://github.com/p2635/cypress-basics-tau/actions/workflows/node.js.yml)

# What is this repo?

This repository documents my learning on the courses:

- [Introduction to Cypress course on Test Automation university](https://testautomationu.applitools.com/cypress-getting-started/).
- [Advanced Cypress](https://testautomationu.applitools.com/advanced-cypress-tutorial/)

This place is a demonstration of my skills based on what I learned. My aim was not to create a replica of the original repo. I only included meaningful tests here, removing anything that looked like drills or exercises. For example, I deleted the one that only contained `cy.visit("/");`.

## Application Under Test

A clone of the popular [Trello app](https://trello.com).

You can...

- Create boards, lists and cards
- Drag and drop cards between lists or even upload a picture to the card detail
- Sign up and log in to create private boards.

For more information, please refer to the original repo created by Filip Hric: https://github.com/filiphric/cypress-basics-tau.

## What I learned

### Introduction to Cypress Course

- Cypress is a testing tool that does not work like Selenium (which drives the web browser). The way it tests is more like an app automation. It runs two iframes (one is Cypress and the one inside that is the app under test)
- Initialise an npm package and install cypress as a dev dependency
- Understand the general folder structure of cypress
- How to use selectors
- Write simple assertions
- Access Cypress project settings in the GUI and enable an experimental feature called 'Cypress Studio'
- Learn how chaining works with parent, child and hybrid commands
- The difference between query (like assertions) and action commands
- Query commands retry but non-queries do not
- Running Cypress in headed and headless mode.
