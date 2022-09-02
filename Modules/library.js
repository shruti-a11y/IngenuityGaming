export let message = "This is modules Concepts";

export default function(){
    console.log("This is my deafault function");
}

export let display = (name)=>{
    return `${name} Welcome to Ingenuity Gaming!`;
};

export class Employee{
    constructor(name,id,designation){
        this.name = name;
        this.id = id;
        this.designation = designation;
    }
    dispDetails(){
        console.log(`Employee Name : ${this.name}\n
        Employees Id : ${this.id}\n);
        Employees designation : ${this.designation}\n`);
    }
}

// export{
//     message,display,Employee
// }