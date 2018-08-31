# Framework7.d.ts
Typescript definitions for [Framework7, Swiper, Dom7, Template7, Framework7-React v3 by iDangero.us](http://framework7.io)

NOTE: Framework7, Dom7, and Template7 type definitions [are currently being adopted into the actual projects](https://github.com/framework7io/framework7/issues/2616#issuecomment-417525998).  The Framework7-React may still need to live on for full type expression ... to be updated...

===

This is a start to match Framework7's v3.  This is nearly guaranteed to break for you coming from the older definitions, and I'm sorry about that.  But hopefully this is on a better track.

I've attempted to work with Vue in F7v2, but my current opinion is that Vue is not very typesafe friendly, so I'm abandoning that for React again for myself.  Therefore, I haven't included and Vue definitions here because I don't know how.  You're welcome to help me provide them.  I'm also assisting Vladimir Kharlampidi from iDangero.us incorporate automated type declaration generation into their Phenome.js library.  That work may not result in fully-expressed types for Framework7-React and wouldn't include type declarations for the Framework7 Core - although I will soon petition Vladimir to adopt the Core declarations into the Framework7 distribution.

Much the target libraries have been annotated, but this is very much in draft.  Several of the Core and React components are not yet annotated, but if you need them there are plenty of examples to help you complete them.  There are also errors in optionality of props (they will show as required), optionality of parameters, accuracy of parameter types and return types.  Many are typed as `unknown` to force us all to fix them when runtime information is available.  What is annotated so far is as faithful to the documentation as I could manage.  While the documentation is extensive, there are a few omissions.  I likely made some data-entry errors too.

I'm very interested in your pull requests!  Please include the jsdoc comments as I've started.  Please be as specific as possible with types, but don't get more specific than what F7 supports just because _you only use it that way_, you know?

As I understand it to work, maintaining this in the centralized @typings registry is more trouble than I'm willing to set up.  But you do have to upgrade manually.  I'm OK if someone wants to help get this into the @typings monolith (or similar) once this has matured...

# Typescript setup tips

Install to your project like this:

```
npm install https://github.com/JasonKleban/Framework7.d.ts
```

or

```
yarn add https://github.com/JasonKleban/Framework7.d.ts
```

You would already have one or both of these imports, they should work.

```
import Framework7 from 'framework7'
import Framework7React from 'framework7-react'
```

Then I believe you can redirect webpack to whatever bundle you want to use without having to specify the bundle everywhere.  I think this is in the F7 documentation somewhere, but it's especially relevant for these module declarations.

```
module.exports = {
    ...
    resolve: {
        alias: {
          'framework7$': 'framework7/framework7.esm.bundle.js'
        }
    },
```