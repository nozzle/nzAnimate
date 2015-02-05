(function() {
    var module = angular.module('nzAnimate', ['ngAnimate']);

    module.directive('nzAnimate', function($compile) {
        return {
            compile: function compile(tElement, tAttrs, transclude) {
                return {
                    pre: function(scope, elem, attrs) {


                        console.log('second?');

                        var prefix = 'nz-animate-';
                        var enter = '-enter';
                        var exit = '-exit';
                        var currentClasses = [];
                        var newClasses = [];
                        var animation;
                        var started;
                        var stagger;
                        var staggerTime = 100;

                        elem.

                        elem.addClass('nz-animate');

                        scope.$watch(function() {
                            return scope.$eval(attrs.stagger);
                        }, function(val) {
                            if (val) {
                                stagger = val;
                            }
                            if (started) {
                                applyClasses();
                            }
                        });

                        scope.$watch(function() {
                            return scope.$eval(attrs.nzAnimate);
                        }, function(val) {
                            if (val) {
                                started = true;
                                animation = val;
                            }
                            applyClasses();
                        }, true);


                        function applyClasses() {

                            if (typeof animation == 'string') {
                                // String
                                newClasses.push(prefix + animation + enter);
                                newClasses.push(prefix + animation + exit);
                                newClasses.push('reverse');
                            } else if (typeof animation == 'object') {
                                // Object
                                if (animation.enter) {
                                    newClasses.push(prefix + animation.enter + enter);
                                }
                                if (animation.exit) {
                                    newClasses.push(prefix + animation.exit + exit);
                                }
                            }

                            if (stagger || animation.stagger) {
                                if (animation.stagger > 1) {
                                    staggerTime = Math.ceil(animation.stagger / 25) * 25;
                                }
                                newClasses.push('stagger-' + staggerTime);
                            }

                            console.log(newClasses);

                            elem.removeClass(currentClasses.join(' '));
                            elem.addClass(newClasses.join(' '));
                        }
                    },
                };
            },
        };
    });
})();
