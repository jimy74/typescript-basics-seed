<h1 align="center">
<img width="40" valign="bottom" src="https://ultimatecourses.com/static/icons/typescript.svg">
TypeScript: Basics Training
</h1>
# Conclusion about Typescript

- Prefer enum rather than Union for values, especially for many pizza types for example (to DRY)
- Prefer interface than type, because it's extendable
- Prefer interface than tuple, because it's more understandable
- Don't re-type a well typed function with the general 'Function' type,
    because we lose some types safety checks, create a new type instead (reusable)!
- Never use the type any, if there is many possibilities try to enumerate them with the Union operator |
- Be careful with optional parameters, and undefined values, that might be set to '0' and still return false
- See the section for 'interface with index signature', super interesting to make evolutive / super dynamic data structures
- Classes in typescript are pretty cool and not boring at all anymore!
- Visibility in class constructor can generate the attribute, cool for DRY
- REALLY Never use String or Number, always string or number in lowercase (I know, not like in Java)
- Instead of enums, see the alternative with const, it's tricky but remains more understandable once transformed to JS, with the same benefits (when/if enums are added to JavaScript then you can move to the new enum syntax)

---

> This repo serves is a fork of the project for Ultimate Angular's TypeScript Basics course as well as the final solution in stepped branches, come and [learn TypeScript](https://ultimatecourses.com/courses/typescript) with us!

[Setup and install](#setup-and-install) | [Tasks](#tasks) |
[Resources](#resources)

## Setup and install

Fork this repo from inside GitHub so you can commit directly to your account, or
simply download the `.zip` bundle with the contents inside.

#### Dependency installation

During the time building this project, you'll need development dependencies of
which run on Node.js, follow the steps below for setting everything up (if you
have some of these already, skip to the next step where appropriate):

1. Download and install [Node.js here](https://nodejs.org/en/download/) for
   Windows or for Mac.

2. Install TypeScript globally via `npm i -g typescript`

That's about it for tooling you'll need to run the project, let's move onto the
project install.

#### Project installation and server

Now you've pulled down the repo and have everything setup, using the terminal
you'll need to `cd` into the directory that you cloned the repo into and run
some quick tasks:

```
cd <typescript-basics-seed>
yarn install
# OR
npm install
```

This will then setup all the development and production dependencies we need.

Now simply run this to boot up the server:

```
yarn start
# OR
npm start
```

Visit `localhost:3000` to start building.

## Tasks

A quick reminder of all tasks available:

#### Development server

```
yarn start
# OR
npm start
```

## Resources

There are several resources used inside this course, of which you can read
further about to dive deeper or understand in more detail what they are:

* [TypeScript Docs](https://www.typescriptlang.org)
* [TypeScript Playground](https://www.typescriptlang.org/play)
* [AST Explorer](https://astexplorer.net)
