angular.module('app', ['frapontillo.bootstrap-duallistbox'])
.controller('testCtrl', ['$scope', function ($scope) {
    $scope.available = [{"id":1,"name":"One"},{"id":2,"name":"two"}];
    $scope.selected = [{"id":1,"name":"One"}];
}]);