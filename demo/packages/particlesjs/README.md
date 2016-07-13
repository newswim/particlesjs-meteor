## Particles.js for METEOR

For full API Docs, check out the [Particle.js repo](https://github.com/VincentGarreau/particles.js)

- create an anchor html div with `id='particles-js'` (or anything you want)
- create a settings.json (named whatever you like)
- put it in `/public`
- call *particlesJS.load* on the client, like so:

```js
Template.body.onRendered(function() {
  let settings = 'pjs-settings.json';
  this.autorun(() => {
    if (particlesJS) {
      console.log(`loading particles.js config from "${settings}"...`)
      /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
      particlesJS.load('particles-js', settings, function () {
        console.log('callback - particles.js config loaded');
      });
    }
  });
});
```
