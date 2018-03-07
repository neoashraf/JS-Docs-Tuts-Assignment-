/**
 * Created by Jubayer on 2/15/16.
 */
"use strict";

var angApplication = angular.module('angularApp',[]);

angApplication.config([function () {
}]);

angApplication.run(['$rootScope',function ($rootScope) {
    $rootScope.person={name : 'Hii'};
}]);

