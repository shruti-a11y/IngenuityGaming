
const API_URL = "https://jsonplaceholder.typicode.com/users";
async function getApiData(url) {
    console.log("we are good to call api");
    // using then and catch method

    // var r = fetch(url);
    // console.log(r);.
    // fetch(url)
    // .then((val)=>{
    //     return val.json();
    // }).then((res)=>{
    //     displayData(res);
    // })
    // .catch((err)=>{
    //     console.log("Error");
    // })

    // alternate of then catch
    console.log("with async and await");
    var data = await fetch(url);
    var res =  await data.json();
    console.log(res);
    displayData(res);
}
getApiData(API_URL)

function displayData(serverData) {
    
    // console.log("type of servedata : "+ typeof(serverData));
    for(var user of serverData){
        // if (user.name == "Leanne Graham") {
        //     let newtr = document.createElement('tr');
    
        //     let newtd1 = document.createElement('td');
        //     let newtd2 = document.createElement('td');
        //     let newtd3 = document.createElement('td');
        //     let newtd4 = document.createElement('td');
    
        //     // or  newtd1.innerText = ""+ user.id;
        //     newtd1.innerText = `${user.id}`;
        //     newtd2.innerText = `${user.name}`;
        //     newtd3.innerText = `${user.email}`;
        //     newtd4.innerText = `${user.phone}`;
    
        //     newtr.appendChild(newtd1);
        //     newtr.appendChild(newtd2);
        //     newtr.appendChild(newtd3);
        //     newtr.appendChild(newtd4);
    
        //     document.getElementById("myTable").appendChild(newtr);  
        // } else {
        //     console.log("some error");
        // }
    
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
