// 1
const a = 7;
const b = 9;
const result1 = a * b;
console.log("🚀 ~ result1:", result1);
// 2

const c = 7;
const d = 9;
const out2 = document.querySelector(".out-2");
console.log("🚀 ~ out2:", out2);
out2.textContent = c / d;
// 3
const e = 3;
const f = 5;
const out3 = document.querySelector(".out-3");
console.log("🚀 ~ out3:", out3);
out3.textContent = e + f;
// 4
const el = "3";
const f1 = 5;
const out4 = document.querySelector(".out-4");
console.log("🚀 ~ out4:", out4);
// 5
const e2 = 3;
const f2 = 0;
const out5 = document.querySelector(".out-5");
console.log("🚀 ~ out5:", out5);
out5.textContent = e2 / f2;
// 6
const e3 = 3;
const f3 = "Hello";
const out6 = document.querySelector(".out-6");
console.log("🚀 ~ out6:", out6);
out6.textContent = e3 + f3;
// 7
const e4 = 3;
const f4 = "Hello";
const out7 = document.querySelector(".out-7");
console.log("🚀 ~ out7:", out7);
out7.textContent = e4 * f4;
// 8

const btn8 = document.querySelector(".b-8");
const input8 = document.querySelector(".i-8");
const out8 = document.querySelector(".out-8");
btn8.onclick = fn8;
function fn8() {
  const userInput = input8.value;
  out8.textContent = userInput;
  input8.value = "";
}
// 9
const btn9 = document.querySelector(".b-9");
const input9 = document.querySelector(".i-9");
const out9 = document.querySelector(".out-9");
btn9.onclick = t9;

function t9() {
  const userInput9 = input9.value;
  out9.textContent = userInput9;
  input9.value = "";
}
// 10
const btn10 = document.querySelector(".b-10");
const input10 = document.querySelector(".i-10");
const out10 = document.querySelector(".out-10");
btn10.onclick = t10;
function t10() {
  const userInput10 = input10.value;
  out10.textContent = userInput10 * 20;
}
// 11
const btn11 = document.querySelector(".b-11");
const input11 = document.querySelector(".i-11");
const out11 = document.querySelector(".out-11");
btn11.onclick = t11;
function t11() {
  userInput11 = input11.value;
  out11.textContent = userInput11 + 55;
}
// 12
