var icon = document.getElementById("icon");
var line = document.querySelector(".line");
      
      setInterval(() => {
        let online = navigator.onLine;
        if (online == true) {
          icon.style.backgroundColor=" rgb(22, 180, 22)";
          line.style.backgroundColor="rgb(22, 180, 22)"
          document.getElementById("active").innerHTML =
            "Yay! Everything worked! ";
            setTimeout(() => {
              document.getElementById("toastMessageBox").style.display="none";
            }, 8000);

        } else {
          icon.style.backgroundColor=" red";
          line.style.backgroundColor=" red";
          icon.innerHTML='  <i class="fa-solid fa-exclamation"></i>'
          document.getElementById("active").innerHTML =
            "Oh srroy, something went wrong ";
              document.getElementById("toastMessageBox").style.display="flex";
              document.getElementById("myBtn").disabled = true;
        }
      }, 500);


      function hideAlert() {
        document.getElementById("toastMessageBox").style.display="none";
      }
      