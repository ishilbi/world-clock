function updateTime() {
  let roanokeElement = document.querySelector("#roanoke");
  let roanokeDateElement = roanokeElement.querySelector(".date");
  let roanokeTimeElement = roanokeElement.querySelector(".time");
  let roanokeTime = moment().tz("America/New_York");
  roanokeDateElement.innerHTML = roanokeTime.format("MMMM Do YYYY");
  roanokeTimeElement.innerHTML = roanokeTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
  let seoulElement = document.querySelector("#seoul");
  let seoulDateElement = seoulElement.querySelector(".date");
  let seoulTimeElement = seoulElement.querySelector(".time");
  let seoulTime = moment().tz("Asia/Seoul");

  seoulDateElement.innerHTML = seoulTime.format("MMMM Do YYYY");
  seoulTimeElement.innerHTML = seoulTime.format("h:mm:ss [<small>]A[</small>]");
}
updateTime;
setInterval(updateTime, 1000);
//Roanoke
