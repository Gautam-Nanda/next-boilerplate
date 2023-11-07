# Next.js Authentication Boilerplate

This is a boilerplate codebase for building web applications with Next.js that includes user authentication, SCSS for styling, and a structured API route setup. It utilizes the [next-iron-session](https://github.com/vvo/next-iron-session) library for managing user sessions.

## Features

- User authentication (login, signup, logout) using Next.js API routes.
- SCSS integration for styling your application.
- Organized API routes for handling server-side logic.

## Getting Started

### Prerequisites

Before you begin, make sure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone <repository_url>
   cd next-boilerplate
   ```

2. Install dependencies

   ```bash
   npm install
   or
   yarn install
   ```

3. Configure environment variables

    ```bash
   DATABASE_URL = 'YOUR_DATABASE_URL'
   APPLICATION_SECRET='YOUR_APPLICATION_SECRET'
   NODE_ENV='NODE_ENV'
   ```

4. Start development server

    ```bash
   npm run dev
   or
   yarn dev
   ```

5. Your application should now be running at http://localhost:3000.

## Usage

- **Authentication Routes**: The `pages/api/auth` folder contains authentication API routes (`login.js`, `signup.js`, `logout.js`) for you to implement your authentication logic.

- **Styles**: Add stylesheets in SCSS format to the `styles` folder and import them in your components.

- **Customization**: Customize the pages in the `pages` directory according to your application requirements.

## Deploying

To deploy your Next.js application, follow the deployment instructions for your chosen hosting platform. Popular options include:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [next-iron-session Documentation](https://github.com/vvo/next-iron-session)