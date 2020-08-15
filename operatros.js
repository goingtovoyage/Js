//1.string concatenation +기호 이용해서 문자열과 문자열 합해서 새로운 문자열 만듦.

console.log('my' + 'cast');
console.log('1' + 2); //문자열에 숫자를 더하면 숫자가 문자열로 변해서 합쳐질 수 있고
console.log(`string literals: 1 + 2 = ${1 + 2}`);
//`이용해서 string leterals를 만들 수 있는데 달러 사인이용하면 변수 값을 계산해서
//스트링으로 포함해서 문자열을 만들게 됨.

//string literals의 좋은점 줄바꿈을 하거나 중간에 특수기호인 싱클쿼트를 이용해도
//그대로 문자열로 변환 돼어 나오게 됨.

console.log("ellie's book");
//싱글쿼트로 스트링 만들 때 중간에 특수기호 ' 같은 게 들어가면 인식이
//되지 않는데 그럴 때는 \백슬러쉬를 이용해야 제대로 표시
console.log("ellie's \nbook");
//새로 줄바꿈 할때는 \n
console.log("ellie's \n\tbook");
//\t는 탭 키

//2.numeric operators
console.log(1 + 1); //add
console.log(1 - 1); // substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder 나누고 나머지 값
console.log(2 ** 3); //exponentiation 2의 3승

//3.Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
//counter = counter +1 ;
//preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter : ${counter}`);
const postIncrement = counter++;
//postincrement = counter ;
//counter = counter + 1;
console.log(`postIncrement ${postIncrement}, counter : ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement ${preDecrement}, counter : ${counter}`);

const postDecrement = counter--;

console.log(`postDecrement ${postDecrement}, counter : ${counter}`);

//4.Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

//5. Comparison operators
console.log(10 < 6); //less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); //greater than or equal

//6. Logical operators :  (or), && ( and), ! (not)
const value1 = false;
const value2 = 4 < 2;

//or
//|| (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);
//ofen used to compress long if-statement
//nullableObject && nullableObject.something
//if (nullableObject != null) {
// nullableObjectsomething;
//}

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log('f');
  }
  return true;
}

//! not
console.log(!value1);

//7.Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

//strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//object equailty by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

//equality - puzzler
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

//8. Conditional operators: if
//if, else if, else

const name = 'df';
if (name === 'ellie') {
  console.log('Welcome, Ellie!');
} else if (name === 'coder') {
  console.log('you are amazing coder');
} else {
  console.log('unknown');
}
//9.termary operator ?
//condition? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');

//10.switch statement
//use for multiple if checks
//use for enum-like value check
//use for multiple type checks in TS
const browser = 'IE';

switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'Fire fox':
    console.log('love you!');
    break;

  default:
    console.log('same all!');
    break;
}

//11.Loops
//while loop, while the condition is  truthy,
//body code is excuted.

let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}
//do while loop, body code is excuted first,
//then check the condition.
do {
  console.log(`do while ${i}`);
  i--;
} while (i > 0);

//for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  //inline variable declaration
  console.log(`inline variable for: ${i}`);
}

//nested loops O(n*2)이라고 하는 것 cpu에 좋지 않음.
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}

//break, continue
//Q1. iterate from 0 to 10 and print only even numbers(use contiune)
for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(`qi. ${i}`);
}

//better answer
for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    console.log(`qi. ${i}`);
  }
}

//Q2. iterate from 0 to 10 and print numbers until reaching 8( use break)
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2. ${i}`);
}
