/**
 * Created by jubayer.farabi on 2/16/2016.
 */

'use strict';

angApplication.service('fstS', ['myValue', function (a) {
        this.local = 'St';
        this.sayHi = function () {
            console.log('hii from Service ' + a.first + ' ' + a.last);
        };
        this.sayHello = function () {
            return 'Hello service from' + this.local;
        }

}]);

angApplication.factory('fstF', ['myValue', function (Value) {
    var prop = undefined;

    return {
        sayHi: function () {
            console.log('hii from Factory ' + Value.first + ' ' + Value.last);
        },
        setProp: function (val) {
            prop = val;
        },
        getProp: function () {
            return prop;
        }
    }
}]);

angApplication.value('myValue', {
    first: 'lukas ', last: 'weber'
});

angApplication.constant('Constant', {
    first: 'julian', last: 'weber'
});

angApplication.factory('DoubleFilter', function () {
    return function (input, input2) {
        return input * 2 + parseInt(input2);
    }
});

angApplication.filter('dbl',function(){
    return function (input, input2) {
        return input * 2 + parseInt(input2);
    }
});



