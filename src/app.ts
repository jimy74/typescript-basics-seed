//Course Typescript fundamentals:

console.log('******* PART 1 : ES6/7 and TypeScript *******');

//LESSON STEP 0, how to use webpack or webpack-dev-server or tsc to start the app and build in different manners, also note the package.json that define the commands we can run with 'yarn <keyWord>'

console.log("HoyeHoye TypeScript! (:D)-¦-<");

//LESSON STEP 1, arrow functions

const pizzas = [{ name: "Pepperoni", toppings: ["merguez"] }];

//arrow function:   (we can remove the parenthesis if et don't need the index, but for the example I leave it)
const formattedPizzas = pizzas.map((pizza, index) => {
  return pizza.name.toUpperCase();
});

const formattedPizzas2 = pizzas.map(
  (pizza, index) => pizza.name.toUpperCase() //not that there is an implicit return if we don't use the braquets {} because we are in a map
);

//instead of:
/*
const formattedPizzas = pizzas.map(function (pizza, index) {
    return pizza.name.toUpperCase();
});*/

console.log(formattedPizzas);
console.log(formattedPizzas2);

const pizza = {
  name: "4 saisons",
  getName: () => pizza.name,
};

console.log(pizza.getName());

//LESSON STEP 2, default parameters

function multiply(n1: number, n2: number = 25) {
  return n1 * n2;
}
console.log(multiply(2, 50));
console.log(multiply(2));

//LESSON STEP 3, Object litteral improvements for ES6 or typescript

const pizza2 = {
  name: "4 saisons",
  price: 15,
};

const toppings = ["merguez"];
const order = {
  pizza, //this is enough, it will add the parameter name and the value together
  toppings, //same here
  //pizza: pizza,
  //topping: toppings
};

console.log(order);

//LESSON STEP 4, Rest parameters

function sumAll(myMessage: string, ...myNumbers: Array<number>) {
  //here the second parameter is called a rest parameter
  console.log(myMessage);
  return myNumbers.reduce((prev, next) => prev + next);
}

