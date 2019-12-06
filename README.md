# ATAG Conformance Evaluation Report Tool

With this tool, you can find out how accessible your [authoring tool](https://www.w3.org/TR/ATAG20/#def-Authoring-Tool) is. It will guide you through the success criteria of the Authoring Tool Accessibility Guidelines 2.0 (ATAG 2.0).


## Development

This application is built with [Svelte](https://svelte.dev). To run it locally, you need to clone it this repository, have [Node](https://nodejs.org) installed and then run this in the project's directory:

```bash
npm install
```

This may take a while the first time, but it only needs to be done once.

Then, to build the app with [Rollup](https://rollupjs.org), and serve it on a local dev server, run:

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).


