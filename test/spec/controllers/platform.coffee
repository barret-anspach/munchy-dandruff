'use strict'

describe 'Controller: PlatformctrlCtrl', () ->

  # load the controller's module
  beforeEach module 'fullpageApp'

  PlatformctrlCtrl = {}
  scope = {}

  # Initialize the controller and a mock scope
  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()
    PlatformctrlCtrl = $controller 'PlatformctrlCtrl', {
      $scope: scope
    }

  it 'should attach a list of awesomeThings to the scope', () ->
    expect(scope.awesomeThings.length).toBe 3
