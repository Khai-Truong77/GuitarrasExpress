function initMap() {
  var location = { lat: 32.835647, lng: -83.743368 };
  var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 20,
      center: location
  });
  var marker = new google.maps.Marker({
      position: location,
      map: map
  });
}

// Call the initMap function after the DOM has fully loaded
document.addEventListener("DOMContentLoaded", function() {
  initMap();
});
