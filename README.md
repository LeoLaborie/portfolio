# leolaborie.com portfolio

This repository contains the source code of my leolaborie.com portfolio.

## Installation

To set up the project locally, follow these steps:

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/LeoLaborie/portfolio.git
    ```
2.  **Navigate to the project directory**:
    ```bash
    cd portfolio
    ```
3.  **Install dependencies**:
    ```bash
    npm install
    ```

## Usage

After installation, you can run various scripts to develop, build, and start the application.

*   **Start the development server**:
    ```bash
    npm run dev
    ```
    This command starts the application in development mode, typically accessible at `http://localhost:3000`.

*   **Build the project for production**:
    ```bash
    npm run build
    ```
    This command creates an optimized production build of the application.

*   **Start the production server**:
    ```bash
    npm run start
    ```
    This command runs the built application in production mode.

*   **Run code linting**:
    ```bash
    npm run lint
    ```
    This command executes ESLint to check for code quality and style issues.

## Features

Based on the detected dependencies and configuration, this project includes the following functionalities:

*   **Internationalization (i18n) Support**: Utilizes `next-intl`, `i18next`, `react-i18next`, and `get-user-locale` for multi-language capabilities.
*   **Animations**: Integrates `framer-motion` for declarative animations.
*   **Iconography**: Employs `lucide-react` for flexible and customizable icons.
*   **Intersection Observation**: Uses `react-intersection-observer` for detecting when an element enters or exits the viewport.
*   **Utility-First CSS Styling**: Implemented with `Tailwind CSS`.
*   **Server-Side Rendering (SSR) / Static Site Generation (SSG)**: Leverages `Next.js` for enhanced performance and SEO.

## Tech Stack

This project is built using the following technologies:

*   **Languages**: TypeScript, JavaScript
*   **Frameworks**: Next.js, React, Tailwind CSS
*   **Tools**: ESLint
*   **Package Manager**: npm

## Configuration

The project uses several configuration files to manage its settings:

*   **`next.config.js`**: Configures Next.js, including integration with the `next-intl` plugin and settings for image optimization.
*   **`tsconfig.json`**: Defines TypeScript compiler options such as target ECMAScript version, libraries, strictness rules, and other type-checking settings.
*   **`.eslintrc.json`**: Contains the configuration for ESLint, specifying linting rules and environments.
*   **`postcss.config.mjs`**: Configures PostCSS, typically used for processing CSS, including Tailwind CSS.
*   **`jsconfig.json`**: Provides configuration for JavaScript language features within the editor.
*   **`.gitignore`**: Specifies files and directories that Git should ignore.


## Badges

![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue.svg)
![npm](https://img.shields.io/badge/Package%20Manager-npm-red.svg)
![License: Unspecified](https://img.shields.io/badge/License-Unspecified-lightgrey.svg)