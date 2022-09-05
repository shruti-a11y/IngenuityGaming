//  we are trying to understand tsc compliler
let fnam = prompt("Enter your name");
const para = document.getElementById('demo');
if(para && fnam){
    para.innerHTML = `My name is ${fnam}`;
}


function add1(a:number,b:number, ...rest:number[]){
    let sum:number=0+a+b;
    rest.forEach(element => {
        sum=sum+element;
    });
    return sum;
}

console.log(add1(10,10,10,10,10,10));