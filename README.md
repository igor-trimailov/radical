# Radical interview app

## Overview

This application is an example app prepared for an interview.

## Prerequisites

-   Node.js (v20 or higher)
-   New York Times API_KEY specified in the .env file


## Installation

### Step 1: Clone the Repository

Clone the repository to your local development environment:

```sh
git clone git@github.com:igor-trimailov/radical.git
```

### Step 2: Install Dependencies

Install the necessary node modules to get started:

```sh
npm i
```

### Step 3: Setup Environment Variables

For local development, you need to set up the New York Times API_KEY in the .env file. For instance,

```sh
API_KEY=yourkeygoeshere
```

### Step 4: Start the Applicaion

This will start a local sever and open the application in the browser.

```sh
npm run start
```

## Scripts

Utilize the following scripts for development and building the application:

```sh
npm run build # Build the application in production mode
npm run start # Start the development server and open the application in a web browser
npm run lint # Lint the TypeScript files using ESLint
npm run format # List files that differ from Prettier formatting
```
