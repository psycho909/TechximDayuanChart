function _initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: { lat: 25.0623841, lng: 121.1425703 },
		zoom: 12,
		disableDefaultUI: true
	});
}
let map = null;
