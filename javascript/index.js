function updateTime() {
  let thessalonikiElement = document.querySelector("#thessaloniki");
  if (thessalonikiElement) {
    let thessalonikiDateElement = thessalonikiElement.querySelector(".date");
    let thessalonikiTimeElement = thessalonikiElement.querySelector(".time");
    let thessalonikiTime = moment().tz("Europe/Athens");

    thessalonikiDateElement.innerHTML = thessalonikiTime.format("MMMM Do YYYY");
    thessalonikiTimeElement.innerHTML = thessalonikiTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let lisbonElement = document.querySelector("#lisbon");
  if (lisbonElement) {
    let lisbonDateElement = lisbonElement.querySelector(".date");
    let lisbonTimeElement = lisbonElement.querySelector(".time");
    let lisbonTime = moment().tz("Europe/Lisbon");

    lisbonDateElement.innerHTML = lisbonTime.format("MMMM Do YYYY");
    lisbonTimeElement.innerHTML = lisbonTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let saugatuckElement = document.querySelector("#saugatuck");
  if (saugatuckElement) {
    let saugatuckDateElement = saugatuckElement.querySelector(".date");
    let saugatuckTimeElement = saugatuckElement.querySelector(".time");
    let saugatuckTime = moment().tz("America/New_York");

    saugatuckDateElement.innerHTML = saugatuckTime.format("MMMM Do YYYY");
    saugatuckTimeElement.innerHTML = saugatuckTime.format(
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
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
