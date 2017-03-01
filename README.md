# Funcker

This is my little foray into the world of functional programming. I mean, I was sold when Curry was mentioned. I called it funcker func in functional, plus getting your head around fp can be a bit of a funcker.

Functional programming is one of the original paradigms of computing. Then things moved more towards a physical representation of the world - Object Oriented. Like the circle of life, we are moving back towards the past.

Functions are fast and make good use of disc space. Bruce Lee said be like water. Well, the body is 76% water, yet we are so solid. The idea then is to loosen up, to flow, pure and dynamic.

Functions are essentially objects, first class citizens, and can move around as such. Hence we have 'higher order' functions - functions that take other functions as parameters and/or return functions.

These functions should do one thing and one thing only. They should not modify anything other than in its own scope.

If you have done much TDD (please do!) you will know that as the tests get more specific, the code gets more generic. Same principle here - make the functions generic.

Benefits:

 - modularise your code, making it more reusable
 - reduce the complexity of your components
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
  <dt>Arrity</dt>
  <dd>The number of arguments passed to a function. myFunc(1, 2, 3) has an arity of 3</dd>
  <dt>List comprehension</dt>
  <dd>Encapsulates the functionality of map and filter into for...of syntax</dd>
  <dt>Chain(ing)</dt>
  <dd>Being able to chain functions like a().b().c()</dd>
  <dt>:: (Has type)</dt>
  <dd>Standard notation for fp: <code>function_name :: inputs -> output</code></dd>
</dl>

It is best practice that the number of parameters a function takes needs to be a maximum of two. A function really should do one thing and one thing only. Imagine how many branches there would be if a function got 3, 4, 5 or more parameters? That would indicate a complex function - not good.

Lets get stuck in.

## .curry

Currying takes 1 function with n arguments, and converts it to n functions with 1 argument.

So instead of:

add(1, 2, 3, 4, 5, 6);

it becomes be add(1)(2)(3)(4)(5)(6)

so add(a, b)

```
let addToFifteen = funcker.curry(add, 1, 2, 3, 4, 5);
console.log(addToFifteen(15));  //30
```

So what we have here is partial application. We can create a function that already has most of the data it needs, and then we can reuse that.

## .get

So with imperative coding, to get an attribute for each object in an array we would have to write a for loop, then access the property. Then when we need to do it somewhere else we would write another for loop ...

Not with higher order functions. We simply want to 'get' a property. So we can pass this to a map or forEach like so:

```
[{ name: 'Billy', age: 42 }, { name: 'Bob', age: 24 }].map(funker.get('name')
```
