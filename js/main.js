document.addEventListener("DOMContentLoaded", function() {
    initMap();

    // Bind the click events to the buttons
    document.querySelectorAll('.order-location-btn').forEach(button => {
        button.addEventListener('click', function() {
            const location = this.getAttribute('data-location');
            showConfirmationModal(location);
        });
    });
});

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
            `,
            id: 'restaurant1'
        },
        {
            position: { lat: 32.835647, lng: -83.743368 }, // 5577 Thomaston Rd
            details: `
                <div style="color: black;">
                    <h3>Guitarras Mexican Express</h3>
                    <p>Address: 5577 Thomaston Rd Suite #500, Macon, GA 31220</p>
                    <a href="https://maps.google.com/maps?ll=32.834673,-83.63821&z=20&t=m&hl=en-US&gl=US&mapclient=apiv3&cid=12776126085533937725" style="color: #1a73e8;">View on Google Maps</a>
                    <p class="mt-3">Phone: <a href="tel:+14782591234" style="color: #1a73e8;">(478) 259-1234</a></p>
                </div>
            `,
            id: 'restaurant2'
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
            `,
            id: 'restaurant3'
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

// Function to show the confirmation modal
function showConfirmationModal(locationId) {
    const modalContent = `
        <div class="modal fade" id="confirmationModal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Confirm Location</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p class="mb-2">You will be an order at the following location: <br> <span class="font-weight-bold">${locationId}</span></p>
                        <p class=""><u>Pick Up orders will need to be picked up at this location.</u></p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-danger" id="confirmLocationButton">Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Hide the "Order Now" modal and show the confirmation modal
    const orderNowModal = document.getElementById('orderNowModal');
    orderNowModal.classList.add('d-none');

    document.body.insertAdjacentHTML('beforeend', modalContent);
    $('#confirmationModal').modal('show');

    $('#confirmationModal').on('hidden.bs.modal', function () {
        orderNowModal.classList.remove('d-none');
        document.getElementById('confirmationModal').remove();
    });

    document.getElementById('confirmLocationButton').addEventListener('click', function() {
        $('#confirmationModal').modal('hide');
        
        // Redirect based on the selected restaurant
        switch (locationId) {
            case '157 Tom Hill Sr Blvd #205 Macon, GA 31210':
                window.location.href = 'https://food.google.com/chooseprovider?restaurantId=/g/11btxkzlnc&g2lbs=AOHF13l5afusyWSSNZII9JSDN1Yuzf2GIlCSjcf-3zxoeB1xEPJUInr565zAr4DuH7yqKSN1T3saJe1hVk9BjtaFDpIVHCZ8Q1LioyupGCHaKre9b5YFsi4%3D&hl=en-US&gl=us&cs=1&ssta=1&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=XudHZv_lCLjIp84PpvmH2AM&ei=XudHZv_lCLjIp84PpvmH2AM&fo_s=OA&opi=89978449&foub=mcpp&sa=X&ved=2ahUKEwj_jJHR6pWGAxU45MkDHab8ATsQjYwDKAF6BAg5EAk&sei=CVD9YpkCLkmvEaSLblJY_kki&utm_campaign&utm_source=search';
                break;
            case '5577 Thomaston Rd Suite #500 Macon, GA 31220':
                window.location.href = 'https://online.skytab.com/5390a291c78110ad6a142e9e49d5be9b';
                break;
            case '781 Spring St, Macon, GA 31201 Macon, GA 31201':
                window.location.href = 'https://guitarrasmexicangrill.zenfoody.com/newtemplate#/newmenu';
                break;
            default:
                alert('Invalid selection');
        }
    });
}
