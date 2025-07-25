# RVCE SIP Volunteer Hub

This is a modern web application for RVCE students to register as volunteers for the junior Student Induction Programme (SIP). It is built with React, TypeScript, and Vite.

## Prerequisites

- Node.js (v18 or later recommended)
- npm, yarn, or pnpm

## Getting Started

Follow these instructions to get the project up and running on your local machine for development and testing purposes.

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd rvce-sip-volunteer-hub
```

### 2. Install Dependencies

Install the project dependencies using your preferred package manager:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set Up Environment Variables

The application sends registration data to a Google Apps Script. You need to provide the Web App URL for this script as an environment variable.

1.  Copy the `.env.example` file to a new file named `.env`:
    ```bash
    cp .env.example .env
    ```
2.  Open the `.env` file and replace the placeholder with your actual Google Apps Script Web App URL.

    ```
    VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
    ```

### 4. Run the Development Server

Start the Vite development server:

```bash
npm run dev
```

Open [localhost](http://localhost:5173) (or whatever port is indicated in your terminal) to view the application in your browser. The page will reload automatically if you make edits.

## Available Scripts

-   `npm run dev`: Runs the app in development mode.
-   `npm run build`: Builds the app for production to the `dist` folder.
-   `npm run preview`: Serves the production build locally for testing.

## Deploying to Vercel

Vercel is the recommended platform for deploying this Vite application.

1.  **Push your code to a Git repository** (e.g., GitHub, GitLab, Bitbucket).
2.  **Import your project into Vercel.** Vercel will automatically detect that you are using Vite and configure the build settings.
3.  **Configure the Environment Variable:**
    -   In your Vercel project dashboard, go to `Settings` > `Environment Variables`.
    -   Add a new variable:
        -   **Name:** `VITE_GOOGLE_APPS_SCRIPT_URL`
        -   **Value:** Paste your Google Apps Script Web App URL here.
    -   Ensure the variable is available for the Production environment (and Preview/Development if needed).
4.  **Deploy.** Vercel will build and deploy your application. Once complete, you will be given a live URL.
