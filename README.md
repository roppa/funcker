# Funcker

This is my little foray into the world of functional programming. I mean, I was sold when Curry was mentioned. I called it funcker - 'func' in functional, plus getting your head around fp can be a bit of a 'funcker'.

Functional programming is one of the original paradigms of computing. Then things moved more towards a physical representation of the world - Object Oriented. Like the circle of life, we are moving back towards the past.

Functions are fast and make good use of disc space. Bruce Lee said be like water. Well, the body is 76% water, yet we are so solid. The idea then is to loosen up, to flow, to become pure and dynamic.

If you have done much TDD (please do!) you will know that as the tests get more specific, the code gets more generic. Same principle here - make the functions generic.

Benefits of fp:

 - modularise code, making it more reusable
 - reduce the complexity of components
 - data flows along a pipeline
 - things less likely to break because there is no state or side effects

## Nomenclature or Terminology  or Symbolic Representations of Concepts

<dl>
  <dt>Function(al)</dt>
  <dd>An expression related to an input or inputs. Of or relating to this</dd>
  <dt>Mutable</dt>
  <dd>Liable to change, from latin 'to change'</dd>
  <dt>Immutable</dt>
  <dd>Not changing</dd>
  <dt>Pure</dt>
  <dd>Not mixed, sound, free of contamination</dd>
  <dt>Curry</dt>
  <dd>Converting 1 function with n arguments into n functions each with 1 argument</dd>
  <dt>Higher order function</dt>
  <dd>A function that takes other functions as parameters</dd>
  <dt>Reactive programming</dt>
  <dd>Using the 'observable' pattern and treating things as streams and reacting to events in them</dd>
  <dt>Declarative</dt>
  <dd>Opposite of imperative, not specifying the exact procedure, using expressions, more like 'map, then filter, then reduce'</dd>
  <dt>Imperative</dt>
  <dd>'specially ordered', opposite of declarative, procedural, writing out everything specifically 'for loop over array, put result in another array, loop again and copy certain values, then loop again and calculate total'</dd>
  <dt>Side effect</dt>
  <dd>Changing something outside of itself</dd>
  <dt>Decomposition</dt>
  <dd>Decay, but more like breaking into component parts</dd>
  <dt>Referential transparency</dt>
  <dd>Given parameters should always return the same values. transparency because it is clear you get the same results, referential because of the parameters used</dd>
  <dt>Expression</dt>
  <dd>Anything that results in a value</dd>
  <dt>State</dt>
  <dd>The condition something is in at a particular time</dd>
  <dt>Stateless</dt>
  <dd>Not in a particular condition that persists</dd>
  <dt>Arity</dt>
  <dd>The number of arguments passed to a function. myFunc(1, 2, 3) has an arity of 3</dd>
  <dt>List comprehension</dt>
  <dd>Encapsulates the functionality of map and filter into for...of syntax</dd>
  <dt>Chain(ing)</dt>
  <dd>Being able to chain functions like a().b().c()</dd>
  <dt>:: (Has type)</dt>
  <dd>Standard notation for fp: <code>function_name :: input_type -> value</code></dd>
</dl>

## Notation

There is a standard notation for functional programming worth covering first:

```
f :: input -> output
```

The 'f' is a function, the parameters for that function come after the '::' (or sometimes a single ':'). The '::' means 'has type'. The return value of the function comes after the comma, and the '->' is a function with its returning value. So this notation:

```
f :: number -> number
```

Becomes:

```javascript
const add10 = (x) => x + 10;
```

## Higher order functions

Functions are essentially objects, first class citizens, and can move around as such. Hence we have 'higher order' functions - functions that take other functions as parameters and/or return functions.

## Arity

It is best practice that the number of parameters a function takes needs to be a maximum of two. A function really should do one thing and one thing only. Imagine how many branches there would be if a function got 3, 4, 5 or more parameters? That could indicate a complex function - not good.

Functions should do one thing and one thing only. They should not modify anything other than in its own scope.

## Closure

The definition of a closure is 'a function object that has a reference to the variables in the context it was created in'.

## Mutability

Functions should be pure. This could lead to problems when parameters are references to an object. If that object is changed within a function then a side effect results. Not good.

## Monads

A monad is an object.

## Functions in the 'funker' example

### .curry

If you have ever used bind, then you are half way there. Currying is the same as bind, but applied in a different way. With bind a new function is returned with the 'this' parameter of the original function set to the first parameter of the bind function. This is partial application, and that is what currying is - partial application.

Currying takes 1 function with n arguments, and converts it to n functions with 1 argument. We can then create a function that already has most of the data it needs held in a closure, and then we can reuse it.

So instead of:

```javascript
add(1, 2, 3, 4, 5, 6);
```

it becomes:

```javascript
add(1)(2)(3)(4)(5)(6)
```

That looks a bit weird and not very useful. So to convert a function that usually takes multiple params:

```javascript
let addToFifteen = funcker.curry(add, 1, 2, 3, 4, 5);
let addToThirty = funcker.curry(add, 10, 10, 10);
console.log(addToFifteen(15));  //30
console.log(addToThirty(15));  //45
```

### .filter

### .get

So with imperative coding, to get an attribute for each object in an array we would have to write a for loop, then access the property. Then when we need to do it somewhere else we would write another for loop ...

Not with higher order functions. We simply want to 'get' a property. So we can pass this to a map or forEach like so:

```javascript
[{ name: 'Billy', age: 42 }, { name: 'Bob', age: 24 }].map(funker.get('name'));
```

### .only

Get a new object with only the fields specified in a space delimited string.

```javascript
const getNameAge = only('name age');
const userObject = { name: 'Tad', age: 40, secret: 'shhh, don\'t tell anyone' };
console.log(getNameAge(userObject)); // { name: 'Tad', age: 40 }
```
