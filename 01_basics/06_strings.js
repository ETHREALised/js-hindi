const stringOne = "Suryansh-Kumar"

//--------substring only supports positive values--------------

// console.log(stringOne.substring(0,4))
// console.log(stringOne.substring(3,-4))
// console.log(stringOne.substring(-1,4))

//---------slice also supports negative values-----------------
//    -----we can also use slice for array slicing------
console.log(stringOne.slice(-8,10))

//-------------------trim--------------------------------------
let newStringOne = "     Amit Smait Praveen     "
console.log(newStringOne);
console.log(newStringOne.trim());

console.log(`Hello my name is ${stringOne} `);

// we use `` backtick instead of "" for tempelate literals ${...}
