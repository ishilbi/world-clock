function updateTime() {
  let roanokeElement = document.querySelector("#roanoke");
  if (roanokeElement) {
    let roanokeDateElement = roanokeElement.querySelector(".date");
    let roanokeTimeElement = roanokeElement.querySelector(".time");
    let roanokeTime = moment().tz("America/New_York");
    roanokeDateElement.innerHTML = roanokeTime.format("MMMM Do YYYY");
    roanokeTimeElement.innerHTML = roanokeTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let seoulElement = document.querySelector("#seoul");
  if (seoulElement) {
    let seoulDateElement = seoulElement.querySelector(".date");
    let seoulTimeElement = seoulElement.querySelector(".time");
    let seoulTime = moment().tz("Asia/Seoul");

    seoulDateElement.innerHTML = seoulTime.format("MMMM Do YYYY");
    seoulTimeElement.innerHTML = seoulTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let amsterdamElement = document.querySelector("#amsterdam");
  if (seoulElement) {
    let amsterdamDateElement = amsterdamElement.querySelector(".date");
    let amsterdamTimeElement = amsterdamElement.querySelector(".time");
    let amsterdamTime = moment().tz("Europe/Amsterdam");

    amsterdamDateElement.innerHTML = amsterdamTime.format("MMMM Do YYYY");
    amsterdamTimeElement.innerHTML = amsterdamTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let guayaquilElement = document.querySelector("#guayaquil");
  if (guayaquilElement) {
    let guayaquilDateElement = guayaquilElement.querySelector(".date");
    let guayaquilTimeElement = guayaquilElement.querySelector(".time");
    let guayaquilTime = moment().tz("Europe/Amsterdam");

    guayaquilDateElement.innerHTML = guayaquilTime.format("MMMM Do YYYY");
    guayaquilTimeElement.innerHTML = guayaquilTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div>
            <div class="time">${cityTime.format(
              "h:mm:ss"
            )}<small>${cityTime.format("A")} </small></div>
          </div>
        </div>
        <a href="index.html"> Back to cities<a/>
  `;
}
updateTime;
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
