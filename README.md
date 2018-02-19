# hyperapp-todo-parcel

[![Greenkeeper badge](https://badges.greenkeeper.io/marcusasplund/hyperapp-todo-parcel.svg)](https://greenkeeper.io/)
[![GitHub issues](https://img.shields.io/github/issues/marcusasplund/hyperapp-todo-parcel.svg)](https://github.com/marcusasplund/hyperapp-todo-parcel/issues)
[![Build status](https://travis-ci.org/marcusasplund/hyperapp-todo-parcel.svg?branch=master)](https://travis-ci.org/marcusasplund/hyperapp-todo-parcel)
[![dependencies](https://david-dm.org/marcusasplund/hyperapp-todo-parcel.svg)](https://david-dm.org/marcusasplund/hyperapp-todo-parcel)

[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

[Hyperapp](https://github.com/hyperapp/hyperapp) crud todo with [Parcel bundler](https://github.com/parcel-bundler/parcel)

## [Demo](https://marcusasplund.github.io/hyperapp-todo-parcel/)

Add some todos, click buttons to delete or toggle state, tap or click text in todo to edit.

Offline support with service worker

TODO: ~~[a bug in parcel](https://github.com/parcel-bundler/parcel/issues/235) rewrites the manifest.json to a js file~~ so the pwa requirements fails. Also the meta tags and icons are rewritten https://github.com/parcel-bundler/parcel/issues/220
To build a proper PWA you now have to manually copy the <meta> tags in the head from src/index.html, and also copy the icons with their proper names.

## installation

````bash
    $ git clone https://github.com/marcusasplund/hyperapp-todo-parcel.git

    $ cd hyperapp-todo-parcel

    $ yarn

    $ yarn start
````

Open up application at http://localhost:3000/ in browser

## build a release

````bash
    $ yarn build

````
This will generate a release directory with your minified/rev'd assets.
