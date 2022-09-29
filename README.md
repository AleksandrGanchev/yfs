[![Netlify Status](https://api.netlify.com/api/v1/badges/6e59d593-32c9-4a43-a4fb-e1cfa9fdfeb7/deploy-status)](https://app.netlify.com/sites/facit-master/deploys)

# Facit | React(Vite) Admin Dashboard Template V3.2.3

#### Required files (Checked ones should definitely be in your project)

-   [x] public[^1]
-   [x] src[^1]
-   [ ] SvgIcons
-   [x] .env[^1]
-   [x] .env.development[^1]
-   [x] .env.production[^1]
-   [ ] .eslintignore[^2]
-   [ ] .eslintrc[^2]
-   [ ] .gitattributes
-   [ ] .gitignore
-   [ ] .prettierignore[^3]
-   [ ] .prettierrc[^3]
-   [ ] .stylelintignore[^4]
-   [ ] .stylelintrc[^4]
-   [x] .svgrrc[^1]
-   [ ] LICENSE
-   [x] package.json[^1]
-   [ ] package-lock.json
-   [ ] README.md
-   [x] tsconfig.json
-   [x] tsconfig.node.json
-   [x] vite.config.ts
-   [x] node_modules[^1]

[^1]: These files or folders are absolutely necessary for the project to work properly.
[^2]: You can update the ESLint settings or delete them if you don't want to use them.
[^3]: You can update the Prettier settings or delete them if you don't want to use them.
[^4]: You can update the Stylelint settings or delete them if you don't want to use them.

## Node

**Node version must be 16 or higher.**

### npm

`npm install --legacy-peer-deps`

Inside the newly created project, you can run some built-in commands:

### `npm run dev`

Runs the app in development mode.<br>
Open [http://127.0.0.1:5173](http://127.0.0.1:5173) to view it in the browser.

# General information

In our production and development server we have /api gateway that proxy our request to backend API.

# How to build our application

Builded project placed in **/dist** directory

## Building for production server

Production branch - **main**

`npm run build:prod`

## Building for development server

Development branch - **dev**

`npm run build:dev`

For development server, you might build your project with

`docker-compose up`
