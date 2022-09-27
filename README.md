# Tic-Tac-Toe

## Table of Contents
- [Overview](#Overview)
- [Setup](#Setup)
- [ScreenShots](#ScreenShots)
- [Features](#Features)
- [Links](#Links)
- [Contributors](#Contributors)
- [Technologies](#Technologies)


## Overview
This application is a chance for students to build a Tic-Tac-Toe app that allow users to play a game of tic-tac-toe. This Solo Challenge gave us a chance to show where we are with the foundational concepts of the Mod 1 curriculum. In this challenge, we utilized HTML, CSS, and JavaScript to create a functional app that will use game logic to play a game. I used the data model to display and update the DOM.


## Setup
- Clone the repository to your local machine
- `cd` into the project
- Run `npm install` to install project dependencies
- Run `npm start` to launch the live server
- Copy and paste the provided localhost URL into your browser
- Explore and enjoy!

## Screenshots
<p align="center">Example Screenshot</br>
  <img width="460" height="300" src="assets/game.png" alt="Screenshot of project">
</p>

<p align="center">Functionality</br>
  <img width="460" height="300" src="assets/DesktopViewTour.gif" alt="Gif of application performing various functional actions">
</p><p align="center"><img width="500" src="assets/example.gif" alt="Additional gif of application performing various functional actions">
</p>

## Features
- The game keeps tracks of the score and stores the data in local localStorage
- The game displays which player turn it is, if they are winner, and if the game is a draw


## Links
- The spec for this project can be found [here](https://frontend.turing.edu/projects/module-1/tic-tac-toe-solo-v2.html).


## Contributors
- [Hazel Pablo](https://github.com/Hpablo08?tab=repositories)

## Technologies
  - Javascript
  - HTML
  - CSS

Add your image files in the `src/images` directory. Similar to CSS files, you need to `import` image files in the JavaScript entry file (`scripts.js`). Then go into the HTML and add an `img` element with the `src` attribute pointing to the `images` directory. There is an example in the `index.html` file for you to see.

## How to View Your Code in Action

In the terminal, run:

```bash
npm start
```

You will see a bunch of lines output to your terminal. One of those lines will be something like:

```bash
Project is running at http://localhost:8080/
```

Go to `http://localhost:8080/` in your browser to view your code running in the browser.

---

## Test Files Organization

Similar to feature code, your test code needs to be put in a specific place for it to run successfully.

**Put all of your test files in the `test` directory.** As a convention, all test filenames should end with `-test.js`. For instance: `box-test.js`.

## Running Your Tests

Run your test suite using the command:

```bash
npm test
```

The test results will output to the terminal.

---

## Linting Your Code

Run the command in your terminal `npm run lint` to run the linter on your JavaScript code. There will be errors and warnings right from the start in this starter kit - the linter is still running successfully.

Your linter will look at the JavaScript files you have within the `src` directory and the `test` directory.

## Webpack?

If you look in the `package.json` file, you'll see one of the library dependencies called `webpack`. If you're interested in learning more about what Webpack is and how it works behind the scenes, take a look through the [Webpack configuration documentation](https://webpack.js.org/concepts/).

## Deploying to GitHub Pages

_If you are finished with the functionality and testing of your project_, then you can consider deploying your project to the web! This way anyone can play it without cloning down your repo.

[GitHub Pages](https://pages.github.com/) is a great way to deploy your project to the web. Don't worry about this until your project is free of bugs and well tested!

If you _are_ done, you can follow [this procedure](./gh-pages-procedure.md) to get your project live on GitHub Pages.

delete this line
