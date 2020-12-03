
window.onload = () => {
    var node = document.getElementById("user-location");

    function showPosition(position) {
        node.innerHTML = "Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude;
    }
    function askUserForLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            node.innerHTML = "O seu dispositivo não tem GPS!";
        }
    }
    setTimeout(() => {
        askUserForLocation();
    }, 2000)

}