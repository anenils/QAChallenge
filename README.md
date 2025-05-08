# QAChallenge Playwrigt automation test

## Overview

This project is an automation test suite for testing an e-E2E Sales flow on Eneco.nl using **Playwright**. The tests aim to ensure the system's behavior is correct and that the application is functioning as expected across multiple pages.

## Project Structure

The project is structured as follows:

```bash
├── common/ # Shared classes (e.g., BasePage)
├── pages/ # Page object files for each step in the sales flow
├── tests/ # Playwright test scenarios
└── README.md # Project documentation
```

## Dependencies

The project uses **Playwright** for browser automation, so make sure to install the necessary dependencies before running the tests.

### Install Dependencies

To get started with the project, clone the repository and install the dependencies:
git clone https://github.com/your-username/your-repository.git
cd your-repository
npm install

```bash
git clone https://github.com/anenils/QAChallenge.git
cd your-repository
npm install

npx playwright install
```

### Build and Test

To run test use the follwing commands

```bash
npx playwright test
```

Run specific test

```bash
npx playwright test tests/salesFlow.spec.ts
```

Run in UI mode

```bash
npx playwright test --ui
```
