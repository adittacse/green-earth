### 1) What is the difference between var, let, and const?

**Answer:**

* **```var``` :** ```var``` is from ES5 version. It initialized with ```undefined``` value. It has some bugs like if I access it from outside of the block scope like ```if```, ```for``` etc. Value can reassign to the ```var``` variable. Also it could redeclare.

* **```let``` :** To solve the problems of ```var``` ES6 introduced with ```let```. It's not initialized with any value. So if I access any ```let``` variable before declaration, it will give ```ReferenceError```. Value can reassignment here but can't redeclaration in same scope.

* **```const``` :** ```const``` is different type variable declaration. It is introduced in ES6. The value of ```const``` is fixed. So I can't update value of ```const```. But always not the same. Like I can update the value if it is an object.

### 2) What is the difference between map(), forEach(), and filter()?

**Answer:**

* **```map()``` :** ```map()``` is used to transform each element to a new array. I mean, it returns a new array in output.

* **```filter()``` :** If I want to apply condition in an array, ```filter()``` is the best way to apply it. It actually check the value with the condition is ```true```. Then it returns a new array like ```map()```.

* **```forEach()``` :** If need to run a ```function``` on each element of the array, ```forEach()``` is used to do the task. Another feature is, it returns ```undefined```. That means there's no return system in ```forEach()```.

### 3) What are arrow functions in ES6?

**Answer:** It is the new and shorter way to write a function. It is introduced in ES6 version. This array is shorter, cleaner and handle to this different compared to ES5 traditional functions.

Example:
```
const square = x => x * x;
console.log(square(5));
```
Array function is mostly used in callback functions like ```map()```, ```filter```, ```forEach()```.

### 4) How does destructuring assignment work in ES6?

**Answer:** Destructuring ins ES6 is a shorthand way to unpack values.

Example:
```
const [a, b] = [10, 20];
```
In output, a = 10 and b = 20 will show.

```
const {name, age} = {name:"Alice", age:25};
```
In output, name="Alice" and age=25 will show.

### 5) Explain template literals in ES6. How are they different from string concatenation?

**Answer:** Template literals is a new way is ES6 to work with dynamic value with a string. To declare template literals, use ` instead of double or single quotation. 

Example:
```
const firstName = "Aditta";
const lastName = "Chakraborty";

const fullName = `My full name is ${firstName} ${lastName}`;

console.log(fullName);
```

Template literals are different from string concatenation with the syntax. Here's an example:

```
// traditional way
const oldText = "Line 1\n" +
                "Line 2\n" +
                "Line 3";

// ES6 template literal
const newText = `
Line 1
Line 2
Line 3
`;

console.log(newText);
```