(function() {
    'use strict';

    angular.module('myApp.controllers', [])

    .controller('HomeCtrl', function($scope) { 

    	$('.carousel').carousel({
  			interval: 2000
		})

    })


})()