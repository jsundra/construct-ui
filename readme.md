<p align="center">
  <a href="https://vrimar.github.io/construct-ui" rel="noopener" target="_blank"><img width="60" src="https://raw.githubusercontent.com/vrimar/construct-ui/master/docs/src/logo.svg?sanitize=true" alt="Construct-UI logo"></a></p>
</p>

<h1 align="center">Construct-UI</h1>

<div align="center">

### A [Mithril.js](https://github.com/MithrilJS/mithril.js) UI library.

[![npm package](https://img.shields.io/npm/v/construct-ui/latest.svg)](https://www.npmjs.com/package/construct-ui)
[![Travis (.org)](https://img.shields.io/travis/vrimar/construct-ui.svg)](https://travis-ci.org/vrimar/construct-ui)
[![Gitter](https://img.shields.io/gitter/room/vrimar/construct-ui.svg)](https://gitter.im/construct-ui/Lobby)

</div>

## jsundra's Fork
I like type safety & IDE intellisense. 

Mithril.js has a split Component/Vnode relationship, so a JSX.ElementAttributesProperty interface can't be used to define Attrs types.
The TypeScript Compiler has a fallback to check the type of the first argument in a JSX class' constructor.

To that end, and to provide as few library changes as possible, this fork adds a little script to generate a useless constructor in all construct-ui components' `*.d.ts` files.

To run, after building the base repo, run `npx ts-node add-constructors.ts`.

## Documentation
Check out the [documentation website](https://vrimar.github.io/construct-ui) for installation instructions and getting started.

## Playground
Check out [codesandbox](https://codesandbox.io/s/x7zzjovzyz) examples for basic usage.

## Development
1. `npm i`
2. `npm run generate:icons`
3. `npm run generate:docs`
4. `npm run watch:docs`

## Credits
Inspired by [blueprint](https://github.com/palantir/blueprint), [polythene](https://github.com/ArthurClemens/polythene) and [ant-design](https://github.com/ant-design/ant-design).
