"use strict";

// Lesson 01 exercise: Running JavaScript three ways
// Clone the exercise repository for this course, https://github.com/Leon-Arno/JS-Exercises, to
// your computer.
// Make the copy your own. Inside the cloned folder, delete the `.git` folder to remove the
// connection to the original repository: run `rm -rf .git` on macOS and Linux, or `Remove-Item
// -Recurse -Force .git` in PowerShell on Windows.
// Run `git init` in the folder, create a new empty repository named `javascript-exercises` on
// your own GitHub account, connect it as the remote, and push. This is the same publishing
// flow you performed in the Git course.
// Create a branch named `lesson-01-exercise` and switch to it, then open `lesson-01.js`. The
// questions are already inside as comments; work through them in order, writing your answers
// directly beneath each one.

// TODO: Part one.
// Start the Node REPL and evaluate at least four arithmetic expressions of your own, using
// more than one operator across them. Copy the complete session transcript and paste it into
// `lesson-01.js` as a comment block where the question asks for it.

/*
PS C:\Users\dorot\OneDRive\Documents\startupistan_projects\JS-Exercises> node
Welcome to Node.js v24.18.0.
Type ".help" for more information.
> 78*56
4368
> 144/12
12
> 65+85*3
320
> 1250-950/5
1060
> .exit
*/

// TODO: Part two.
// Write a `console.log` line in `lesson-01.js` that prints a greeting, save the file
// deliberately, and run it with `node lesson-01.js`.

console.log("Greetings from Düren!");

// TODO: Part three.
// Change the greeting text, run the file again without saving, and observe that the output has
// not changed. Save and run once more, then describe in a one-sentence comment what happened
// and why.

// The output did not change until I saved the js file because Node executes the version stored on disk, not the unsaved changes in the VS Code editor.

// TODO: Part four.
// Run your greeting line in the Chrome DevTools Console. In a comment, record one way the
// experience matched Node and one way it differed.

// Both Node and Chrome DevTools Console executed the JavaScript and displayed the output.
// In Node, I ran the code form the terminal, while Chrome ran it inside the browser console.

// TODO: Part five.
// From a folder that does not contain the file, deliberately run `node lesson-01.js` so that
// the terminal reports it cannot find the file. Paste that error transcript as a comment, then
// explain in one sentence how you resolved it.

/*
PS C:\Users\dorot\OneDRive\Documents\startupistan_projects\JS-Exercises> cd..
PS C:\Users\dorot\OneDRive\Documents\startupistan_projects> node lesson-01.js
node:internal/modules/cjs/loader:1520
  throw err;
  ^

Error: Cannot find module 'C:\Users\dorot\OneDRive\Documents\startupistan_projects\lesson-01.js'
    at Module._resolveFilename (node:internal/modules/cjs/loader:1517:15)
    at wrapResolveFilename (node:internal/modules/cjs/loader:1071:27)
    at defaultResolveImplForCJSLoading (node:internal/modules/cjs/loader:1095:10)
    at resolveForCJSWithHooks (node:internal/modules/cjs/loader:1122:12)
    at Module._load (node:internal/modules/cjs/loader:1294:5)
    at wrapModuleLoad (node:internal/modules/cjs/loader:255:19)
    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
    at node:internal/main/run_main_module:33:47 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}

Node.js v24.18.0
*/

// I resolved the error by navigating back to the folder containing lesson-01.js before running the command again.

// TODO: Save the file, commit your work with a clear message, push the branch, and open a pull
// request into your main branch.
// TODO: Submit the link to the pull request for review.
