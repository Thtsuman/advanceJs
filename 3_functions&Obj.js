/*
	
Functions are objects in js
but it has a callable property that contain code tht 
it will execute

when we check the function obj, we will get,
1. name function(contain name of the function)
2. bind function
3. this function
4. arguments variables
etc

Functions are first class citizens in js
ie,
1. we can assign function to a variable and move around in the code
2. we can pass function as an argument in another function
	eg : 
	function a(fn) {
		fu()
	}	

	a(function() { console.log('hi there!')});

	in here we are passing a function inside another function 

3. we can also return a function inside from a function
	eg: 
	function a() {
		return funciton c() { console.log('hello') }
	}

	a()()

	output ==> hello 

functions are not only for executions ..they are data too in js..we can
pass them assign them to variables and move them in our code


*/