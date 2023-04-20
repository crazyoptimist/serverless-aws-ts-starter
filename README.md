# Serverless AWS Typescript Starter

## Style Guide

### Project Structure

- `src/functions` is where we organize serverless functions for this service. Keep function files as simple as possible and organize broken down business logics inside `src/helpers`.
- `src/helpers` is where we organize broken-down modules that runs business logics, create sub folders if needed.
- `src/config` is where we organize application global configurations and constants. Every environment variables should be verified(and maybe re-organized as nested objects if we prefer) in `src/config`. We should not read env vars directly in random places like `process.env.FOO`, because it's hard to track what's used where.
- `src/utils` is where we organize utility functions that doesn't contain any business logics
- `src/common` is where we organize shared code which is reused and is shared between different modules, and is specific to this project. Create sub folders if needed.
- `src/scripts` is where we organize one-off scripts.
- `testdata` is where we put test data. Create sub folders as needed.

### Naming Conventions

- Use `kebab-case` for folders
- Use `camelCase` for variables, functions, and files
- Use `PascalCase` for classes, types, interfaces, enums
- Use `ALL_UPPER_CASE` for constants

### Tests

- Place test files in the same folder as the code that the tests are written for.

## Development

- Node.js(> v16.x) is required
- Install dependencies

  ```bash
  npm i
  ```

- Run the application

  ```bash
  npm run dev
  ```

## Logging

- Structured logging for lambda functions is setup using `pino` and `pino-lambda`.
- We can import logger from `src/utils/logger` and use it anywhere in the application.

## Observability

- Define key application parameters to observe/monitor.

## Request Validation

- You can use `zod` or `yup` for validating `event.body`.

## Documentation

- You can use [Declarative Diagramming(D2) language](https://d2lang.com/) to document application design.

## Deployment

- Create an IAM user with fine-grained permissions for deployment
- Store dot env files as secrets for each environments(a.k.a. stages in serverless), and create `.env` file in the CD pipeline from them. Managing secrets would be differnt and you can persue your favorite way of managing it. Below is an example case of GHA.

  ```bash
  cat secrets.PROD.ENV > .env
  ```
