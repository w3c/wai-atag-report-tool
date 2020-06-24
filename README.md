# [Draft] ATAG Report Tool (ART)

With this tool, people can report on how accessible their [authoring tool](https://www.w3.org/TR/ATAG20/#def-Authoring-Tool) is. It guides them through the Success Criteria of the [Authoring Tool Accessibility Guidelines 2.0](https://www.w3.org/TR/ATAG20/) (ATAG 2.0), allowing to record a **result** and **observation** for each. It outputs to JSON and HTML.

## Status

This project is a prototype that is currently under review by the Education & Outreach Working Group.

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
    evaluatorName
      id: "evaluatorName"
      value: null
    evaluatorOrg
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
      value: set to version number in package.josn at generation of report
```
