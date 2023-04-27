//other than primitive types

let arrays: string[];

let person: {
  name: string;
  age: number;
};
//only objects with this structure can be stored in this variable

// object = {
//   isPerson: true,
// };
//this cant be done

//array of people objects
let people: {
  name: string;
  age: number;
}[];

people = [{ name: "ed", age: 10 }];

//type inference
//typescript infer (know) the types of variables without you having to specify it
let string =
  "ts will infer that this is a string and not let me set it as a number below";
// string = 123; //this causes an error

//allow more than one type (union types)
let moreThanOneType: string | number = "i can set this variable to a number";
moreThanOneType = 123;

//type alias
//define your own type
type Person = {
  name: string;
  age: number;
};
//now instead of using the code above for person (line 5) we can do this:
let person2: Person;
let people2: Person[];

//functions and types
//set types for parameters
function add(a: number, b: number): number {
  return a + b;
  //the type of the return would be infered by ts if we didnt specify after the params
}

//the function below will return void because there's no return statement
function printOutput(value: any) {
  console.log(value);
}

// GENERICS - to write flexible functions

//this function should be able to be used with any type of value and array
//to insert a string or a number of anything at the beginning of an existing array (so we need type: any)
function insertAtBeginning(array: any[], value: any) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

//here, ts doesn't pick up that this is an array of numbers
//so if I
const updatedArray = insertAtBeginning(demoArray, -1);

updatedArray[0].split(""); //this is a method that can be used only in strings
//and this doesn't generate an error in vscode (only when running the code)

//to solve this problem, we have generics
//add <> to the function body - and inside it an identifier
//to the generic type that will only be available inside this function (generally T for type)
function insertAtBeginningGeneric<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const updatedArray2 = insertAtBeginningGeneric(demoArray, -1);
//now it understands the values passed to the function and know that updatedArray2 is an array of numbers
//once a type is used in the execution, it locks in and know

// updatedArray2[0].split(""); //now this shows an error
