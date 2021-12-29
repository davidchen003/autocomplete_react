[Course video](https://www.youtube.com/watch?v=Q2aky3eeO40)

## Setup

- `$ npx create-react-app autocomplete_react`
- copy [admin-lte](https://cdnjs.com/libraries/admin-lte) CSS and paste the link in `public/index.html`

  - `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/admin-lte/3.2.0-rc/css/adminlte.min.css" integrity="sha512-YOsl4pnOb5NC868yn1JxAzjJsWkLNtP53uc3OcyAl0Q2R1cwo/mdI1hHSQM8gbIxWj97mKeLoD9R0aiYibFQAA==" crossorigin="anonymous" referrerpolicy="no-referrer" />`

- `src/App.js`, replace existing return content with `<input type="text" />`

## Start server

- `npm start`

## Axios

- so we can load (fake) data
- `$ npm install axios`

## src/App.js

- `<div className="container">`: 'container' defined in admin-lte

**Commit 1**

## src/App.js

- further development

**Commit 2**

## src/App.js

- further development
- add file `src/custom.css`

**Commit 3**

- enter 'm' in input box ...

## Notes

- `node-modules` folder deleted to save space; need to run `$npm install` first
- through out the progress, keep the server running (leave alone the terminal where `npm start` executed)

- two tutorial from [PedroTech](https://www.youtube.com/watch?v=mZvKPtH9Fzo) on Search Bar with a filter

## use local JSON data file

- and changed text field from "email" to "description"

- however, can't search a text having both "wordA" and "wordB" by typing in "wordA wordB" (which will be treated as search for a big word "wordA wordB")

**Commit 4**

## texts contain ANY of the searching terms

- auto-suggestion starts with search entry 4 letter or longer
- suto-suggest matching text that contain ANY of the search words
- button `Click for suggestions contain ALL the searching words` for matching suggestions that conain ALL the searching words:

  - as you entering "term1 diam", and finally click the button see the suggestions change along the way

- took out the **onBlur** function (when click elsewhere, the suggestions will disappear), otherwise, the `Click for suggestions contain ALL the searching words` button only works on 2nd click.

**Commit 5**
