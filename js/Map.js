var map = L.map('map').setView([54.353209, 18.677362], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);

var mech6Popup = '<img id="image" src="photos/6.jpg" alt="porost"> <p>Szkoła</p>';
var mech7Popup = '<img id="image" src="photos/7.jpg" alt="porost"> <p>Szkoła</p>';
var mech8Popup = '<img id="image" src="photos/8.jpg" alt="porost"> <p>Szkoła</p>';
var mech9Popup = '<img id="image" src="photos/9.jpg" alt="porost"> <p>Szkoła</p>';
var mech10Popup = '<img id="image" src="photos/10.jpg" alt="porost"> <p>Szkoła</p>';
var mech11Popup = '<img id="image" src="photos/11.jpg" alt="porost"> <p>Szkoła</p>';
var mech12Popup = '<img id="image" src="photos/12.jpg" alt="porost"> <p>Szkoła</p>';
var mech13Popup = '<img id="image" src="photos/13.jpg" alt="porost"> <p>Szkoła</p>';
var mech14Popup = '<img id="image" src="photos/14.jpg" alt="porost"> <p>Szkoła</p>';
var mech15Popup = '<img id="image" src="photos/15.jpg" alt="porost"> <p>Szkoła</p>';
var mech16Popup = '<img id="image" src="photos/16.jpg" alt="porost"> <p>Szkoła</p>';
var mech17Popup = '<img id="image" src="photos/17.jpg" alt="porost"> <p>Szkoła</p>';
var mech18Popup = '<img id="image" src="photos/18.jpg" alt="porost"> <p>Szkoła</p>';
var mech19Popup = '<img id="image" src="photos/19.jpg" alt="porost"> <p>Szkoła</p>';
var mech20Popup = '<img id="image" src="photos/20.jpg" alt="porost"> <p>Szkoła</p>';
var mech21Popup = '<img id="image" src="photos/21.jpg" alt="porost"> <p>Szkoła</p>';
var mech22Popup = '<img id="image" src="photos/22.jpg" alt="porost"> <p>Szkoła</p>';
var mech23Popup = '<img id="image" src="photos/23.jpg" alt="porost"> <p>Szkoła</p>';
var mech24Popup = '<img id="image" src="photos/24.jpg" alt="porost"> <p>Szkoła</p>';

var mech6 = L.marker([54.38398, 18.57194],
	{ alt: 'porost6' }).addTo(map)
	.bindPopup(mech6Popup).openPopup().closePopup();

var mech7 = L.marker([54.38509, 18.57502],
	{ alt: 'porost7' }).addTo(map)
	.bindPopup(mech7Popup).openPopup().closePopup();

var mech8 = L.marker([54.38425, 18.57585],
	{ alt: 'porost8' }).addTo(map)
	.bindPopup(mech8Popup).openPopup();

var mech9 = L.marker([54.38398, 18.57548],
	{ alt: 'porost9' }).addTo(map)
	.bindPopup(mech9Popup).openPopup().closePopup();

var mech10 = L.marker([54.39826, 18.58690],
	{ alt: 'porost10' }).addTo(map)
	.bindPopup(mech10Popup).openPopup();

var mech11 = L.marker([54.3373287, 18.9369002],
	{ alt: 'porost11' }).addTo(map)
	.bindPopup(mech11Popup).openPopup().closePopup();

var mech12 = L.marker([54.3398961, 18.9385562],
	{ alt: 'porost12' }).addTo(map)
	.bindPopup(mech12Popup).openPopup();

var mech13 = L.marker([54.3466277, 18.9409557],
	{ alt: 'porost13' }).addTo(map)
	.bindPopup(mech13Popup).openPopup().closePopup();

var mech14 = L.marker([54.3505046, 18.9423984],
	{ alt: 'porost14' }).addTo(map)
	.bindPopup(mech14Popup).openPopup();

var mech15 = L.marker([54.3592221, 18.9449311],
	{ alt: 'porost15' }).addTo(map)
	.bindPopup(mech15Popup).openPopup().closePopup();

var mech16 = L.marker([54.3587140, 18.9441288],
	{ alt: 'porost16' }).addTo(map)
	.bindPopup(mech16Popup).openPopup();

var mech17 = L.marker([54.3525016, 18.8026232],
	{ alt: 'porost17' }).addTo(map)
	.bindPopup(mech17Popup).openPopup().closePopup();

var mech18 = L.marker([54.3598877, 18.8151454],
	{ alt: 'porost18' }).addTo(map)
	.bindPopup(mech18Popup).openPopup();

var mech19 = L.marker([54.3601403, 18.7949916],
	{ alt: 'porost19' }).addTo(map)
	.bindPopup(mech19Popup).openPopup().closePopup();

var mech20 = L.marker([54.3739339, 18.6124988],
	{ alt: 'porost20' }).addTo(map)
	.bindPopup(mech20Popup).openPopup();

var mech21 = L.marker([54.3314162, 18.6024633],
	{ alt: 'porost21' }).addTo(map)
	.bindPopup(mech21Popup).openPopup().closePopup();

var mech22 = L.marker([54.3319161, 18.6038148],
	{ alt: 'porost22' }).addTo(map)
	.bindPopup(mech22Popup).openPopup();

var mech23 = L.marker([54.3316401, 18.6048692],
	{ alt: 'porost23' }).addTo(map)
	.bindPopup(mech23Popup).openPopup().closePopup();

var mech24 = L.marker([54.4036899, 18.6119908],
	{ alt: 'porost24' }).addTo(map)
	.bindPopup(mech24Popup).openPopup().closePopup();
