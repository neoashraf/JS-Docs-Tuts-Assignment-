/**
 * Created by Jubayer on 2/18/16.
 */
angApplication.controller('State1ListRootCtrl', ['$scope', function ($scope) {
    //$scope.items = ["A", "List", "Of", "Items"];
    console.log('list');
    $scope.items = [
        {id: 1, name: 'AB'},
        {id: 2, name: 'ABC'},
        {id: 3, name: 'ABCD'},
        {id: 4, name: 'ABCDE'},
        {id: 5, name: 'ABCDEF'},
        {id: 6, name: 'ABCDEFG'}

    ];


}]);