# nzAnimate
A sickly simple class-based library for Angular animations.

Built on [Animate.css](http://daneden.github.io/animate.css/) and [animate-stylus](https://github.com/slang800/animate-stylus), nzAnimate not only provides the regular functionality of Animate.css, but also provides easier classes for Angular animations on directives like ng-repeat (ng-enter, ng-leave), ng-hide, ng-show, or any other directives that leverage the ngAnimate module.

## [Awesome Demo](http://nozzle.github.io/nzAnimate/)

## Installation

1. `$ bower/npm install nz-animate --save`
2. Add `nzAnimate.min.css` or `nzAnimate.css`

(For custom Builds, see below)

## Usage

#### Plain ol' Animate

```html
<div class="animate bounceInDown"></div>
```

#### Show / Hide

```html
<div class="animate enter-bounceInDown exit-bounceOutUp" ng-show="isShowing">Stuff</div>
```

Replace `bounceInDown` or `bounceOutUp` with any animation you see in [the demo](http://nozzle.github.io/nzAnimate/).

#### Animation Speed

```html
<div class="animate enter-bounceInDown exit-bounceOutUp speed-300" ng-hide="!isShowing">Stuff</div>
```

Default Speed: 700ms

Out of the box, nzAnimate supports any speed from `speed-0` to `speed-4000` in increments of `50`.

#### Enter, Exit & Stagger

```html
<div class="animate enter-bounceInDown exit-bounceOutUp stagger-100" ng-repeat="thing in things">
  {{thing}}
</div>
```

Out of the box, nzAnimate supports any stagger from `stagger-0` to `stagger-1000` in increments of `50`.

#### Put it all together...

Using all of these together, everything will animate on creation, exit, re-entry, show, hide, move, etc...

```html
<div class="animate bounceInDown enter-bounceInDown exit-bounceOutUp speed-500 stagger-100" ng-repeat="thing in things">
  {{thing}}
</div>
```

## Custom Builds...

Simply edit `/src/config.hjson` to your liking!

*Hint: For a smaller file size, limit animations to specific ones you'll use.*

```javascript
{
  speed: {
    default: 1000,
    start: 0,
    end: 6000,
    increment: 100
  },
  stagger: {
    start: 0,
    end: 500,
    increment: 25
  },
  ieSupport: true,
  vendors: ['official', 'webkit', 'moz', '...']
  animations: ['bounceDownIn', 'bounceUpOut', '...'],
}
```
 
Then:
`$ npm install`
`$ gulp build`

## Roadmap & Contributing

1. Lessen the size of the default build. (See Issue [Here](https://github.com/nozzle/nzAnimate/issues/2))

All PR's and contributions are more than welcome!
