$(function () {
    getLocation();
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    function showPosition(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var inputLatitude = document.querySelector('input[name="latitude"]');
        inputLatitude.value = latitude;

        var inputLongitude = document.querySelector('input[name="longitude"]');
        inputLongitude.value = longitude;
    }
    
})