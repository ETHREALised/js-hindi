//-------------Stack---------------------

let myYoutubeName = "user1@gmail.com"
let userOne = myYoutubeName

userOne = "suryansh@google.com"

console.log(userOne);
console.log(myYoutubeName);


//-----------------Heap-------------------

let UserOne = {
    name:"Suryansh",
    age:19
}

let UserTwo = UserOne

UserTwo.name = "Tannu"

console.log(UserOne.name);

// Here UserOne.name also changed...

