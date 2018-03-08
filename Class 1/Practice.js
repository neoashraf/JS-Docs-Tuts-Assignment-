// Scope example

// changing the value of a global variable
var x = 1;
function y(){  // here x is the global one
	x = 7;
	console.log(x);
}

// js creates function-level scope 
var x = 1;
console.log(x);		//1
function y() {  	// here x is another variable 
	var x = 7;
	console.log(x); //7
}
y();
console.log(x);     //1  this is the global one

// sequence example
function foo(){
	bar();
	var x = 1;
}

// it actually is 
function foo(){
	var x;
	bar();
	x = 1;
}

// variable decleration example
// local foo is moved invisibly to the top of their containing scope 
// and it is undefined(false) so it enters if block
var foo = 1;
function bar() {
	if (!foo) {		// enters
		var foo = 10;
	}
	console.log(foo);  // 10
}
bar();
console.log(foo); // 1

// local foo is moved invisibly to the top of their containing scope.
// 2 is assigned to this foo Now a is different variable from global a 
var foo = 1;
function bar() {
	foo = 2; 
	if (!foo) {  	// does not enter 
		var foo = 10;
	}
	console.log(foo);  // 2
}
bar();

//little modification 
var oo = 1;
function bar() {
	foo = 2;
	if (!foo) {
		var foo = 10;
	}
	console.log(foo);
}
bar();

// function decleration example
// function a() {} is moved invisibly to the top of their containing scope.
// a = 10 assigns 10 to the function. Now a is different variable from global a
var a = 1;
function b() {
	//console.log(a);   // output --> function a() {}
	a = 10;
	//console.log(a);   // 10
	return;
	function a() {}
}
b();
console.log(a);  // 1

// though we do not use var x is printing result. Here x is automatically termed as a variable within its scope
function bar(){
	//console.log(x); 	// it cause error as no x is defined
}
function foo(){
	bar();
	x = 100;  // has effect within its scope
	console.log(x); //100
}
foo();
// console.log(x);  // it will produce error as no x is defined
x = 1;
console.log(x);  // 1 

// first x is (global auto declared without var) x= 7 in func y just replaces the value  
x = 1;
console.log(x);		// 1
function y() {  	 
	x = 7;
	console.log(x);  // 7
}
y();
console.log(x);   // 7

// function as values
var x = function y (){
	var x;
	console.log(x);
}
console.log(x);

// 
function test(){
	bar();
	foo();
	var foo = function (){
		console.log("foo");
	}
	foo();
	function bar(){
		console.log("bar");
	}
}
test();

// 
function test(){
	var foo;
	bar();
	function bar(){
		console.log("bar");
	}
	//foo();
	foo = function (){
		console.log("foo");
	}
	foo();
}
test();


		var mA = [
			{ op:’p’ , values:[0,1]},
			{ op:’s’ , values:[1]},
			{ op:’r’ , values:[]}
		];

		var obj1 = {
			op : 'p',
			values[0,1]
		}