function initMap() {
  var locations = [
      {
          position: { lat: 32.898530, lng: -83.687500 }, // 157 Tom Hill Sr Blvd
          details: `
              <div style="color: black;">
                  <h3>Guitarras Mexican Grill</h3>
                  <p>Address: 157 Tom Hill Sr Blvd #205, Macon, GA 31210</p>
                  <a href="https://maps.google.com/maps?ll=32.898693,-83.6875&z=20&t=m&hl=en-US&gl=US&mapclient=apiv3&cid=14909657922175887072" style="color: #1a73e8;">View on Google Maps</a>
                  <p class="mt-3">Phone: <a href="tel:+14782548222" style="color: blue;">(478) 254-8222</a></p>
              </div>
          `
      },
      {
          position: { lat: 32.835647, lng: -83.743368 }, // 123 Example St
          details: `
              <div style="color: black;">
                  <h3>Guitarras Mexican Express</h3>
                  <p>Address: 5577 Thomaston Rd Suite #500, Macon, GA 31220</p>
                  <a href="https://maps.google.com/maps?ll=32.834673,-83.63821&z=20&t=m&hl=en-US&gl=US&mapclient=apiv3&cid=12776126085533937725" style="color: #1a73e8;">View on Google Maps</a>
                  <p class="mt-3">Phone: <a href="tel:+14782591234" style="color: #1a73e8;">(478) 259-1234</a></p>
              </div>
          `
      },
      {
          position: { lat: 32.834510, lng: -83.638210 }, // 781 Spring St
          details: `
              <div style="color: black;">
                  <h3>Guitarras Mexican Grill Bar & Cafe</h3>
                  <p>Address: 781 Spring St, Macon, GA 31201</p>
                  <a href="https://maps.google.com/maps?ll=32.834693,-83.63821&z=20&t=m&hl=en-US&gl=US&mapclient=apiv3&cid=12776126085533937725" style="color: #1a73e8;">View on Google Maps</a>
                  <p class="mt-3">Phone: <a href="tel:+14782594026" style="color: blue;">(478) 259-4026</a></p>
              </div>
          `
      }
  ];

  var centerLat = (locations[0].position.lat + locations[1].position.lat + locations[2].position.lat) / 3;
  var centerLng = (locations[0].position.lng + locations[1].position.lng + locations[2].position.lng) / 3;
  var centerPosition = { lat: centerLat, lng: centerLng };

  // Initialize the map centered at the calculated position
  var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: centerPosition
  });

  // Loop through the locations array to place markers and add InfoWindows
  locations.forEach(function(location) {
      var marker = new google.maps.Marker({
          position: location.position,
          map: map
      });

      // Create an InfoWindow for each marker
      var infoWindow = new google.maps.InfoWindow({
          content: location.details
      });

      // Add a click event listener to open the InfoWindow and zoom in on the location when the marker is clicked
      marker.addListener('click', function() {
          infoWindow.open(map, marker);
          map.setCenter(marker.getPosition());
          map.setZoom(20);
      });
  });
}

// Call the initMap function after the DOM has fully loaded
document.addEventListener("DOMContentLoaded", function() {
  initMap();
});
