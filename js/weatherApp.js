var forcastUrl = "https://api.forecast.io/forecast/3caaa780f76b8d8155d2f1045210a5fd/";

var currDate;
var icon;
var currState = "F";
var currWeather;
var skycon = new Skycons({
  "color": "black"
});

var getnDisplay = function(data) {
  var monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var dayArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  currWeather = data.currently;
  currDate = new Date(currWeather.time * 1000);
  var year = currDate.getFullYear();
  var month = monthArr[currDate.getMonth()];
  var date = currDate.getDate();
  var day = dayArr[currDate.getDay()];
  var hour = "0" + currDate.getHours();
  var min = "0" + currDate.getMinutes();
  var sec = "0" + currDate.getSeconds();
  // get currDate from API and show it
  $("#date>p").text(day + " " + date + " " + month + " " + year + ", " + "last observed at " + hour.substr(-2) + ":" + min.substr(-2));
  // get a summary of the current weather
  $("#summary").text(currWeather.summary)
    // get and display the weather icon and show it
  skycon.set("icon", currWeather.icon);
  console.log(currWeather.icon);
  var bgimage = "background-image: url(http://weiwei-zhang.me/img/weather/" + currWeather.icon +".png);";
  $("body").attr("style",bgimage);
  skycon.play();
  // get and display the temperature
  $("#temp").text(currWeather.temperature);
  // get and display the wind speed
  $("#wind").html("<p> <strong> Windspeed </strong>: " + currWeather.windSpeed + " miles/hour</p>");
   $("#humidity").html("<p> <strong>Humidity</strong>: " + currWeather.humidity*100 + "%</p>");
   $("#visibility").html("<p> <strong>Visibility</strong>: " + currWeather.visibility + " miles </p>");
  $("#pressure").html("<p> <strong>Pressure</strong>: " + currWeather.pressure + " mb </p>");
}

var refresh = function() {
  console.log("in refresh function");
  // call forcast API to get and display weather condition
//  $.getJSON(forcastUrl, getnDisplay);
  $.ajax({

    url: forcastUrl,
    type:"GET",
    dataType: "json",
    success: getnDisplay,
    beforeSend: setHeader
  });
  $.getJSON("http://ipinfo.io", function(location) {
    $("#location>h1").text("Weather of " + location.city + "," + location.region + "," + location.country);
  });

}

var setHeader = function(xhr){

  xhr.setRequestHeader("Access-Control-Allow-Origin","http://weiwei-zhang.me");
}

$(document).ready(function() {
    $("#fah").attr("style", "color:black;");
  //get geolocation using html5
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      forcastUrl += position.coords.latitude;
      forcastUrl += ",";
      forcastUrl += position.coords.longitude;

      console.log(forcastUrl);
      // call forcast API to get and display weather condition
     //$.getJSON(forcastUrl, getnDisplay);
     $.ajax({

        type:"GET",
        url: forcastUrl,
        dataType: "json",
        success: getnDisplay,
        beforeSend: setHeader
      });
      // call ipinfo API to get the city, region and country of the current location
      $.getJSON("http://ipinfo.io", function(location) {
        $("#location>h1").text("Weather of " + location.city + "," + location.region + "," + location.country);

        var intervalId = setInterval(refresh, 60000);
      });
    });
  } else {
    alert("Unable to get your current location !");
    return;
  }

});

// switch celsius to fah
$("#celsius").click(function() {
  if (currState === "F") {
    var tempF = Number($("#temp").text());
    var tempC = (tempF - 32) / 1.8;
    tempC = tempC.toFixed(2);
    $("#temp").text(tempC);
    currState = "C";
  }
  $("#celsius").attr("style", "color:black;");
  $("#fah").attr("style", "color:white;");
});

// switch fah to celsius
$("#fah").click(function() {
  if (currState === "C") {
    var tempC = Number($("#temp").text());
    var tempF = tempC * 1.8 + 32;
    tempF = tempF.toFixed(2);

    $("#temp").text(tempF);
    currState = "F";
  }

  $("#fah").attr("style", "color:black;");
  $("#celsius").attr("style", "color:white;");

});
