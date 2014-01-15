'use strict'

describe 'Controller: AboutctrlCtrl', () ->

  # load the controller's module
  beforeEach module 'fullpageApp'

  AboutctrlCtrl = {}
  scope = {}

  # Initialize the controller and a mock scope
  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()
    AboutctrlCtrl = $controller 'AboutctrlCtrl', {
      $scope: scope
    }

  it 'should attach a list of awesomeThings to the scope', () ->
    expect(scope.awesomeThings.length).toBe 3
