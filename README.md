# nzAnimate
A sickly simple class-based library for Angular animations.

Built on [Animate.css](http://daneden.github.io/animate.css/) and [animate-stylus](https://github.com/slang800/animate-stylus), nzAnimate not only provides the regular functionality of Animate.css, but also provides easier classes for animations on directives like ng-repeat (ng-enter, ng-leave), ng-hide, ng-show, or any other directives that leverage the ngAnimate module.

## [Awesome Demo](http://nozzle.github.io/nzAnimate/)

## Installation

`$ bower/npm install nz-animate --save`

## Usage
```html
<div class="enter-bounceInDown exit-bounceOutUp speed-700 stagger-100" ng-repeat="thing in things">
  {{thing}}
</div>
```

See [Animate.css](https://github.com/daneden/animate.css) for traditional animation usage.

#### Enter & Exit

Replace `bounceInDown` or `bounceOutUp` with any animation from [this list](http://nozzle.github.io/nzAnimate/)

#### Speed

Default Speed: 700ms

Out of the box, nzAnimate supports any speed from `speed-0` to `speed-4000` in increments of `50`.

#### Stagger

Default Stagger: 100ms

Out of the box, nzAnimate supports any stagger from `stagger-0` to `stagger-1000` in increments of `50`.

#### More info

See [the demo](http://nozzle.github.io/nzAnimate/) for more examples

## Custom Builds

Are coming soon.  It will be as easy as:
```javascript
// custom.json
{
  animations: ['bounceDownIn', 'bounceUpOut', '...'],
  speed: {
    start: 0,
    end: 6000,
    increment: 100
  }
  stagger: {
    start: 0,
    end: 500,
    increment: 25
  }
}
```
 
Then `$ gulp build custom`
