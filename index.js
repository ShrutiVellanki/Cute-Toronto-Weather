$(document).ready(function() {
  //This section gets the Json from the Toronto Weather API
  $.getJSON("https://api.openweathermap.org/data/2.5/weather?&q=toronto&APPID=eee7fb5eaa989c06f93e82e5e1b6fa59&unit=metric", function(json) {
    //the look according to temperature
    document.getElementById("temp").innerHTML = parseJsonTemp(json) + " °C";
    if (parseJsonTemp(json) > 10 && parseJsonTemp(json) < 27) {
      document.getElementById("weather-description").innerHTML = "Perfectly         Pleasant";
      document.getElementById("body").style.backgroundColor = "#c1f0c1";
      document.getElementById("social-media-button1").style.backgroundColor = "#33cc33";
      document.getElementById("social-media-button2").style.backgroundColor = "#33cc33";
      document.getElementById("social-media-button3").style.backgroundColor = "#33cc33";
      document.getElementById("C").style.backgroundColor = "#33cc33";
      document.getElementById("icon").src = "http://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Cartoons-PNG/Bunny_PNG_Cartoon_Free_Clipart.png?m=1371420000";
    } else if (parseJsonTemp(json) >= 27) {
      document.getElementById("weather-description").innerHTML = "Heating up!";
      document.getElementById("body").style.backgroundColor = "#ff9999";
      document.getElementById("social-media-button1").style.backgroundColor = "#e60000";
      document.getElementById("social-media-button2").style.backgroundColor = "#e60000";
      document.getElementById("social-media-button3").style.backgroundColor = "#e60000";
      document.getElementById("C").style.backgroundColor = "#e60000";
      document.getElementById("icon").src = "http://genderselectiondiet.com/wp-content/uploads/red-pepper.png";
    } else {
      document.getElementById("weather-description").innerHTML = "It's chilly!";
      document.getElementById("body").style.backgroundColor = "#b3ecff";
      document.getElementById("social-media-button1").style.backgroundColor = "#00ace6";
      document.getElementById("social-media-button2").style.backgroundColor = "#00ace6";
      document.getElementById("social-media-button3").style.backgroundColor = "#00ace6";
      document.getElementById("C").style.backgroundColor = "#00ace6";
      document.getElementById("icon").src = "https://img.clipartfest.com/b9e5f95f7c9a6325fd49aaf334b4d3bb_animated-snowman-clipart-tiny-clipart-snowman-gif_2000-2282.gif";
    }
    document.getElementById("mainWeather").innerHTML = parseJsonWeather(json);
    $("#F").click(toFarenheit);
    $("#C").click(toCelcius);

    function toFarenheit() {
      document.getElementById("temp").innerHTML = Math.round(((parseJsonTemp(json) * 1.8 + 32)*100)/100) + " °F";
    }

    function toCelcius() {
      document.getElementById("temp").innerHTML = parseJsonTemp(json) + " °C";
    }
  });
  //this function returns the current temperature in degrees Celcius
  function parseJsonTemp(object) {
    var temp = object['main']['temp'];
    return Math.round((temp - 273.15) * 100) / 100;
  }
  //This function returns the current weather descriptions in list form
  function parseJsonWeather(object) {
    var html = "<li>";
    object["weather"].forEach(function(key) {
      html += key.description;
    });
    return html += "</li>";
  }

});
