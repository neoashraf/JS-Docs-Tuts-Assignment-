/**
 * Created by anupam.deb on 12/10/2014.
 */

angApplication.controller('ItemDetailCtrl', ['$scope','$stateParams', '$state', function ($scope, $stateParams, $state) {

//    console.log(randomValue);
//    console.log($state.current.data.customData1)
    console.log($stateParams);
    console.log($state);
    angular.forEach($scope.items, function (each) {
        if(each.id==$stateParams.id)$scope.selectedItem = each;
    });

}]);