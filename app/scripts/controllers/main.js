'use strict';

angular.module('fullpageApp')
  .controller('MainCtrl', function ($scope, $location, $anchorScroll) {
//    $scope.scrollTo = function(id) {
//        $location.hash(id);
//        $anchorScroll();
//    };

    var scroll_snap_t;

    $scope.panelInView = function(thisPanel, inview, inviewpart, thisinview) {
//        console.log(thisinview);
//        console.log(inview);
//        console.log(inviewpart);
//        $scope.panelId = document.getElementById(thisPanel);
//        $scope.panelHeight = $scope.panelId.offsetHeight || 0;
//        $scope.panelPosTop = $scope.panelId.offsetTop;
//        $scope.panelPosBottom = $scope.panelPosTop + $scope.panelHeight;
//
//        if (typeof(inviewpart) != 'undefined') {
////            console.log(thisPanel + ': ' + inviewpart + ' (offsetTop: ' + $scope.panelPosTop
////                + ', offsetBottom: ' + $scope.panelPosBottom + ')');
//            $scope.documentPosTop = document.documentElement.scrollTop || document.body.scrollTop;
//
//            if ((Math.abs($scope.panelPosTop - $scope.documentPosTop)) <= ($scope.panelHeight / 2)) {
//                console.log("scrolling to :" + thisPanel);
//                window.pageYOffset = $.scrollTo( $scope.panelPosTop, 200, {onAfter: function(e){
//                    clearTimeout(scroll_snap_t);
//                    return false;
//                }});
//            }
//        }
    };
//
//    $(window).bind('scroll', function(e){
//        clearTimeout(scroll_snap_t);
//        scroll_snap_t = setTimeout($scope.panelInView, 2500);
//    });


  });