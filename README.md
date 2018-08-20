# Framework7.d.ts
Typescript definitions for Framework7, Swiper, Dom7, Template7, Framework7-React by iDangero.us

This is a bare-bones start to match Framework7's v3.  This is nearly guaranteed to break for you coming from the older definitions, and I'm sorry about that.  But hopefully this is on a better track.

I've attempted to work with Vue in F7v2, but my current opinion is that Vue is not very typesafe friendly, so I'm abandoning that for React again for myself.  Therefore, I haven't included and Vue definitions here because I don't know how.  You're welcome to help me provide them.

This is very much in draft - most core components and React components are not annotated at all.  Due to new features in Typescript, major changes to Framework7, and improvement in my understanding in both since v1, I am mostly starting over with a new organization.

I'm very interested in your pull requests!  Please include the jsdoc comments as I've started.  Please be as specific as possible with types, but don't get more specific than what F7 supports just because _you only use it that way_, you know/?  There are A LOT of components to fill in, but if we split up the work, maybe it won't be so bad on any one person 😬.

There may be major problems with this organization that haven't hit me yet.  OK, let's work through them!  Like, I wish there was a way to break this into multiple files without compromising the result, but I couldn't find a way.  I wanted to reuse a lot of the definitions from the core components in the React components' Props, for example, but now I'm thinking that they're just a little too different, so I'm resolved to near duplicates.  I also left off the DomEvents so far because I'm not sure if there's a usecase for including them, or what the type signatures should be to support such cases.

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