/**
 * Created by Jubayer on 2/15/16.
 */

angApplication.factory('person', [ function(){
    var personList = [];

    return {
        getAllPersonList : function(){
            return personList;
        },
        addPersonToList : function(person){
            personList.push(person);
        },
        deletePerson : function(index){
            personList.splice(index,1);
        }
    }
}]);