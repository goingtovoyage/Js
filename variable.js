//1.Use strict
//added in ES 5
//Use this for vanilla Javascript
`use strict`;

//2. variable, rw(read and write)
//let (added in ES6)
let globalName = 'global Name';
{
  let name = 'ellie';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);
}

console.log(name);
console.log(globalName);

//Constant,  r(read only)
//use const whenever possbile.
//only use let if variable needs to change.
//favor immutable  data type always for a few reasons:
//-security
//-thrread safety
//-reduce human mistakes
const daysInweek = 7;
const maxNumber = 5;

//Note!
//Immutable data types : premitive types, frozen objects.(i.e. object freeze())
//Mutable data types : all objects by default are mutable in js
//favor immutable data type alwasys for a few reasons:
//--security
//-- theread safety
//-reduce human mistakes

//4.Variable types
//primitive, single item: number, string, boolean, null, undefiedn, symbol
//object, box container
//function, first-class function
//primitive 타입 value 값 자체가 메모리에 저장
//object 너무 커서 메모리에 한 번에 다 올라갈 수 없음
//그래서 const ellie 라고 선언하고 obejct를 할당하게 되면
//ellie가 가리키고 있는 곳에는 reference가 있음
//이 reference는 실제로 obejct를 가리키고 있는 곳 그래서
//reference를 통해서 실제로 object가 담겨있는 memory를 가리키게 됨.
const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//Number special numeric values: infinity, -infinity, NaN
const infinitiy = 1 / 0;
const negativeinifinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinitiy);
console.log(negativeinifinity);
console.log(nAn);

//Big int
//자바에서는(-2*53)~~2*53승까지만 표현 가능하나
//숫자 뒤에 N 붙이면 그 이상도 가능

const bigInt = 2222222222222222222222222222222222224141242414141n;
console.log(`value: ${bigInt}, type : ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

//STRING
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value ${greeting}, type: ${typeof greeting}`);
const hellobob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${hellobob}, type: ${typeof hellobob}`);
//==위에 거랑 같음
console.log('value : ' + hellobob + ' type : ' + typeof hellobob);

//boolean
//false: 0, null, undefined, NaN, ''
//TRUE: 1, ANY OTEHR VALUE
const canRead = true;
const test = 3 < 1; //false
console.log(`value : ${canRead}, type : ${typeof canRead}`);
console.log(`value : ${test}, type : ${typeof test}`);

//null
let nothing = null;
console.log(`value : ${nothing}, type : ${typeof nothing}`);

//undefined
let x = undefined;
// let x 도 undefined 값이 할당되지 않아도
console.log(`value : ${undefined}, type : ${typeof undefined}`);

//symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const Gsymbol1 = Symbol.for('id');
const Gsymbol2 = Symbol.for('id');
console.log(Gsymbol1 === Gsymbol2);
console.log(`value : ${symbol1.description}, type: ${typeof symbol1}`);
