<div align='center'>
    <h1>Markdown App</h1>
    <p><i>Designed by Frontend Mentor</i></p>
    <p><a href='https://markdown-app-nine.vercel.app'>DEMO</a></p>
    <div>
        <img src='https://img.shields.io/github/deployments/grzechu335/markdown-app/production?style=for-the-badge'/>
        <img src='https://img.shields.io/github/license/grzechu335/markdown-app?style=for-the-badge'/>
        <img src='https://img.shields.io/github/languages/top/grzechu335/markdown-app?style=for-the-badge'/>
    </div>
</div>

<!-- Table of contents  -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About the Project</a></li>
    <li><a href="#project-screen-shot">Project Screen Shot</a></li>
    <li><a href="#technologies">Technologies</a></li>
    <li><a href="#getting-started">Getting started</a></li>
  </ol>
  </details>

## About the Project

Markdown App is web application with user authentication, enabling easy note creation, editing, and deletion using Markdown language.

## Project Screenshot

![screenshoturl]

## Technologies

-   ![TypeScriptBadge]
-   ![ReactBadge]
-   ![NextJSBadge]
-   ![TailwindCSSBadge]
-   ![PostgresqlBadge]
-   ![PrismaBadge]
-   ![reduxbadge]

## Getting Started

1. Clone repo by entering the command

```sh
git clone https://github.com/Grzechu335/invoice-app
```

2. Install NPM packages (you will need node and npm installed globally on your machine)

```sh
npm install
```

3. Create an .env file <strong style="color: red">/include it in your gitignore file!/</strong> and set the following environment variables in it:

```js
GOOGLE_ID = '[Google Client ID]'
GOOGLE_SECRET = '[Google Secret Key]'
NEXTAUTH_SECRET = '[NextAuth Secret Key]'
DATABASE_URL = '[Supabase Database URL]'
```

-   How get Google ID, Google Secret, setup GoogleCloud and URI [here][googleenvinstruction]
-   How get NextAuth Secret [here][nextauthsecretinstruction]
-   How get Database URL [here][databaseurlinstruction]

4. Run command on local environment

```sh
npm run dev
```

5. To visit app:

```
http://localhost:3000
```

## Licence

Distributed under the MIT License. See LICENSE.txt for more information.

<!-- Links -->

[typescriptbadge]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[reactbadge]: https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB
[nextjsbadge]: https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white
[tailwindcssbadge]: https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white
[prismabadge]: https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white
[postgresqlbadge]: https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white
[reduxbadge]: https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white
[screenshoturl]: public/screenshot/screenshot.png
[googleenvinstruction]: https://www.balbooa.com/gridbox-documentation/how-to-get-google-client-id-and-client-secret
[nextauthsecretinstruction]: https://next-auth.js.org/configuration/options
[databaseurlinstruction]: https://supabase.com/docs/guides/integrations/prisma
