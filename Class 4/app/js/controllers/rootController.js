/**
 * Created by Jubayer on 2/15/16.
 */

angApplication.controller('rootCtrl', ['$scope','person','fstS','fstF', function($scope,person,fstS,fstF){

    fstS.sayHi();
    fstF.sayHi();

    $scope.doSomeThing = function () {
        console.log('Button clicked');
    };

    $scope.records = [{name: 'A', id: 1}, {name: 'B', id: 2}, {name: 'C', id: 3}];
}]);