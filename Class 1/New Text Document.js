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

// foo is moved invisibly to the top of their containing scope so it enters if block
var foo = 1;
function bar() {
	if (!foo) {
		var foo = 10;
	}
	alert(foo);
}
bar();


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

// some examples
// though we do not use var x is printing result. Here x is automatically termed as a variable within its scope
function bar(){
	//console.log(x); 	// it cause error as no x is defined
}
function foo(){
	bar();
	x = 100; 
	console.log(x); //100
}
foo();
// console.log(x);  // it will produce error as no x is defined
x = 1;
console.log(x);  // 1 