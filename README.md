<img height="100px" width="173px" src="https://github.com/benatespina/stabhab/blob/master/public/images/logo.png" align="right"/>

# StabHab

> Dummy app based on React to make PoC easily

## 🤔 Why?

**StabHab** is a simple _React_ application around ticket buyers and resellers.

It's strongly based on **[StubHub][1]**'s look and feel. Don't say anything else. 😀

The idea behind this is to make proofs of concept about the new _React_ features in an easy way maybe to expose with my fellows and so on. Also why not, some other test related with the frontend development itself.

For that, I've built a simple application with [Create React App][2]. Using the _Git_ branches, I'm going to try to split the different tests maintaining the master branch like the current recommended way to build a React project.

## ✔️ Proofs of concept

The following list contains the different tests ordered by _Git_ branches.

- [**master**](https://github.com/benatespina/stabhab): The basic one, without any test.
- [**react-suspense**](https://github.com/benatespina/stabhab/tree/react-suspense): Applied the necessary changes to make work with React Suspense.
- [**react-hooks**](https://github.com/benatespina/stabhab/tree/react-hooks): Becomed all the React components to functional style applying React Hooks.

## 🏁 Getting started

```bash
$ git clone https://github.com/benatespina/stabhab && cd stabhab

## You can move yourself to the branch that you want to test *

$ npm install
$ npm start
```

> \* Please, choose the branch that most interests you, from [here](#proofs-of-concept)

## 👪 Credits

This project is created by:

> **@benatespina** - [benatespina@gmail.com](mailto:benatespina@gmail.com)

## 📜 Licensing Options

[![License](https://img.shields.io/badge/License-MIT-yellowgreen.svg?style=flat-square)](https://github.com/benatespina/stabhab/blob/master/LICENSE)

[1]: https://www.stubhub.com/
[2]: https://github.com/facebook/create-react-app
