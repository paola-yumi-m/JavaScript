// Foursquare API Info
const foursquareKey = 'fsq3t8GFEVmADuvLIq08g5QQevvRL50oZrPs7uUlkTHd5UQ=';
const url = 'https://api.foursquare.com/v3/places/search';
const queryParams = '?near='
const limit = 10;

// OpenWeather Info
const openWeatherKey = '6a559bfd349c0e1a01efe1920281a09d';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $placeDivs = [$("#place1"), $("#place2"), $("#place3"), $("#place4")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const options = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    Authorization: foursquareKey
  }
};

// Add AJAX functions here:
const getPlaces = async () => {
  const city = $input.val();
  const urlToFetch = `${url}${queryParams}${city}&limit=${limit}`
  try {
    const response = await fetch(urlToFetch, options)
    if (response.ok) {
      const jsonResponse = await response.json();
      const places = jsonResponse.results;
      return places;
    }
  }
  catch(error) {
    console.log(error);
  }
};

const getForecast = async () => {
  const q = $input.val();
  const urlToFetch = `${weatherUrl}?q=${q}&appid=${openWeatherKey}`
  try {
    const response = await fetch(urlToFetch)
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
  }
  catch(error) {
    console.log(error);
  }
};


// Randomizing chosen places
const shuffle = (limit, places) => { 
    const list = [];
    const shuffledPlaces = [];
    for (let i = 0; i < limit; i++) {
      list.push(i);
      }
    const shuffled = list.sort(() => Math.random() - 0.5);
    for (let j = 0; j < 4; j++) {
      shuffledPlaces.push(places[shuffled[j]]);
    }
    return shuffledPlaces;
  
}

// Render functions
const renderPlaces = (places) => {
  places = shuffle(limit, places);
  $placeDivs.forEach(($place, index) => {
    // Add your code here:
    const place = places[index];
    const placeIcon = place.categories[0].icon;
    const placeImgSrc = `${placeIcon.prefix}bg_64${placeIcon.suffix}`;
    const placeContent = createPlaceHTML(place.categories[0].name, place.location, placeImgSrc);
    $place.append(placeContent);
  });
  $destination.append(`<h2>${places[0].location.locality}</h2>`);
};

const renderForecast = (forecast) => {
  const weatherContent = 
createWeatherHTML(forecast);
  $weatherDiv.append(weatherContent);
}

const executeSearch = () => {
  $placeDivs.forEach(place => place.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");
  getPlaces().then(
    places => {
      return renderPlaces(places);
    }
  );
  getForecast().then(
    forecast => {
      return renderForecast(forecast);
    }
  );
  return false;
}

$submit.click(executeSearch);
