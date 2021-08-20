const skidBoxWeight = [
  700, 500, 620, 460, 230, 500, 450, 550, 830, 420, 340, 190, 3110,
];
let avg = averageArray(skidBoxWeight);
let sum = 0;

const bigBoxWeight = [
  650, 780, 840, 340, 150, 540, 360, 790, 620, 430, 480, 560,
];
for (let i = 0; i < skidBoxWeight.length; i++) {
  sum += skidBoxWeight[i];
}

function averageArray(ar) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let skidBoxWeight = ar.length;
  let sum = ar.reduce(reducer);

  console.log(sum / skidBoxWeight);
}

console.log(sum);

if (sum >= 10000) {
  console.log("Over weight limit");
} else if (sum >= 9000 && sum <= 10000) {
  console.log("Weight is Acceptable");
} else {
  console.log("Need more weight");
}
