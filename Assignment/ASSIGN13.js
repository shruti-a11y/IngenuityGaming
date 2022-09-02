var select = document.getElementById("cName");

const API_URL = "https://api.covid19api.com/summary";
async function getApiData(url) {
  console.log("we are good to call api");
  console.log("with async and await");
  var data = await fetch(url);
  var res = await data.json();
  console.log(res);
  // countryName(res);
  // console.log(res.Countries[1].Date);
  // console.log(res.Countries[1].TotalConfirmed);
  displayData(res);
}
getApiData(API_URL);

function displayData(serverData) {
  for (let i = 1; i < 190; i++) {
      console.log(serverData.Countries[i].Country);
    var opt = document.createElement("option");
    opt.value = i;
    opt.innerHTML = serverData.Countries[i].Country;
    select.appendChild(opt);
  }
  function onChanges() {
    var value = select.value;
    var today = new Date(serverData.Countries[value].Date);
    var date1 =
      today.getDate() +
      "/" +
      (today.getMonth() + 1) +
      "/" +
      today.getFullYear();
    // document.getElementById("cDate").innerHTML =
    //   " " + serverData.Countries[value].Date;
    document.getElementById("cDate").innerHTML = " " + date1;
    document.getElementById("cConfirm").innerHTML =
      " " + serverData.Countries[value].NewConfirmed;
    document.getElementById("cTotalComfirm").innerHTML =
      " " + serverData.Countries[value].TotalConfirmed;
    document.getElementById("cTotalDeath").innerHTML =
      " " + serverData.Countries[value].TotalDeaths;
    document.getElementById("cTotalRecovery").innerHTML =
      " " + serverData.Countries[value].TotalRecovered;
  }
  select.onchange = onChanges;
  onChanges();

  //   document.getElementById("cName").innerHTML =
  //     " " + serverData.Countries[5].Country;
}

// function countryName(data){
//     for (let i = 1; i < data.length; i++) {
//         console.log(data.Countries[i].Country);
//     }
// }
