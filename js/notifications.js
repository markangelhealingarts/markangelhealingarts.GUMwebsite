
if(localStorage.getItem("logged")) {
  getTime();
}

function getAlert() {
  alert("Here is your hourly reminder to Get Up and Move!");
  getTime();
}    
function getTime() {
  let current = new Date();
  let hour = current.getHours();
  let minute = current.getMinutes();
  let second = current.getSeconds();

  // console.log(current);

  if ((minute == '00') && (second == '00')) {
      if (hour == 9 || hour == 10 || hour == 11 || 
      hour == 14 || hour == 15 || hour == 16) {
          getAlert();
      }
  // } else {
  //     setTimeout(getAlert,(60*(60-minute)+(60-second))*1000);
  }

  // if ((second == '00')) {
  //     getAlert();
  // } else {
  //     setTimeout(getAlert,(60*(60-minute)+(60-second))*1000);
  // }
}

myInterval = setInterval(getTime, 1000); //displays msg in 1 seconds