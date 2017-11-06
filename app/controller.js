(function() {
    'use strict';

    angular.module('myApp.controllers', [])

        .controller('HomeCtrl', function($scope) {

            // $scope.IsVisible = false;

            // $scope.menu = function() {
            //     $scope.IsVisible = $scope.IsVisible ? false : true;

            // }

            $scope.popupVisible = false;


            $scope.showPopup = function() {
                $scope.popupVisible = true;
            };
            $scope.hidePopup = function() {
                $scope.popupVisible = false;
            };


            $scope.submitForm = function(isValid) {

                // check to make sure the form is completely valid
                if (isValid) {
                    alert('our form is amazing');
                }

            };

            $scope.countries = [
                { id: 1, name: 'USA' },
                { id: 2, name: 'United Kingdom' },
                { id: 3, name: 'Italy' },
                { id: 4, name: 'india' },
                { id: 5, name: 'japan' },
                { id: 6, name: 'uae' }
            ];

        })








})()