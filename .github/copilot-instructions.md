# Copilot Instructions for JavaScriptPractice

## Project Overview
This codebase is a collection of JavaScript learning modules, each in its own directory, covering topics from basics to advanced concepts. Each module typically contains an `index.html`, a `script.js`, and sometimes a `style.css` file. There is no build system or package manager; all code runs directly in the browser.

## Directory Structure
- Each folder (e.g., `00.0Basics/`, `00.1DOM/`, `10.1AdvanceJavaScript/`) is a self-contained lesson or demo.
- Files are named consistently: `index.html` (entry point), `script.js` (logic), `style.css` (styling).
- No cross-module imports or shared state between folders.

## Key Patterns & Conventions
- All JavaScript is written in ES6+ and is included via `<script>` tags in the HTML files.
- DOM manipulation and event handling are common; see `00.1DOM/script.js` and `00.2EventListener/script1.js` for patterns.
- Naming is descriptive but not always conventional (e.g., `fucnt.js` is a typo for `func.js`).
- No frameworks or libraries are used—pure JavaScript only.
- CSS is scoped per module; no global stylesheets.

## Developer Workflows
- **To run a module:** Open its `index.html` directly in a browser.
- **Debugging:** Use browser DevTools; there are no source maps or build steps.
- **No automated tests or CI/CD.**
- **No external dependencies.**

## Examples
- To see event delegation, check `00.5BubblingAndCapturing/script.js`.
- For localStorage usage, see `00.8Storage/script.js`.
- For theme toggling, see `00.9ToggleTheme/script.js`.

## Special Notes
- This project is for educational/demonstration purposes. Code may be intentionally verbose or simplified for clarity.
- Some filenames contain typos; match by intent, not strict spelling.

## When Contributing
- Follow the per-module structure: keep all logic, markup, and styles in the same folder.
- Avoid introducing build tools or dependencies unless the project structure changes.

---
For more details, review the folder and file names. Each module is independent and should remain so.
