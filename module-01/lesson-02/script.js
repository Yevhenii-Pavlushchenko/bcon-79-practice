//1

const a = 7;
const b = 9;
const result = a * b;
console.log("🚀 ~ result:", result)


//2
const out2 = document.querySelector(".out-2");
const c = 7;
const d = 9;
out2.textContent = c / d;
console.log("🚀 ~ out2:", out2)

//3
const e = 3; 
const f = 5; 
const out3 = document.querySelector(".out-3");
out3.textContent = e + f;
console.log(out3)

//4
const e1 = '3'; 
const f1 = 5;
const out4= document.querySelector(".out-4");
out4.textContent = e1 + f1;
console.log("🚀 ~ out4:", out4)

//5
const e2 = 3;
const f2 = 0;
const out5 = document.querySelector(".out-5");
console.log("🚀 ~ out5:", out5);
out5.textContent = e2 / f2;

//6
const e3 = 3;
const f3 = "Hello";
const out6 = document.querySelector(".out-6");
out6.textContent = e3 + f3;
console.log("🚀 ~ out6:", out6)

//7
const e4 = 3;
const f4 = "Hello";
const out7 = document.querySelector(".out-7");
out7.textContent = e4 * f4;
console.log("🚀 ~ out7:", out7)


//8
const btn8 = document.querySelector(".b-8");
const input8 = document.querySelector(".i-8");
const out8 = document.querySelector(".out-8");
console.log("🚀 ~ out8:", out8)

btn8.onclick = fn8;

function fn8() {
  console.log((out8.textContent = input8.value));
  out8.textContent = input8.value;
  input8.value = "";
}






це треба перевирішити 



//222222222222222222222222222222 HW 

//1
const a = 7;
const b = 9;
const result = a * b;
console.log("🚀 ~ result:", result);

//2
const c = 7;
const d = 9;
const out2 = document.querySelector(".out-2");
console.log("🚀 ~ out2:", out2);
out2.textContent = c / d;

//3
const e = 3;
const f = 5;
const out3 = document.querySelector(".out-3");
console.log("🚀 ~ out3:", out3);
out3.textContent = e + f;

//4
const e1 = 3;
const f1 = 5;
const out4 = document.querySelector(".out-4");
console.log("🚀 ~ out4:", out4);
out4.textContent = e1 + f1;

//5
const e2 = 3;
const f2 = 0;
const out5 = document.querySelector(".out-5");
console.log("🚀 ~ out5:", out5);
out5.textContent = e2 / f2;

//6
const e3 = 3;
const f3 = "Hello";
const out6 = document.querySelector(".out-6");
console.log("🚀 ~ out6:", out6);
out6.textContent = e3 + f3;

//7
const e4 = 3;
const f4 = "Hello";
const out7 = document.querySelector(".out-7");
console.log("🚀 ~ out7:", out7);
out7.textContent = e4 * f4;

//8
const btn8 = document.querySelector(".b-8");
const input8 = document.querySelector(".i-8");
const out8 = document.querySelector(".out-8");
console.log("🚀 ~ out8:", out8);

btn8.onclick = fn8;

function fn8() {
  console.log((out8.textContent = input8.value));
  out8.textContent = input8.value;
  input8.value = "";
}

//9
const btn9 = document.querySelector(".b-9");
const input9 = document.querySelector(".i-9");
const out9 = document.querySelector(".out-9");
console.log("🚀 ~ out9:", out9);

btn9.onclick = t9;

function t9() {
  out9.textContent = input9.value;
  input9.value = "";
}
//10

//17

function t17() {
  // 1. Отримуємо значення з інпуту
  let data = document.querySelector(".i-17").value;

  // 2. Перетворення різними способами
  let res1 = Number(data); // Суворе перетворення
  let res2 = parseInt(data); // Ціле число (ігнорує текст в кінці)
  let res3 = parseFloat(data); // Число з комою (ігнорує текст в кінці)

  // 3. Виведення результатів
  document.querySelector(".out-17-1").innerHTML = res1;
  document.querySelector(".out-17-2").innerHTML = res2;
  document.querySelector(".out-17-3").innerHTML = res3;
}

//18

document.querySelector(".b-18").onclick = t18;
const a1 = document.querySelector(".i-18");

function t18() {
  document.querySelector(".out-18").textContent = parseFloat(a1.value);
}
//19
document.querySelector(".b-19").onclick = t19;
const a2 = document.querySelector(".i-19-1");
const b2 = document.querySelector(".i-19-2");

function t19() {
  document.querySelector(".out-19").textContent = +a2.value + +b2.value;
}

//20
/* const btn20 = document.querySelector(".b-20").onclick = t20;


let i = 0;

function t20() {
  document.querySelector(".out-20").textContent = ++i;
}
 */

// 1. Створюємо змінну для підрахунку
let count = 0;

// 2. Знаходимо кнопку та блок для виводу
const btn20 = document.querySelector('.b-20');
const out20 = document.querySelector('.out-20');

// 3. Створюємо функцію
function f20() {
    // Збільшуємо лічильник
    count = count + 1; // або скорочено: count++;
    
    // Виводимо результат на сторінку
    out20.textContent = count;
}

// 4. Призначаємо подію 'click' на кнопку
btn20.onclick = f20;



