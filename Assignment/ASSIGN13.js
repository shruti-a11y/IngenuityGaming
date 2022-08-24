const API_URL = "https://api.covid19api.com/summary";
async function getApiData(url) {
    console.log("we are good to call api");
    console.log("with async and await");
    var data = await fetch(url);
    var res =  await data.json();
    console.log(res);
    // console.log(res.Countries[1].Country);
    // console.log(res.Countries[1].Date);
    // console.log(res.Countries[1].TotalConfirmed);
    displayData(res);
}
getApiData(API_URL);

function displayData(serverData) {
    // for (let i = 1; i < 10; i++) {
    //     console.log(serverData.Countries[i].Country);
        
    // }
    // let newdiv = document.createElement("div");
    // let newspan1 = document.createElement('span');
    document.getElementById("cName").innerHTML = " "+ serverData.Countries[5].Country;
    document.getElementById("cDate").innerHTML = " "+ serverData.Countries[51].Date;
    document.getElementById("cConfirm").innerHTML = " "+ serverData.Countries[51].Country;
    document.getElementById("cTotalComfirm").innerHTML = " "+ serverData.Countries[5].TotalConfirmed;
    document.getElementById("cTotalDeath").innerHTML = " "+ serverData.Countries[51].TotalDeaths;
    document.getElementById("cTotalRecovery").innerHTML = " "+ serverData.Countries[51].TotalRecovered;
 
    
}