var angApplication = angular.module('angularApp', ['ui.router']);


angApplication.config(function ($stateProvider, $urlRouterProvider, $locationProvider,$urlMatcherFactoryProvider) {

    //
    // Now set up the states
    $urlRouterProvider.rule(function($injector, $location) {
        var path = $location.path();
        console.log(path);
        if (path != '/' && path.slice(-1) === '/') {
            $location.replace().path(path.slice(0, -1));
            console.log(path);
        }
    });

    $stateProvider
        .state('default', {
            url: "",
            //template:'<div><h2>default template</h2></div>'
            //templateUrl:"views/home.html"
            templateProvider: function ($q) {
                var defer = $q.defer();
                defer.resolve('<div><h2>default template</h2></div>');
                return defer.promise;
            }
        })
        .state('State1', {
            url: "/state1",
            templateUrl: "views/state1.html"
        })
        .state('State1.list', {
            url: "/list",
            templateUrl: "views/state1.listroot.html",
            controller: 'State1ListRootCtrl',
            abstract: true
        })
        .state('state2', {
            url: "/state2",
            templateUrl: "views/state2.html"
        })

        .state('State1.list.default', {
            url: "",
            templateUrl: "views/state1.list.html",
            controller: 'State1ListCtrl'
        })
        .state('State1.list.id', {
            url: "/{id}",
            templateUrl: "views/list-detail.html",
            controller: 'ItemDetailCtrl'

        })
        .state('State1.list.id.state2', {
            url: "/state2",
            templateUrl: "views/state2.html"

        })
        //
        .state('state2.list', {
            url: "/list",
            templateUrl: "views/state2.list.html",
            controller: 'State2ListCtrl',
            resolve:{
                randomValue:['$q', '$timeout', function ($q, $timeout) {
                    var defer = $q.defer(), timeoutLimit = (Math.random()*5000)%5000;
                    $timeout(function () {
                        defer.resolve(timeoutLimit);
                    },timeoutLimit);
                    return defer.promise;
                }]
            },
            data: {
                customData1: 44,
                customData2: "red"
            },
            onEnter: function(randomValue){
                console.log('State activated');
            },
            onExit: function(randomValue){
                console.log('State deactivated');
            }
        })
        //.state('state3', {
        //    url: "/state3",
        //    templateProvider: function ($q) {
        //        var defer = $q.defer();
        //        defer.resolve('<div><h2>state3 template</h2></div>');
        //        return defer.promise;
        //    }
        //})
        .state('error', {
            url: "/error",
            templateProvider: function ($q) {
                var defer = $q.defer();
                defer.resolve('<div><h2>error template</h2></div>');
                return defer.promise;
            }
        });
        $urlRouterProvider.otherwise("/error");

});

angApplication.run(function ($rootScope) {

});

//angApplication.controller('State1ListCtrl', ['$scope', function ($scope) {
//    $scope.items = ["A", "List", "Of", "Items"];
//}]);
//
//angApplication.controller('State2ListCtrl', ['$scope', function ($scope) {
//    $scope.things = ["A", "Set", "Of", "Things"];
//}]);











