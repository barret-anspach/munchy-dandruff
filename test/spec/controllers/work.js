// Generated by CoffeeScript 1.6.3
(function() {
  'use strict';
  describe('Controller: WorkCtrl', function() {
    var WorkCtrl, scope;
    beforeEach(module('fullpageApp'));
    WorkCtrl = {};
    scope = {};
    beforeEach(inject(function($controller, $rootScope) {
      scope = $rootScope.$new();
      return WorkCtrl = $controller('WorkCtrl', {
        $scope: scope
      });
    }));
    return it('should attach a list of awesomeThings to the scope', function() {
      return expect(scope.awesomeThings.length).toBe(3);
    });
  });

}).call(this);

/*
//@ sourceMappingURL=work.map
*/
