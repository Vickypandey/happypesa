'use strict';

angular.module('myApp.directive', [])

    .directive("notification", function() {
        return {
            restrict: 'E',
            scope: {
                message: '@'
            },
            template: '<div class="alert">{{message}}</div>'
        }

    })