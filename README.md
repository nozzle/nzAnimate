# nzAnimate
A sickly simple class-based library for Angular animations.

Derived from Animate.css and animate-stylus, nzAnimate provides an easy class-based library for using animations on directives like ng-repeat (ng-enter, ng-leave), ng-hide, ng-show, or any other directives that leverage the ngAnimate module.

## Installation

```
$ bower install nz-animate --save
```

```
$ npm install nz-animate --save
```

## Usage

See nz-animate.github.io for details

```html
<div class="enter-bounceInDown exit-bounceOutUp stagger-100 speed-700" ng-repeat="thing in things">
  {{thing}}
</div>
```
