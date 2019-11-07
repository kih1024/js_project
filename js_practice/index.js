
/*function sayHello(name, age) {
    console.log(`hello ${name} you are ${age} years old`);
}
let haha = 1;
sayHello(`kim ${haha}`, 14);

const arr = [`sdad`, 23];
const calculate = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    mul: function (a, b) {
        return a * b;
    },
    div: function (a, b) {
        return a / b;
    },
    power: function (a, b) {
        return a ** b;
    }
}
let power2 = calculate.power(4, 2);
console.log(calculate.plus(4, 6));
console.log(`1 : ${calculate.minus(5, 5)}`);
console.log(`2 :  ${power2}`);*/
let title = document.getElementById("title");
title = document.querySelector("#title");//해당 선택자의 첫번째 객체를 반환.
//console.log(title);
//console.log(document);

//const haha = "asd";
//console.dir(title);// dom 객체의 멤버들을 볼수 있다.
//title.style.color = "gold";
//title.innerHTML = "Hi From JS";
// document.title = "my page";

// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR = "#7f8c8d";
// function handleClick(event) {
//     const currentColor = title.style.color;
//     if (currentColor === BASE_COLOR) {
//         title.style.color = OTHER_COLOR;
//     } else {
//         title.style.color = BASE_COLOR;
//         console.log("haha");
//     }
//     //console.log(event)
// }
const CLICKED_CLASS = "clicked";
function handleClick() {
    title.classList.toggle(CLICKED_CLASS);
    /*const hasClass= title.classList.contains(CLICKED_CLASS);

    if (hasClass) {
        title.classList.remove(CLICKED_CLASS);
    }
    else {
        title.classList.add(CLICKED_CLASS);
    }*/
}
function init() {
    //title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick)
}
init();

