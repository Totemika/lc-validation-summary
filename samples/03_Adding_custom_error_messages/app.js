var sampleApp = angular.module('sampleApp', ['lcValidationSummary'])

.controller('sampleController', ['$scope', function sampleController($scope){	
  $scope.model = {
    alias:"",
    password:"",
    email:"",
    phoneNumber:""
  }
}]);