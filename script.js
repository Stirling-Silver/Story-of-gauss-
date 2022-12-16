// HTML Elements

let calcBtn = document.getElementById("calc-btn");
let sumOut = document.getElementById("sum-out");

//addEventListener
calcBtn.addEventListener("click", calcSum);

//Event Function
function calcSum() {
  //Sumintegers 1 to 100
  //   let total = 0;
  //   for (let n = 1; n <= 1000; n++) {
  //     total = total + n;
  //   }
  let total = (1000 * 1001) / 2;

  sumOut.innerHTML = total;
}
