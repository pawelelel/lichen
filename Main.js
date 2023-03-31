var map = L.map('map').setView([54.36546300831436, 18.60786893038252], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);

var mech1Popup = '<img id="image" src="ulo.jpg" alt="mech"> <p>Szkola</p>';
var mech2Popup = '<img id="image" src="stadion.jpg" alt="mech"> <p>Stadion</p>';

// szkola
var mech1 = L.marker([54.37063005711632, 18.60900704588365],
	{ alt: 'mech1' }).addTo(map)
	.bindPopup(mech1Popup).openPopup();

// stadion
var mech2 = L.marker([54.38989574306403, 18.640272323625727],
	{ alt: 'mech2' }).addTo(map)
	.bindPopup(mech2Popup).openPopup().closePopup();
