"use strict";
var app = angular.module('myApp',[]);

app.controller('rootController', ['$scope', function($scope){ //annotation
    //$scope.message='Name';
    //$scope.userName = 'name';
    //$scope.metoad = function(){
    //    return 'kichuakta';
    //};
    //
    //$scope.alert1 = function(value){
    //    alert(value);
    //}
    //$scope.data={message:'Name'};

    //this vs scope
    //this.aMethod = function(){
    //   console.log('method Called this');
    //};
    //$scope.aMethod = function(){
    //    console.log('method called scope')
    //};
    //
    //
    var counter = 0;
    $scope.name = 'Igor';
    var names = [ 'Misko', 'Chirayu', 'Lucas'];
    /*
     * expose the event object to the scope
     */
    $scope.clickMe = function(clickEvent) {
        $scope.name = names[counter % names.length];
        counter++;
    };

    $scope.returnName = function(data){
        console.log(data);
        return $scope.name;
    };

    //
    //
    //$scope.changeValue = function(){
    //    $scope.showDiv = !$scope.showDiv;
    //}
    //
    //
    $scope.aList = [];
    $scope.addNumbertoList = function(number){
        $scope.aList.push(number);
    }
}]);

app.controller('UserRegistrationController', ['$scope', function($scope){ //annotation
    $scope.userName='Name';
    $scope.save = function(){
        console.log($scope.userName);
    };

    //single binding
}]);

//Understand scope hierarchy and dot behaviour
app.controller('firstController', ['$scope', function($scope){ //annotation

}]);
app.controller('secondController', ['$scope', function($scope){ //annotation

}]);