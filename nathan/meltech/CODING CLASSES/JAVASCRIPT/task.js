// // console.log("About my self ");
// // const name = "Nathan Moses";
// // const country = "Nigeria";
// // const language = "English";
// // const age = 25;
// // const work = "MEL-TECHNOLOGIIES";
// // const teacher = "Josh chris"


// // console.log( "My name is " + name + ' I am from ' + country + ' and I speak ' + language + 'and i am ' + age + ' years old'
// //     + ' and I work at ' + work + ' and my teacher is ' + teacher
// // );


// //  DATA TYPES IN JAVASCRIPT 
// // 1. String
// // 2. Number
// // 3. Boolean
// // 4. Null
// // 5. Undefined

// const firstname = "Nathan Moses"; // String
// const level = 10;
// const age  =  13; 
// const isNathan = true;
// const emptyValue = null;
// const bigNumber = 12345679;

// // new method
// console.log(`Hello, my name is ${firstname}. I'm in level ${level}`);
// // old method
// console.log('Hello, my name is ' +  firstname + ".Im in level " + level);

// console.log(
//     `${firstname.toUpperCase()} is a ${level >= 8 ?'Pro' : 'Beginner'}`
// );

// // Multi-line pro strings
// const message  =`
//    Hello ${firstname},
//    thank you for signing up.
//    Your Level is${level}.`;

//    console.log(message);
// //    compar ison opperators
// console.log(5 > 3);
// console.log( 8 < 4);
// console.log(5 <= 5);
// console.log(10 >= 11);
// console.log('--------------------');

// // == 
// console.log(5 == '5');
// console.log(0 ==false);
// console.log('' == false);
// console.log(null == undefined);
// console.log('--------------------');

// // ===





console.log("About my self");

const name = "Nathan Moses";
const age  = "13 years old"
const work = "Web-Developer";
const job = "Web Development";
const teacher = "Joshua";

console.log(`My name is ${name} I am 
${age} 
I am a ${work}`);


function sayHello(){
    console.log("Hello Nathan");
    console.log("About my self");

const name = "Nathan Moses";
const age  = "13 years old"
const work = "Web-Developer";
const job = "Web Development";
const teacher = "Joshua";

console.log(`My name is ${name} I am 
${age} 
I am a ${work}`);
}

sayHello();

function saySignin() {
    console.log(`Stayed Signed-in`);
    
}

function greet(name){
    console.log(`Hello ${name}`);
}

greet("Nathan");
greet("Joshua");
greet("David");



function signin(name) {
    console.log(`Stay signed in ${name}`);
    
}
signin("Nathan");
signin("Joshua");
signin("David");

function aboutme() {
    const mame =`My name is nathan,`;
    const age = ` and I am 13 years`;
    console.log(`${name} ${
        age
    }`);
    
}
aboutme()


function favoriteGame(game) {
    console.log(`My favorite game is ${game}`);
}
favoriteGame("Roblox");
favoriteGame("Fifa");
favoriteGame("Minecraft");

console.log(`My favorite foods are:`);

function favoriteFood(name, food) {

    console.log(`${name}'s favorite food is ${food}`);

}

favoriteFood('Melvin', 'Rice and stew');
favoriteFood('Nathan', 'Beans');
favoriteFood('Moses', 'Instant noodles');

function checkFood(food) {

    if (food === 'Beans') {
        console.log('Beans is healthy');
    } else {
        console.log(food);
    }

}

checkFood('Beans');
checkFood('Pizza');

function checkNumber(number) {
    if (number === 3+3){
        console.log(`6 is the correct answer`);
    }
    else{
        console.log(number);
        
    }
}
checkNumber('6 is right');
checkNumber('other numbers areundefined');


function checkNumber(number) {

    if (number === 3 + 3) {
        console.log(`6 is the correct answer`);
    }
    else {
        console.log(number);
    }

}

checkNumber(6);
checkNumber(10);


const foods = ['Rice', 'Beans', 'Pizza', 'Noodles'];

console.log(foods);

console.log(foods[0]);
console.log(foods[1]);
console.log(foods[2]);