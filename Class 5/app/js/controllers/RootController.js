/**
 * Created by anupam.deb on 12/10/2014.
 */

angApplication.controller('RootCtrl', ['$scope','$rootScope','$templateCache','$http', function ($scope, $rootScope,$templateCache,$http) {


    $http.get("views/state1.html" , {cache: $templateCache});
    $http.get("views/state2.html" , {cache: $templateCache});

    $scope.$on('$stateChangeStart',
        function (event, toState, toParams, fromState, fromParams) {
            console.log('$stateChangeStart');
        });

    $scope.$on('$stateChangeSuccess',
        function (event, toState, toParams, fromState, fromParams) {
            console.log('$stateChangeSuccess');
        });

    $scope.$on('$stateChangeError',
        function (event, toState, toParams, fromState, fromParams, error) {
            console.log('$stateChangeError');
        });

    //$scope.$on('$viewContentLoading',
    //    function (event, viewConfig) {
    //        console.log('$viewContentLoading');
    //    });
    //
    //$scope.$on('$viewContentLoaded',
    //    function (event) {
    //        console.log('$viewContentLoaded');
    //    });

}]);
