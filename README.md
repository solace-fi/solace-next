## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## To build and deploy

**If this project is hosted on vercel, deploying to github will deploy the project. Remember to add environment variables to Vercel for production builds.**

Otherwise, the required commands are as follows:

```
yarn build
yarn dev -p 3000
```

You can use any port you want. You can also remove the `-p number` if you wish to use the default one.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment variables

If you want google analytics to be enabled, add the environment variable `NEXT_PUBLIC_GA_MEASUREMENT_ID` to your `.env.local` file. If on Vercel, you'll find environment variables in the settings tab.
