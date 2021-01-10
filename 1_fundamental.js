// Javascript Engine

/* 

Def-
	jsEngine mainly take our js code file and conver it into binary
	language so that it can be understandable by computer

note-> First jsEngine was created by
		...drum rolllll ... 

		"Brendan Eich"(creater of js)
		He created the first version of spider monkey


* javascript is a single threaded language 
* javascript have many engines tested by ECMAScript
* v8 is a popular jsEngine created by Google in 2008 build on c++
* other eg are chakra(Edge browser), SpiderMonkey(Mozila)
* list of engines - (https://en.wikipedia.org/wiki/List_of_ECMAScript_engines)

process inside the v8 engine

1. takes the code
2. convert them into token or parse them
	-> It checks for the syntax and semantics.

3. structure tokens in AST tree structure (Abstract Syntax Tree)
	-> It is a hierarchical tree like structure of program representation 
	which allows interpreter to understand the program.

4. Interpreter convert the AST into Byte Code. In v8 engine this process
	is know as "Ignition"

5. Profiler will check for the repeating code in the the AST and optimize
	it.

6. Compiler spit out the optimized Byte Code
	-> if compiler's byte code is more optimized then Interpreter byte code
	then it will get replaced


Imp topic 
interpreter vs compiler
	-Interpreter reads code line by line and turn them into byte code.
	-Interpreter doesnot take setup time..its faster for not repeating code.
	-Compiler will look through the code once and try to figure out
	what it does..check for repeatation and optimize it and then give output in
	machine language..that can be directly read by cpu.
	-Compiler changes our js file into another language and will optimize it.
	-It is slower than Interpreter if it is not repeating code..but will 
	optimize at a great extend if there is repeatation in code.



Js "now" use both interpreter and compiler methods..
and called JIT machines (Just In Time)


JS Runtime



Call Stack
-> it store or record every functions or methods running in the file
	It works as first in last out.
	it also help to keep track the running path of the code

Stack Overflow
-> it happen when we only push method or function to the stack
	but it never been poped out..resources are limited so it will 
	fill all the stack..and create a stack overflow

	Now Browser prevent this type of script..to minimize the crashes 
	>	Error: Maximum call stack size exceeds



Memory Heap
-> It store all the variable data in it. 


Garbage collector
-> background process in the JavaScript engine that is called garbage 
collector. It monitors all objects and removes those that have become unreachable.



Js is a synchronous code (a bunch of command in a sequence).
Web API is present in every browser. These are asynchronous method.

first call stack will check if it a web api(async work) ..web api will take and do his job in background
and js engine will continue with the stack(sync work)..once web api finished with the task, he will return
some callback function or data. it will save on callback queue..Event loop always moniter the call
stack and only push the callback queue only when the call stack is empty.



Execution Context
When their is method pushed to call stack, each stack
called execution context..

There is a "global()" execution context always present under the hood
that run the whole js file. It read the lines of code in the file..

it call global execution context. It gives 2 object-> global(for browser, window) & this
then we add variable, function on to the window object to run the code. It was created 
on creation phase..ie, if we add a js file..and add nothing..window and this will be there.
and ->  this === (global||window).

There are mainly 2 phase... creation phase and 2nd execution phase



Laxical Environment
laxical env is where the code is written
like:
if we have 3 functions with no intendation..ie, its not inside any function or class
it is present in global laxical environment.
if we write a function inside of any function say...

function sayMyName() {
	function a() {}
}
in here a() is present in sayMyName laxical env

we can think laxical as a universe..of each stack in the call stack..
if we write function outside..it will be in global laxical env. 



Hoisting
-> Hoisting happen between creation time and execution time

during creating time..js engine go through the code and allocate 
memory for variables and function..this process is called hoisting.

hoisting happen with 2 keyword only..var, function
where var is partially hoisted, and functions are fully hoisted

partially hoisted means in creation time..js engine will say to memory heap,
save some memory for this variable and assign nothing to it(undefine)..
so if we try to get variable content before its declaration..it will give an undefine

function on the other hand is fully hoisted ie, it will allocate memory for the 
whole function declaration

but for function expression it will again partially hoisted.



IIFE
immediate invoked function expression

(function() {
	//do someting
})();


THIS
-> this is the object that the function is a property of 


Function borrowing
it bind one object method to another object

call() 
=> a() === a.call()
js under the hood add call() method to a function and when we call
them it read as "a.call()" 

call() takes (bind object, argument1, argument2, ...)
for eg: objectA.someMethods(objectB, arg1, arg2 ...)

apply()
=> a() === a.apply()
apply() takes (bind object, [argument1, argument2, ...])
for eg: objectA.someMethods(objectB, [arg1, arg2 ...])


*/

