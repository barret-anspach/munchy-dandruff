'use strict'

describe 'Controller: ContactctrlCtrl', () ->

  # load the controller's module
  beforeEach module 'fullpageApp'

  ContactctrlCtrl = {}
  scope = {}

  # Initialize the controller and a mock scope
  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()
    ContactctrlCtrl = $controller 'ContactctrlCtrl', {
      $scope: scope
    }

  it 'should attach a list of awesomeThings to the scope', () ->
    expect(scope.awesomeThings.length).toBe 3
