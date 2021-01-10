/*

Types In Js

Primitive => data that only holds a single value
* number => 4
* string => 'hello'
* boolean => true / false
* undefined
* null // but if we do typeof it will give you object
* Symbol('Hy there') => symbol // new type with es6

Non Primitive
* object => {}
* [] => object
* function(){} => will show function but under the hood its an object


diff btw null and undefined

undefined is absence of defination
null is absence of value

as array is also object we can check weather an array is array not an object
by =>  Array.isArray([])

Passed by reference and passed by value

primitive types are always immutable.. so whenever we want to change the 
value of the variable it create another space in memory and assign that memory to
that variable

primitive types are always passed by value

non primitve types are always passed by reference
ie it will assign a pointer to that memory where the data is not making copy of that memory
like passed by value method.

type coercion
language turning certain type to another type for comparison
in js "==" do type coercion

*/