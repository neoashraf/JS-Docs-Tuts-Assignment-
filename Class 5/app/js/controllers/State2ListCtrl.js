/**
 * Created by Anup_sust on 12/8/2014.
 */

angApplication.controller('State2ListCtrl', ['$scope','randomValue', function ($scope,randomValue) {
    $scope.things = ["A", "Set", "Of", "Things"];
    $scope.random=randomValue;
}]);

