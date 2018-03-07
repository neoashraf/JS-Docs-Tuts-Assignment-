/**
 * Created by jubayer.farabi on 2/16/2016.
 */

angApplication.controller('mainCtrl', ['$scope', 'person',function ($scope,person) {

//    $scope.personName = 'Lukas weber';
////    $scope.person = {name: 'Lukas', result: 'A+'};
    $scope.person2 = {name: 'Weber', result: 'A+'};
    $scope.studentType = 'good student';
//
//


    $scope.mainData = {
        personList : person.getAllPersonList()
    };

    $scope.addNewPerson = function(newperson){
        person.addPersonToList(newperson);
    }
    $scope.deletePerson = function(index){
        person.deletePerson(index);
    }


    $scope.methodFromCtrl = function(){
        console.log('method from controller');
    };
    $scope.methodFromCtrl1 = function(){
        console.log('method1 from controller');
    };

}]);