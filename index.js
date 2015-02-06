(function() {
    var app = angular.module('app', [
        'ngAnimate',
    ]);

    app.filter('containsExact', function() {
        return function(input, value) {
            var values = [];
            angular.forEach(input, function(item) {
                if (item.indexOf(value) > -1) {
                    values.push(item);
                }
            });
            return values;
        };
    });

    app.controller('mainController', function($scope) {

        $scope.boxes = [];

        $scope.staggers = [];
        for (var i = 0; i <= 20; i++) {
            $scope.staggers.push(i * 50);
        }

        $scope.speeds = [];
        for (var b = 0; b <= 80; b++) {
            $scope.speeds.push(b * 50);
        }

        $scope.choices = [
            'bombLeftOut',
            'bombRightOut',
            'bounce',
            'bounceIn',
            'bounceInDown',
            'bounceInLeft',
            'bounceInRight',
            'bounceInUp',
            'bounceOut',
            'bounceOutDown',
            'bounceOutLeft',
            'bounceOutRight',
            'bounceOutUp',
            'fadeIn',
            'fadeInDown',
            'fadeInDownBig',
            'fadeInLeft',
            'fadeInLeftBig',
            'fadeInRight',
            'fadeInRightBig',
            'fadeInUp',
            'fadeInUpBig',
            'fadeOut',
            'fadeOutDown',
            'fadeOutDownBig',
            'fadeOutLeft',
            'fadeOutLeftBig',
            'fadeOutRight',
            'fadeOutRightBig',
            'fadeOutUp',
            'fadeOutUpBig',
            'flash',
            'flip',
            'flipInX',
            'flipInY',
            'flipOutX',
            'flipOutY',
            'foolishIn',
            'foolishOut',
            'hinge',
            'holeOut',
            'lightSpeedIn',
            'lightSpeedOut',
            'magic',
            'openDownLeft',
            'openDownLeftOut',
            'openDownLeftReturn',
            'openDownRight',
            'openDownRightOut',
            'openDownRightReturn',
            'openUpLeft',
            'openUpLeftOut',
            'openUpLeftReturn',
            'openUpRight',
            'openUpRightOut',
            'openUpRightReturn',
            'perspectiveDown',
            'perspectiveDownReturn',
            'perspectiveLeft',
            'perspectiveLeftReturn',
            'perspectiveRight',
            'perspectiveRightReturn',
            'perspectiveUp',
            'perspectiveUpReturn',
            'puffIn',
            'puffOut',
            'pulse',
            'rollIn',
            'rollOut',
            'rotateDown',
            'rotateIn',
            'rotateInDownLeft',
            'rotateInDownRight',
            'rotateInUpLeft',
            'rotateInUpRight',
            'rotateLeft',
            'rotateOut',
            'rotateOutDownLeft',
            'rotateOutDownRight',
            'rotateOutUpLeft',
            'rotateOutUpRight',
            'rotateRight',
            'rotateUp',
            'rubberBand',
            'shake',
            'slideDown',
            'slideDownReturn',
            'slideInDown',
            'slideInLeft',
            'slideInRight',
            'slideInUp',
            'slideLeft',
            'slideLeftReturn',
            'slideOutDown',
            'slideOutLeft',
            'slideOutRight',
            'slideOutUp',
            'slideRight',
            'slideRightReturn',
            'slideUp',
            'slideUpReturn',
            'swap',
            'swashIn',
            'swashOut',
            'swing',
            'tada',
            'tinDownIn',
            'tinDownOut',
            'tinLeftIn',
            'tinLeftOut',
            'tinRightIn',
            'tinRightOut',
            'tinUpIn',
            'tinUpOut',
            'twisterInDown',
            'twisterInUp',
            'vanishIn',
            'vanishOut',
            'wobble',
        ];

        // Methods
        $scope.get = get;
        $scope.clear = clear;

        // Init
        $scope.enter = 'bounceInDown';
        $scope.exit = 'bounceOutUp';
        $scope.stagger = 100;
        $scope.speed = 1000;

        // Watchers
        $scope.$watch(function() {
            return [$scope.enter, $scope.exit, $scope.stagger];
        }, makeHtml, true);

        get();






        function makeHtml() {
            $scope.html = [
                '<div ng-repeat="box in boxes | filter:search" class="' + $scope.enter + ' enter-' + $scope.enter + ' exit-' + $scope.exit + ' speed-' + $scope.speed + ' stagger-' + $scope.stagger + ' ">',
                '   <h3 class="text-center">Card Number {{box}}</h3>',
                '</div>'
            ].join('\n');
            clear();
            get();
        }


        function get() {
            for (var i = 1; i <= 20; i++) {
                $scope.boxes.push(i);
            }
        }

        function clear() {
            $scope.boxes = [];
        }
    });
})();
