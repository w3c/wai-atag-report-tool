# ATAG Report Tool (ART)

With this tool, people can report on how accessible their [authoring tool](https://www.w3.org/TR/ATAG20/#def-Authoring-Tool) is. It guides them through the Success Criteria of the [Authoring Tool Accessibility Guidelines 2.0](https://www.w3.org/TR/ATAG20/) (ATAG 2.0), allowing to record a **result** and **observation** for each. It outputs to JSON and HTML.
  
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

## Deployment

To create an optimised version of the app:

```bash
npm run build
```

### Preview on Netlify

[![Netlify Status](https://api.netlify.com/api/v1/badges/edc36781-ec31-41e0-9c4c-6af8d3090a58/deploy-status)](https://app.netlify.com/sites/wai-atag-report-tool/deploys)

On merge to the `main` branch, a preview is created on https://wai-atag-report-tool.netlify.app.

On PR to the `main` branch, a Netlify PR preview is created, see the PR for the URI.

### Release to W3C/WAI website

The W3C/WAI site serves what's on GitHub pages. To release to GitHub pages, [create a new release](https://github.com/w3c/wai-atag-report-tool/releases/new). This should trigger a [deploy action](https://github.com/w3c/wai-atag-report-tool/actions?query=workflow%3ADeploy).

### Environment-specific variables in HTML and JavaScript (.svelte)

In some deployment contexts, things like paths may need to vary. There are two steps to this:

1. Add environment specific settings to `config/[environment-name].json`, for example `{ pathPrefix: "/WAI" }` or `{ imageDir: "/images" }`
2. Before running `npm run build` or `npm run dev`, set `export NODE_ENV=[environment-name]`


#### Using in HTML

Use variables in HTML, with `{{ variable-name }}`, for instance `{{ pathPrefix }}`. If you need these non-escaped, use triple brackets, for instance `{{{ pathPrefix }}}`.

[Mustache](http://mustache.github.io/) replaces the variables in `src/index.html` and places the resulting HTML in `public/index.html`.

#### Using in JavaScript

In JavaScript, `__buildEnv__` is replaced with the name of the build environment using the [replace plugin for rollup](https://github.com/rollup/plugins).

To use variables, this is how  you can import the JSON file that your build environment needs: 

```js
import vars from "../../config/__buildEnv__.json";
```

The vars are now in the `vars` object, you can reference them with `vars.variableName`, for instance `vars.pathPrefix`. 

## Data structure

### ATAG Specification

This project has a JavaScript representation of the [ATAG 2.0 specification](https://w3.org/TR/ATAG20), [atag.js](https://github.com/w3c/wai-atag-report-tool/blob/master/src/data/atag.js).

This is an example of everything that can exist in this object, formatted as [yaml](https://yaml.org/):

```yaml
principle:
  handle: Short name for principle
  text: Full text of principle
  num: Unique reference for this item, e.g. A.1
  guidelines:
   - id: “Slug” for this item, e.g. “web-based-accessible”
     num: Unique reference for this item, e.g. A.1.1
     handle: Short name
     text: Full text for this guideline
     successcriteria:
       - id: short-name
         num: Unique reference for this item, e.g. A.1.1.1
         handle: Short name
         text: Full text for this success criterion
         level: Level, e.g. “Level A”
         details:
           - type: note
             handle: Note 1
             text: Full note text
           - type: olist
             items:
               - handle: Ordered Item
                 text: Full text for item
               - handle: Ordered Item 2
                 text: Full text for item 2
           - type: ulist
              items:
                - handle: Unordered item
                  text: Full text for item
                - handle: Unordered item
                  text: Full text for item 2
```

### Evaluation object

There is also an object that contains the current evaluation. It is based on the structure of ATAG and created in [`createCleanEvaluation`](https://github.com/w3c/wai-atag-report-tool/blob/main/src/utils/createCleanEvaluation.js).


Here is an example of what that object looks like, for reference:

```yaml
evaluation:
  evaluationData:
    successcriterionId: 
      - id: successcriterion.id,
      - num: unique reference to the criterion (like “A.3.1”)
      - handle: short reference to the criterion (like “Keyboard Access (Minimum)”)
      - result: any of Passed, Failed, Cannot Tell, Not Applicable, Not Checked. Defaults to "Not checked".
      - observations: string of Markdown. Defaults to null.
      - level: level this criterion applies to (like “A”). Note: some can apply to any of A, AA or AAA (“multi-level SCs”).
      - evaluatedLevel: level this criterion is evaluated as. Same as level, except for multi-level SCs, where it is picked from a dropdown.
  meta:
    name:
      id: "name"
      value: null
    website: 
      id: "website",
      value: null,
    executiveSummary: 
      id: "executiveSummary"
      value: null
    evaluatorName:
      id: "evaluatorName"
      value: null
    evaluatorOrg:
      id: "evaluatorOrg"
      value: null
    evaluationId:
      id: "evaluationId"
      value: defaults to date stamp set at generation of report (`Date.now()`)
    conformanceTarget: 
      id: "conformanceTarget"
      value: defaults to "AA", used to decide which criteria in scope
    createdWith: 
      id: "createdWith",
      value: set to version number in package.json at generation of report
```
