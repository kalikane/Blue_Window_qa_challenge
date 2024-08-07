# Blue_Window_qa_challenge
My solution to the Blue Window QA Engineer Challenge
# Playwright Tests for Blue_Window_qa_challenge

This repository contains automated tests using Playwright and typscrip

## Clean code concepts implemented
- POM
+ Fixture
* Enumartion

## Prerequisites

- Node.js (version 14 or higher)
- npm (usually installed with Node.js)
- Git

## Installation

1. Clone this repository:
`git clone https://github.com/kalikane/Blue_Window_qa_challenge.git`

2. Navigate to the project directory:
`cd Blue_Window_qa_challenge`

3. Install dependencies:
`npm install`

4. To run all tests :
`npx playwright test`


## Challenge encountered

1. The implementation approach of tooltip made impossible to get the locator even by trying to freeze the navigator.
2. The quickly disapear of the Success! message made me use the DOM interception approach
