'use strict'

describe 'Controller: AppctrlCtrl', () ->

  # load the controller's module
  beforeEach module 'fullpageApp'

  AppctrlCtrl = {}
  scope = {}

  # Initialize the controller and a mock scope
  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()
    AppctrlCtrl = $controller 'AppctrlCtrl', {
      $scope: scope
    }

  it 'should attach a list of awesomeThings to the scope', () ->
    expect(scope.awesomeThings.length).toBe 3
