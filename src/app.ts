// Next Gen TS and JS
const userNames = "Maximillian"
let age = 30;

age = 29;

function addi(a: number, b: number = 1){
    let result;
    result = a + b;
    return result;
}

if (age > 20){
    let isOld = true
}

const addin = (a:number, b:number)=> {
    return a + b
}

const printOutput: (a: number | string) => void = output => console.log(output);

const button = document.querySelector('button')

if (button) {
    button.addEventListener('clicl', event => console.log(event));
}

printOutput(add(5, 2));

// console.log(isOld);
