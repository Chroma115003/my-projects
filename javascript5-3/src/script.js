let count = 0;
const plusOne = ()=>{
  count = count + 1;
document.querySelector(".count").textContent = count;
}
const minusOne =()=>{
 count = count - 1;
 document.querySelector(".count").textContent = count;
}
const calculate =()=>{
 let num1 = Number(document.querySelector(".num1").value);
 let num2 = Number(document.querySelector(".num2").value); 
 alert(`相加結果是${num1 + num2}`); 
 alert(`相減結果是${num1 - num2}`);
 alert(`相乘結果是${num1 * num2}`);
 alert(`相除結果是${num1 / num2}`) 
}



document.querySelector(".plus").addEventListener("click",plusOne);
document.querySelector(".minus").addEventListener("click",minusOne);
document.querySelector(".calculate").addEventListener("click",calculate);