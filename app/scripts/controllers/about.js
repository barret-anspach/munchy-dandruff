"use strict";

angular.module('fullpageApp')
    .controller('AboutCtrl', function ($scope) {

        var scroll_snap_t;

        $scope.thisPanel = function(id) {
            $scope.panel = id;
            return $scope.panel;
        };

        $scope.panelInViewHoriz = function(thisPanel, inviewhoriz, inviewparthoriz) {
            $scope.panelId = document.getElementById($scope.panel);
            $scope.panelWidth = $scope.panelId.offsetWidth || 0;
            $scope.panelPosLeft = $scope.panelId.offsetLeft;
            $scope.panelPosRight = $scope.panelPosLeft + $scope.panelWidth;

            if (typeof(inviewparthoriz) != 'undefined') {
                console.log(thisPanel + ': ' + inviewparthoriz + ' (offsetLeft: ' + $scope.panelPosLeft
                    + ', offsetRight: ' + $scope.panelPosRight + ')');
                $scope.documentPosLeft = document.documentElement.scrollLeft || document.body.scrollLeft;

                if ((Math.abs($scope.panelPosLeft - $scope.documentPosLeft)) <= ($scope.panelWidth / 2)) {
                    window.pageXOffset = $.scrollTo( $scope.panelPosLeft, 200, {onAfter: function(e){
                        clearTimeout(scroll_snap_t);
                        return false;
                    }});
                }
            }
        };

        $(window).bind('scroll', function(e){
            clearTimeout(scroll_snap_t);
            scroll_snap_t = setTimeout($scope.panelInViewHoriz, 2500);
        });

    });