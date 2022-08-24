// es6 promise
// 1. its a way of communication with apis
// 2. its an object that return a value that hope to recieve in future but not right now 
// 3. promise is well suited for handling asynchronous operation
// 4. promise has 3 state - pending , fullfilled, rejected

// function sayHI() {
//     return new Promise((resolve,reject)=>{
//         console.log("lets check ...");
//         setTimeout(() => {
//             const err = true;
//             if(!err){ //api call
//                 resolve("problem solved");
//             }
//             else{
//                 reject("problem rejected");
//             }
            
//         }, 3000);
//     });
// }

// console.log(sayHI());

// consume the promise

// sayHI()
// .then((val)=>console.log(val))
// .catch((err)=>console.log(err));


// using api

// 1. xhr
// 2.fetch()
// 3.third party packages(Axios)

const API_URL = "https://jsonplaceholder.typicode.com/users";
function getApiData(url) {
    console.log("we are good to call api");
    return new Promise((resolve,reject)=>{
        // create an instance of xhr
        var request = new XMLHttpRequest();
        request.open("GET",url);
        request.send();
        request.onload = ()=>{
            console.log(request);
            if(request.status ===200){
                resolve(request.response);
            }
            else{
                reject("Not able to fetch")
            }
        }
    });
}
getApiData(API_URL)
.then((value)=>{
    console.log(JSON.parse(value));
    displayData(JSON.parse(value));
})
.catch((err)=>{
    console.log("Error")
});

function displayData(serverData) {
    for(var user of serverData){
        let newtr = document.createElement('tr');

        let newtd1 = document.createElement('td');
        let newtd2 = document.createElement('td');
        let newtd3 = document.createElement('td');
        let newtd4 = document.createElement('td');

        // or  newtd1.innerText = ""+ user.id;
        newtd1.innerText = `${user.id}`;
        newtd2.innerText = `${user.name}`;
        newtd3.innerText = `${user.email}`;
        newtd4.innerText = `${user.phone}`;

        newtr.appendChild(newtd1);
        newtr.appendChild(newtd2);
        newtr.appendChild(newtd3);
        newtr.appendChild(newtd4);

        document.getElementById("myTable").appendChild(newtr);
    }
}
