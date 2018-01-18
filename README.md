# Framework7.d.ts
Typescript definitions for Framework7, Swiper, Dom7 by iDangero.us

New for v2!

I did the best I could off the documentation so far, but I made some guesses and probably many errors.  Better than nothing!

As I understand it to work, maintaining this in the centralized @typings registry is more trouble than I'm willing to set up.  But you can still install it pretty easily like this:

```
npm install https://github.com/JasonKleban/Framework7.d.ts#v2
```

Assuming that you'll want to include the whole of framework7 library and you're using webpack, you need to alias 'framework7' to be resolved to the full bundle.  That way you can still say `import Framework7 from 'framework7'` in your code and these type definitions will get picked up by typescript, yet at runtime you'll get more than just the core.  I don't want to rename this module declaration, because it seems more flexible to alias thusly for your situation.

```json
resolve: {
    alias: {
      'framework7$': 'framework7/dist/framework7.esm.bundle'
    },
```
