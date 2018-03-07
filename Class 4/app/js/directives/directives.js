/**
 * Created by jubayer.farabi on 2/16/2016.
 */

//angApplication.directive('myCustomDirective', function () {
//    return {
//        template: '<span>{{person.name}} got {{person.result}} in his HSC exam</span>'
//    }
//});

//angApplication.directive('myCustomDirective', function () {
//    return {
//        templateUrl: 'views/custom-view.html'
//    }
//});

//E - Element name (default): <my-directive></my-directive>
//A - Attribute (default): <div my-directive="exp"></div>
//C - Class: <div class="my-directive: exp;"></div>
//M - Comment: <!-- directive: my-directive exp -->

//angApplication.directive('myCustomDirective', function () {
//    return {
//        restrict: 'E',
//        //replace:true,
//        templateUrl: 'views/custom-view.html'
//    }
//});

//angApplication.directive('myCustomDirective',[function () {
//    return {
//        restrict: 'E',
//        templateUrl: 'views/custom-view.html' , //shared scope
//        link: function($scope, elm, attr){ //linkFunction is linked with each element with scope to get the element specific data.
//            console.log(elm);
//        }
//    }
//}]);

//
//angApplication.directive('myCustomDirective', function () {
//    return {
//        restrict: 'E',
//        scope:true, //inherited scope
//        templateUrl: 'views/custom-view.html',
//        link: function ($scope, $element, attr) {
//            console.log($scope);
//        }
//    }
//});
//
//angApplication.directive('myCustomDirective', function () {
//    return {
//        restrict: 'E',
//        scope:{ //isolated scope
//            person:'=personItem',
//            //otherperson: '=', //
//            studentType:'@' //takes string
//        },
//        templateUrl: 'views/custom-view.html',
//        link: function ($scope, $element, attr) {
//
//            console.log($scope.otherperson)
//        }
//    }
//});


//angApplication.directive('myCustomDirective', function () {
//    return {
//        restrict: 'E',
//        scope:{
//            person:'=personData',
//            isolatedName:'@isn'
//        },
//        templateUrl: 'views/custom-view.html',
//        link: function ($scope, $element, attr) {
//
//            console.log($scope)
//        }
//    }
//});

//angApplication.directive('personAdd', function () {
//    return {
//        restrict: 'A',
//        scope:{
//            addfn: '&'
//        },
//        templateUrl: 'views/custom-view.html',
//        link: function (scope, $element, attr) {
//
//            //console.log(scope);
//            scope.submit = function(){
//                scope.addfn({o:{name:scope.name,email:scope.email}});
//            }
//        }
//    }
//});

//angApplication.directive('myCustomDirective', function () {
//    return {
//        restrict: 'E',
//        transclude: true,
//        scope:{
//            person:'=personData',
//            isolatedName:'@isn',
//            studentType:'@'
//        },
//        templateUrl: 'views/custom-view.html',
//        link: function ($scope, $element, attr) {
//            console.log($scope)
//        }
//    }
//});

angApplication.directive('customclick', function () {
    return {
        restrict: 'A',
        priority: -11,
        //require: '?ngClick',
        link: function (scope, elm, attr) {



            var stopClickEvent = function(e){
                e.preventDefault();
                e.stopImmediatePropagation();
            };
            elm.bind('click',function(event){
                console.log('me first');
                stopClickEvent(event);
            });
        }
    }
});






