const colorArr = ["red", "blue", "green", "yellow", "purple", "black", "white"];
const outlookArr = ["bad", "neutral", "good", "great", "unclear"];

function getRandom(max){
    return Math.floor(Math.random() * max);
}

function generateLuckyNums(howMany){
    let numArr = [];
    for (let x = howMany; x > 0; x--){
        numArr.push(getRandom(100));
    }
    return numArr.join(" ");
}

let luckyNums = generateLuckyNums(5);
let luckyColor = colorArr[getRandom(colorArr.length)];
let outlook = outlookArr[getRandom(outlookArr.length)];

console.log(`Your lucky numbers are: ${luckyNums} \n
Your lucky color is: ${luckyColor} \n
Your outlook is: ${outlook}`);