console.log(sumAll("myMessage", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
//all the numbers are passed as separated arguments
//but the function understand it and put them all in the 'myNumbers' parameters array

//LESSON STEP 5, Array Spread Operator

const myToppings = ["bacon", "eggs"];

const moreToppings = ["ananas", "chicken"];

const allToppings = [...myToppings, ...moreToppings];

console.log(allToppings);

//LESSON STEP 6, Object Spread Operator

const pizza4 = {
  name: "4 saisons",
};

const toppings4 = ["bacon"];

const order4 = {
  ...pizza4, //see that if we put the spread operator here, we map what is inside (and the reserve without the spread operator)
  toppings4, //see that not using the spread operator here map the property and the value (and the reverse with the spread operator)
};

const order4Copy = { ...order4 };
console.log(order4);
console.log(order4Copy);
//same way in more complicated in pure JS not using ES6 / TS:
console.log(Object.assign({}, order4));

//LESSON STEP 7, Destructuring Arrays

const pizza5 = {
  name: "4 saisons",
  toppings: ["bacon"],
};

interface Pizza {
  name: string;
  toppings: Array<string>;
}
//with the prackets in the parameter zone, we say that we receive an object, and inside there is two attributs
//this is a good way to deconstruct objects easily and DRY the code
//see also that we can rename a parameter, and use strong typing
function getOrder5({ name: renamedNameParameter, toppings }: Pizza) {
  return { renamedNameParameter, toppings };
}

console.log(getOrder5(pizza5));

//same idea with an array:

const toppings5 = ["chease", "eggs", "bacon"];

const [first, second, third] = toppings5;

console.log("A good breakfast could be " + second + " and " + third);

console.log('******* PART 2 : Primitive Types in TypeScript *******');

//reminder of types in javascript first:
//Number, String etc ... are Javascript types,
//don't use uppercases primitive types in TypeScript!!!!

//number TS Primitive Type:

const pizzaCost: number = 10;
const pizzaName: string = "4 saisons";
//let decimals = 0.5;
//let decimals = "abc"; // see that we can reasign with let, and it is flagged as bad and it say the expected type
//this is a good way to discover the type

//we can also declare the return type of a function:
function add(n1: number, n2: number): number {
  return n1 + n2; //this way if we return a string instead of a number it would be flagged
}
const result: number = add(2, 2);
console.log(`result ${result}`);

//Note that once compiled into JavaScript the types will disapear, but as we code in TypeScript it was safely written

const parsedNumber: number = parseInt("15", 10); //this will parse 15 on base 10, which return a number 15
console.log(parsedNumber);

//string TS Primitive Type:

//ES6 we can use different types of string values

const discountCode: string = "pizza2022";

function normalizeDiscount(rawDiscountCode: string): string {
  return rawDiscountCode.toLocaleUpperCase();
}

const text: string = `Final coupon is ${normalizeDiscount(discountCode)}`; //this is only available since ES6, before we need to use the +
console.log(text);

const thisIsAlsoCalledMultilignString: string = `ligne1
ligne2
ligne3
`;
console.log(thisIsAlsoCalledMultilignString);

//boolean TS Primitive Type:

const isApprovedByItalian: boolean = true;

function isPizzaReady(cookingDurationMinutes: number): boolean {
  return cookingDurationMinutes >= 3;
}

if (isPizzaReady(4)) {
  console.log(`The pizza is ready!`);
} else {
  console.log(`The pizza isn't ready yet...`);
}

console.log('******* PART 3 : Other Types in TypeScript *******');

//any <- Dangerous/Bad/not TS good practice!!!
//this is not a good practice but it can occure sometime when things are not clearely typed
function getNumberOrString(expectNumber: boolean): any {
  //it would have been better with union type: number | string
  return expectNumber ? 5 : `5`;
}
console.log(typeof getNumberOrString(true) == `number`); //Note that we can test the type in case it is ambiguous
let coupon; //by default it infer the type as any
//Warning: Never use any type is a good practice, unless we have no other choice, which should not happen anyway

//implicit and explicit types

const implicitCoupon = `pizza2022`; //sometime it is enough, when we look at it we know it is a string
let explicitCoupon: string;
explicitCoupon = `pizza2022`; //for a let it could worth it, as we can reasign it

//void type

function returnNothing(): void {
  console.log("hello");
}

let myName: string = "Jimmy";
//void is quite useless to add most of the time, unless the readibility is super important like for sensitive code
function reAssign(): void {
  //Warning: this is an example but it's BAD, as the function isn't pure / got side effect!
  myName = "Yoan";
}
reAssign();
console.log(myName);

//never type

function throwErrorWithMessage(errorMessage: string): never {
  //it will never go to the end, not even finish with void
  throw new Error(errorMessage); //Not that Error is a type as well!
}

//null, undefined, strict Null (from JS) ...

let discountCode2 = "pizza2020";
console.log(discountCode2);
function removeDiscountCode2(): void {
  // note that this is not pure, bad practice!
  //discountCode2 = null; //this can be uncomment and compile if you disable strict check in tsconfig.json
}
console.log(discountCode2);

//union type

let discountCode3: string | null = "pizza2020"; //see its usage here
console.log(discountCode3);
function removeDiscountCode3(): void {
  // note that this is not pure, bad practice!
  discountCode3 = null; //this now work even in strict mode BECAUSE we explicitly allow it using the union operator
}
console.log(discountCode3);

//union type *also* allow to check values, not only type!!!

function getMenuSizeCalories(sizeName: "medium" | "large"): number {
  return sizeName === "medium" ? 200 : 500; //Note we should use Enum, because we repeat ourself we can do typo here
}
//console.log(getMenuSizeCalories('meemdium')); //typo flagged at compilation time, and therefore when writting it!
console.log(getMenuSizeCalories("medium"));

//function type

let myModifiableFunction: Function;

myModifiableFunction = function (n1: number, n2: number): number {
  return n1 - n2;
};
console.log(`myModifiableFunction v1 ${myModifiableFunction(2, 1)}`);

myModifiableFunction = function (n1: number, n2: number): number {
  return n2 - n1;
};
console.log(`myModifiableFunction v2 ${myModifiableFunction(2, 1)}`);

//we can just do the same but by make the Function more typed in the first place, and avoid to redefine the type afterward:

let myClearerModifiableFunction: (n1: number, n2: number) => number;

myClearerModifiableFunction = (n1, n2) => n1 - n2;

console.log(
  `myClearerModifiableFunction v1 ${myClearerModifiableFunction(2, 1)}`
);

myClearerModifiableFunction = (n1, n2) => n2 - n1;

console.log(
  `myClearerModifiableFunction v2 ${myClearerModifiableFunction(2, 1)}`
);

//we can just do it all in one line for the first declaration:

let myClearerModifiableFunctionV3: (n1: number, n2: number) => number = (
  n1,
  n2
) => n1 - n2;

//and just for fun, which is not in the lesson but I wanted to do it:

//this return a function, that will run the first function f1, and then f2 and return f2's result
function getCombinedFunction(
  f1: Function,
  f2: (numberInParam: number) => number
): (numberInResult: number) => number {
  return (numberInParam: number) => {
    f1();
    return f2(numberInParam);
  };
}
const logSomething = () => console.log("f1 executed");
const doubleIt = (n: number): number => n * 2;

//Warning: If we type it as Function, it erase the type it was, so it's obfuscate how it work, so it is BAD!!!
const combinedFunctionBAD: Function = getCombinedFunction(
  logSomething,
  doubleIt
);
console.log(`combinedFunction result = ${combinedFunctionBAD()}`); // <- this return NaN

const combinedFunctionImplicit = getCombinedFunction(logSomething, doubleIt);
console.log(`combinedFunction result = ${combinedFunctionImplicit(4)}`); //<- here impossible to miss it (:D) yeah!

const combinedFunctionBetterTyped: (numberInResult: number) => number =
  getCombinedFunction(logSomething, doubleIt);
console.log(`combinedFunction result = ${combinedFunctionBetterTyped(4)}`); //<- here impossible to miss it (:D) yeah!

//Optional (as non mandatory) Parameter

function cumulateOrAdd1(n1: number, n2?: number): number {
  return n1 + (n2 === undefined ? 1 : n2); //this will let the 0 as 0, and not set it to 1
  //return n1 + (n2 ? n2 : 1); //this will think 0 is like undefined, and set it to 1 in both cases
  //because null, undefined and 0 all return false
}

console.log(cumulateOrAdd1(4, 4));
console.log(cumulateOrAdd1(4, 0));
console.log(cumulateOrAdd1(4));

//Optional parameters with default values

function cumulateOrAdd1Version2(n1: number, n2: number = 1): number {
  return n1 + n2; //it simplify a lot the logic, ALWAYS do this default parameter when we can!!! Good Practice!!!
}
console.log(cumulateOrAdd1Version2(4, 4));
console.log(cumulateOrAdd1Version2(4, 0));
console.log(cumulateOrAdd1Version2(4));

//another way to *almost* do it so could be to use an OR operator, see the Warning!

function cumulateOrAdd1Version3(n1: number, n2?: number): number {
  return n1 + (n2 || 1); //it is still more deadable, while keep the flexibility for complexe logic if needed
}
console.log(cumulateOrAdd1Version3(4, 4));
console.log(cumulateOrAdd1Version3(4, 0)); //Warning <- here Zero is interpreated as undefined, so be careful switching to this OR operator!
console.log(cumulateOrAdd1Version3(4));

//Object type

let myObject: { myAttribut: string };

myObject = {
  myAttribut: `whatever`,
};

let myObject2: { myAttribut: string } = {
  myAttribut: `whatever`,
};

let myObject3: {
  myAttribut: string;
  getAttributUpperCase: () => string;
} = {
  myAttribut: `whatever`,
  getAttributUpperCase: () => myObject3.myAttribut.toUpperCase(),
};

console.log(myObject3.getAttributUpperCase());

// Array type (and an extra preview of forEach, map and reduce)

const myArray: Array<number> = [1, 2, 3];
const myArray2: number[] = [1, 2, 3];
const myMixinArray: Array<number | string> = [1, 2, 3, "hello"];

const x: Array<any> = new Array();
const y: Array<any> = [];

//forEach: trigger something for each element
myMixinArray.forEach((element: number | string, index: number) =>
  console.log(`element = ${element} (position ${index})`)
);

//map: transform of each element and return
const mappedResults: string[] = myMixinArray.map(
  (element: number | string, index: number) =>
    `element value = ${element} (position ${index})` //no need return here if no brackets
);

console.log(mappedResults);

//reduce: cumulate each element by transforming them and return (like a flatMap or of course a reduce on Scala)
const reducedResult: string = myMixinArray.reduce(
  (previous: string, current: string | number, index: number) =>
    `${previous}
element value = ${current} (position ${index})`,
  ""
);

console.log(`reducedResult ${reducedResult}`);

//Tuple types for Arrays (<- Define objects instead seems better)

//here we suggest that we have a data structure, inside of an array, made of different types
let myArrayPizza: (string | number | boolean)[] = ["Pepperoni", 20, true]; //see this is an array, and we get confused by the high mixin level

//to demonstrate the confusion issue:
myArrayPizza = [30, true, true, "whatIsGoingOnNotExpectedToUseLikeThis"];

//the solution is to type it as a Tuple:
let myTuplePizza: [string, number, boolean] = ["Pepperoni", 20, true];
myTuplePizza = ["ChangedFor4saison", 30, false];
console.log(myTuplePizza);
console.log(myTuplePizza[2]);
//see that it's still quite unfortunate that we need to find out what is the meaning of each property
//define an object might be better to name the properties

console.log('******* PART 4 : "type" Aliases and Assertions *******');

let menuSize: "medium" | "large" | "extraLarge";

function choseSizeMessage(size: "medium" | "large" | "extraLarge"): string {
  return `Nice pick, the menu  ${size} is the best!`;
}
const myChosenSize = choseSizeMessage("large");

//better using a 'type' to don't repeat myself (even if the best might be an enum here)

type MenuSize = "medium" | "large" | "extraLarge";

function choseSizeMessage2(size: MenuSize): string {
  return `Nice pick, the menu  ${size} is the best!`;
}
const myChosenSize2 = choseSizeMessage2("large");

//and even less code, by defining function type

type ChoseMenuCallback = (size: MenuSize) => string;

const choseSizeMessage3: ChoseMenuCallback = (size) =>
  `Nice pick, the menu  ${size} is the best!`;
const myChosenSize3 = choseSizeMessage3("large");

//say to typescript that we know more than what we say about a type, and we want to assert this at runtime

type RegularPizza = { name: string; toppings: string[] };

const myRegularPizza = { name: "4 saisons", topings: ["bacon", "chili"] };

const serializedRegularPizza: string = JSON.stringify(myRegularPizza);

function getNameFromJSON(serializedObjectText: string): string {
  //JSON.parse(serializedObjectText) return any, to avoid this we will provide a kind of assertion to typescript to say its type

  //Old way to do it:
  //return (<RegularPizza>JSON.parse(serializedObjectText)).name; //now we have autocompletion, if we start to type n it propose .name and same for .toppings
  //it could have work with .name without <RegularPizza> type assertion, but it would not have propose any type completion

  //the only problem with the old way, is in jsx and tsx, where you can mixin html and js/ts, as <RegularPizza> get confused with an html element!
  //So here is the new way to do it, which is not confusing when using jsx or tsx:
  return (JSON.parse(serializedObjectText) as RegularPizza).name;
}

console.log(getNameFromJSON(serializedRegularPizza));

console.log('******* PART 5 : interface *******');

// a type cannot be re-opened to add new properties vs an interface which is always extendable

interface IRegularPizza {
  name: string;
  toppings: string[];
  freshTopping?: string;
  getFullNameForKitchen(): string;
}

interface ICustomCrustPizza extends IRegularPizza {
  //see, we extended the previous interface and just add the extra properties, awesome!
  crust: "regular" | "cheasy crust" | "garlic crust";
} //now we can custom the crust

const myCustomCrustPizza: ICustomCrustPizza = {
  name: "4 saisons",
  toppings: ["bacon", "blue chease"],
  crust: "regular",
  getFullNameForKitchen: () =>
    `A ${myCustomCrustPizza.name} ${
      myCustomCrustPizza.crust
    } extra ${myCustomCrustPizza.toppings.join(" ")}`,
};

console.log(myCustomCrustPizza.getFullNameForKitchen());

function addDefaultFreshTopping(customPizza: ICustomCrustPizza) {
  return {
    ...customPizza,
    freshTopping: "spinatch",
  };
}

console.log(addDefaultFreshTopping(myCustomCrustPizza));

//or if there is an option to add another kind of fresh topping:
function addFreshTopping(
  customPizza: ICustomCrustPizza,
  freshTopping: "spinatch" | "roquette" = "spinatch"
) {
  return {
    ...customPizza,
    freshTopping,
  };
}

console.log(addFreshTopping(myCustomCrustPizza, "roquette"));

//interface with index signature:

let mySimplePizza: IRegularPizza = {
  name: "4 saisons",
  toppings: [],
  getFullNameForKitchen: () => mySimplePizza.name,
};

//mySimplePizza[1] = 'blabla'; //error: Element implicitly has an 'any' type because expression of type '1' can't be used to index type

interface IPizzaWithIndexSignature extends IRegularPizza {
  [key: number]: string; //this is possible even on the top level object as it don't conflict with properties
  //as the key number and properties are string
  //[key: string]: string, //not possible at the top level, at it will be confused with attributs, but we can do it by nesting it
  //like that:
  alergies: {
    [key: string]: string;
  };
}

let myIndexSignaturePizza: IPizzaWithIndexSignature = {
  name: "4 saisons",
  toppings: [],
  getFullNameForKitchen: () => mySimplePizza.name,
  alergies: {},
};

myIndexSignaturePizza[0] = "not too cooked";
myIndexSignaturePizza[1] = "no mozzarela!";
myIndexSignaturePizza.alergies!["mozzarela"] = "deadly";
console.log(myIndexSignaturePizza);

console.log('******* PART 6 : Classes, properties and inheritance *******');

//on pure javascript old way, we had to make it a function, and to that function . prototype . myNewFunctionName = a new function
//so it was not the cleanest oriented object way, but as I say it was the old way
//now we do:

//Note: the default visibility for properties and methods using TS is public
class Pizza2 {
  //private name: string;

  //private toppings: string[]; // = []; // we can assign it here and not on the constructor,
  //but for consistancy do it all in the same place is better

  //note that if we set the visibility on the constructor, we don't need ot define them as attributs, it will be done automatically by TS
  constructor(
    private name: string,
    readonly sizeCm: number,
    private toppings: string[] = []
  ) {
    this.name = name;
    this.sizeCm = sizeCm;
    this.toppings = toppings;
  }

  //no need accessor for the sizeCm, as it's read only and not private, we will be able to read it but not write it

  getName: () => string = () => this.name;

  //another way to write a getter is

  get ecapsulatedName() {
    return this.name.toLocaleUpperCase();
  }

  set ecapsulatedName(name: string) {
    this.name = name;
  }

  addToppings(...toppings: string[]): void {
    this.toppings.push(...toppings);
  }
}

const myPizza2: Pizza2 = new Pizza2("4 saisons", 25, ["bacon", "chiken"]);
myPizza2.addToppings("ananas", "chili");
console.log(myPizza2);
console.log(myPizza2.getName());
//myPizza2.name = "brained"; //not allowed as we defined it as private, nice encapsulation protection! :)
console.log(myPizza2.sizeCm);
console.log(myPizza2.ecapsulatedName);
myPizza2.ecapsulatedName = "not brained as I made it possible explicitly";
console.log(myPizza2.ecapsulatedName);

//Note that when compiled to javascript, it will be part of the prototype anyway, because JS have no other way to represent class's methods

//class inheritance

class Pizza3 extends Pizza2 {
    //not that we cannot redefine visibility via the constructor, because it try to redefine the attribut, which was already done
    constructor(name: string, sizeCm: number, toppings: string[], readonly freshToppings: string[] = []) {
        super(name, sizeCm, toppings);
        this.freshToppings = freshToppings;
    }
}

console.log(new Pizza3("margeritta", 30, ["salmon", "cream"], ["spinatch", "olives"]))

//abstract class

abstract class Pizza4 extends Pizza2 {
    abstract get somethingToImplementLater(): number; //the name is silly but it is for the4 example
}

// new Pizza4(); //Not allowed as it is abstract

class Pizza5 extends Pizza4 {
    get somethingToImplementLater(): number { //this must be implemented here as it is not abstract
       return 3000;
    }
}

//now we can instanciate it
console.log(
    new Pizza5("margerita", 30).somethingToImplementLater //note that getter with the 'get' keyword is like an attribut in TS (no parenthesis)
); 

//protected (like private but accessible when we inherit from the class)

class test {
    protected myAttribut: string = `Hello`;
}

class test2 extends test {
    readonly otherAttribut: string = `${this.myAttribut} World`; // <- using super.myAttribut don't work, not made for that
}

console.log(new test2().otherAttribut);

//or the same way in more verbose, which I don't prefer:

class test3 extends test {

    readonly otherAttribut: string;

    constructor() {
        super();
        this.otherAttribut = `${this.myAttribut} World`; // <- using super.myAttribut don't work, not made for that
    }
}

// the thing to remember is that I gain access to this attribut on the child class using protected instead of private,
// but it remain uncessesible form the outside

console.log(new test3().otherAttribut);

//class implements interfaces

interface ISizable {
    readonly sizeCm: 25 | 30 | 35;
}

class Margerita implements ISizable {
    sizeCm: 25 | 30 | 35 = 30;
    protected name = "Margerita";
}

interface ICustomizableBeforeCooking {
    toppings: string[]; //readonly is possible in interfaces
}

interface ICustomizableAfterCooking {
    freshToppings: string[];
    getFreshToppingAdvise(): string
}

class CustomMargerita extends Margerita implements ICustomizableBeforeCooking, ICustomizableAfterCooking {
    toppings: string[] = [];
    freshToppings: string[] = [];
    getFreshToppingAdvise(): string {
        return "try the roquette, or if you find it too strong spinatch are the safe way to go"
    }
}
const customMargerita = new CustomMargerita();
console.log(customMargerita.getFreshToppingAdvise());
// an idea for the future could be tomake it readonly, and allow the toppings only if it's not sunday, or if it's not a small pizza
customMargerita.freshToppings.push("roquette"); 
console.log(customMargerita);


// static properties & Date

const date = new Date();
console.log(date);

const date2 = + new Date(); //return the timestamp, because it is equivalent to Number(new Date);
console.log(date2);

console.log(Date.now()); //this is a cleaner way to get the timestamp by calling the static method now() from the Date class

class PromotionCode {
    static allowed = ['Margerita', 'Chorizo', 'Tuna'];
    static create(percentageReduction: number): string {
        return `PIZZA_CODE_2022_${percentageReduction}`;
    }
}
console.log(`${PromotionCode.create(25)} for ${PromotionCode.allowed.join(", ")}`);

// enum

enum Direction {
    Up = 1,
    Down, //the others will have auto incremented values, so this will be 2, then 3 etc...
    Left,
    Right,
}

enum DirectionStartAtZero {
    Up, //if we leave it by default, it is the same but it start by 0
    Down,
    Left,
    Right,
  } 

  console.log(Direction.Up);
  console.log(Direction.Down);

  console.log(DirectionStartAtZero.Up);
  console.log(DirectionStartAtZero.Down);

  enum Direction2 {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
  }
  console.log(Direction2.Up);

//enum are real object at runtime, so it is possible todo:
enum E {
    X,
    Y,
    Z,
  }
   
  function f(obj: { Z: number }) { //also here because we inffer that there is at least Z in the enum, we can then use it
    return obj.Z;
  }
   
  // Works, since 'E' has a property named 'X' which is a number.
  console.log(f(E));

  //enum reverse mapping

  enum Enum {
    A,
  }
   
  let a = Enum.A;
  let nameOfA = Enum[a]; // "A"
  console.log(nameOfA);

  //alternative to enum:

  const DirectionAlternative = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
  };

  console.log(DirectionAlternative.Right);

/*
Conclusion:

- Prefer enum rather than Union for values, especially for many pizza types for example (to DRY)
- Prefer interface than type, because it's extendable
- Prefer interface than tuple, because it's more understandable
- Don't re-type a well typed function with the general 'Function' type,
    because we lose some types safety checks, create a new type instead (reusable)!
- Never use the type any, if there is many possibilities try to enumerate them with the Union operator |
- Be careful with optional parameters, and undefined values, that might be set to '0' and still return false
- See the section for 'interface with index signature', super interesting to make evolutive / super dynamic data structures
- Classes in typescript are pretty cool and not boring at all anymore!
- Visibility in class constructor can generate the attribute, cool for DRY
- REALLY Never use String or Number, always string or number in lowercase (I know, not like in Java)
- Instead of enums, see the alternative with const, it's tricky but remains more understandable once transformed to JS,
    with the same benefits (when/if enums are added to JavaScript then you can move to the new enum syntax)
*/
