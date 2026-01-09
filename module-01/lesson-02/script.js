//1

const a = 7;
const b = 9;

console.log(`Завдання 1 ${a * b}`);

// 2

const c = 7;
const d = 9;

let out2 = (document.querySelector(".out-2").innerHTML = c / d);
// out2 = c / d;
console.log(`Завдання 2 ${out2}`);

// 3

const e = 3;
const f = 5;

let out3 = (document.querySelector(".out-3").innerHTML = e + f);
// out3 = e + f;
console.log(`Завдання 3 ${out3}`);

//4
const e1 = "3";
const f1 = 5;

let out4 = (document.querySelector(".out-4").innerHTML = e1 + f1);
// out4 = e1 + f1;

console.log(`Завдання 4 ${out4}`);

//5
const e2 = 3;
const f2 = 0;

let out5 = (document.querySelector(".out-5").innerHTML = e2 / f2);
// out5 = e2 / f2;

console.log(`Завдання 5 ${out5}`);

//6
const e3 = 3;
const f3 = "Hello";

let out6 = (document.querySelector(".out-6").innerHTML = e3 + f3);
// out6 = e3 + f3;

console.log(`Завдання 6 ${out6}`);

//7
const e4 = 3;
const f4 = "Hello";

let out7 = (document.querySelector(".out-7").innerHTML = e4 * f4);

console.log(`Завдання 7 ${out7}`);
//8

const input8 = document.querySelector(".i-8");
const button8 = document.querySelector(".b-8");
const out8 = document.querySelector(".out-8");

button8.onclick = fn8;

function fn8() {
  const value = input8.value;
  out8.textContent = value;
  console.log(`Завдання 8 ${out8}`);
}

//9

const input9 = document.querySelector(".i-9");
const button9 = document.querySelector(".b-9");
const out9 = document.querySelector(".out-9");

button9.onclick = fn9;

function fn9() {
  const value = input9.value;
  out9.textContent = value;
  input9.value = "";
  console.log(`Завдання 9 ${out9}`);
}

// 10
