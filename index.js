// SECTION 5 EXAMPLES AND CHALLENGES DONE BY ME
/**
<<<<<<< Updated upstream
 * JS-BASICS/INTRO/CHALLENGE-1 - TASK
 * 
 * Create new .js file called "other.js"
 * and in this file following line should
 * be printed to the console:
 * 
 * "Greetings from other.js file!"
 * 
 * Add reference to this file to the "index.html"
 */
console.log("Hello from external JavaScript file");
=======
 *

// Create object and modify its properties
let myObjct;

myObjct = {
    a: 10,
    b: "abc"
};

console.log(myObjct);

myObjct.a = 15; // re-assigned value to property

console.log(myObjct);

myObjct.c = true;   // Added a new property to myObjct

console.log(myObjct);

delete myObjct.b;

console.log(myObjct);   // Delete a property of myObjct

console.log(myObjct.a); // Print a single property
 */

//  38. PRACTICE and CHALLENGES - Objects - PART 1

/**
 * let myPost;
myPost = {};    // Empty object.
myPost.postTitle = "Object is reference type";  // Added a new property
myPost.postLikes = 0;   // Added a new property
myPost.shared = false;  // Added a new property

console.log(myPost);

myPost.postLikes = myPost.postLikes + 1;    // property increase value by 1

console.log(myPost);

delete myPost.shared;   //DELETE a property

console.log(myPost);
 */

// 39. PRACTICE and CHALLENGES - Objects - PART 2
// EXAMPLE -1 Object as reference type
/**
 * let myObjct = { a: 10 };
let copyOfMyObject = myObjct;
copyOfMyObject.b = false;

console.log(myObjct);
console.log(copyOfMyObject);

// EXAMPLE - 2 Bracket Notation
let myobject = {
    a: 10,
    b: null,
    c: 25
};


console.log(myobject["a"]); //10

console.log(myobject["b"]); //null

const propertyName = "c";

console.log(myobject[propertyName]);    //25

console.log(myobject["propertyName"]);  //undefined

myobject["new" + "Property" + "Name"] = "Value for dynamically computed property name";

console.log(myobject);
 */

//40. PRACTICE and CHALLENGES - Objects - PART 3
// Example - 1 Never assigned “undefined to any Property or Variable”, use “null”

/**
 * const myobject = {
    a: 3,
    b: true
};

console.log(myobject);

console.log(myobject.c);    //undefined

// console.log(nonDeclaredVariable);   //nonDeclaredVariable is not defined

myobject.newPropertyWithUndefinedValue = undefined;

console.log(myobject.newPropertyWithUndefinedValue);

 */

// CHALLENGE - 1

let objectWithNestedObject = {};
objectWithNestedObject.nestedObject = {};
objectWithNestedObject.nestedObject.a = null;
objectWithNestedObject["nestedObject"]["b"] = true;

console.log(objectWithNestedObject);


>>>>>>> Stashed changes
