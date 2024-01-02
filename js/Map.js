var map = L.map('map').setView([54.353209, 18.677362], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);

var mech6Popup = '<img id="image" src="photos/6.jpg" alt="porost"> <p>porost6</p> <a href="index.html#porost6" target="lichen">Dowiedz się więcej...</a>';
var mech7Popup = '<img id="image" src="photos/7.jpg" alt="porost"> <p>porost7</p> <a href="index.html#porost7" target="lichen">Dowiedz się więcej...</a>';
var mech8Popup = '<img id="image" src="photos/8.jpg" alt="porost"> <p>porost8</p> <a href="index.html#porost8" target="lichen">Dowiedz się więcej...</a>';
var mech9Popup = '<img id="image" src="photos/9.jpg" alt="porost"> <p>porost9</p> <a href="index.html#porost9" target="lichen">Dowiedz się więcej...</a>';
var mech10Popup = '<img id="image" src="photos/10.jpg" alt="porost"> <p>porost10</p> <a href="index.html#porost10" target="lichen">Dowiedz się więcej...</a>';
var mech11Popup = '<img id="image" src="photos/11.jpg" alt="porost"> <p>porost11</p> <a href="index.html#porost11" target="lichen">Dowiedz się więcej...</a>';
var mech12Popup = '<img id="image" src="photos/12.jpg" alt="porost"> <p>porost12</p> <a href="index.html#porost12" target="lichen">Dowiedz się więcej...</a>';
var mech13Popup = '<img id="image" src="photos/13.jpg" alt="porost"> <p>porost13</p> <a href="index.html#porost13" target="lichen">Dowiedz się więcej...</a>';
var mech14Popup = '<img id="image" src="photos/14.jpg" alt="porost"> <p>porost14</p> <a href="index.html#porost14" target="lichen">Dowiedz się więcej...</a>';
var mech15Popup = '<img id="image" src="photos/15.jpg" alt="porost"> <p>porost15</p> <a href="index.html#porost15" target="lichen">Dowiedz się więcej...</a>';
var mech16Popup = '<img id="image" src="photos/16.jpg" alt="porost"> <p>porost16</p> <a href="index.html#porost16" target="lichen">Dowiedz się więcej...</a>';
var mech17Popup = '<img id="image" src="photos/17.jpg" alt="porost"> <p>porost17</p> <a href="index.html#porost17" target="lichen">Dowiedz się więcej...</a>';
var mech18Popup = '<img id="image" src="photos/18.jpg" alt="porost"> <p>porost18</p> <a href="index.html#porost18" target="lichen">Dowiedz się więcej...</a>';
var mech19Popup = '<img id="image" src="photos/19.jpg" alt="porost"> <p>porost19</p> <a href="index.html#porost19" target="lichen">Dowiedz się więcej...</a>';
var mech20Popup = '<img id="image" src="photos/20.jpg" alt="porost"> <p>porost20</p> <a href="index.html#porost20" target="lichen">Dowiedz się więcej...</a>';
var mech21Popup = '<img id="image" src="photos/21.jpg" alt="porost"> <p>porost21</p> <a href="index.html#porost21" target="lichen">Dowiedz się więcej...</a>';
var mech22Popup = '<img id="image" src="photos/22.jpg" alt="porost"> <p>porost22</p> <a href="index.html#porost22" target="lichen">Dowiedz się więcej...</a>';
var mech23Popup = '<img id="image" src="photos/23.jpg" alt="porost"> <p>porost23</p> <a href="index.html#porost23" target="lichen">Dowiedz się więcej...</a>';
var mech24Popup = '<img id="image" src="photos/24.jpg" alt="porost"> <p>porost24</p> <a href="index.html#porost24" target="lichen">Dowiedz się więcej...</a>';
var mech25Popup = '<img id="image" src="photos/25.jpg" alt="porost"> <p>porost24</p> <a href="index.html#porost25" target="lichen">Dowiedz się więcej...</a>';
var mech26Popup = '<img id="image" src="photos/26.jpg" alt="porost"> <p>porost24</p> <a href="index.html#porost26" target="lichen">Dowiedz się więcej...</a>';
var mech27Popup = '<img id="image" src="photos/27.jpg" alt="porost"> <p>porost24</p> <a href="index.html#porost27" target="lichen">Dowiedz się więcej...</a>';
var mech28Popup = '<img id="image" src="photos/28.jpg" alt="porost"> <p>porost24</p> <a href="index.html#porost28" target="lichen">Dowiedz się więcej...</a>';
var mech29Popup = '<img id="image" src="photos/29.jpg" alt="porost"> <p>porost24</p> <a href="index.html#porost29" target="lichen">Dowiedz się więcej...</a>';
var mech30Popup = '<img id="image" src="photos/30.jpg" alt="porost"> <p>porost24</p> <a href="index.html#porost30" target="lichen">Dowiedz się więcej...</a>';
var mech31Popup = '<img id="image" src="photos/31.jpg" alt="porost"> <p>porost24</p> <a href="index.html#porost31" target="lichen">Dowiedz się więcej...</a>';
var mech32Popup = '<img id="image" src="photos/32.jpg" alt="porost"> <p>porost24</p> <a href="index.html#porost32" target="lichen">Dowiedz się więcej...</a>';
var mech33Popup = '<img id="image" src="photos/33.jpg" alt="porost"> <p>porost24</p> <a href="index.html#porost33" target="lichen">Dowiedz się więcej...</a>';
var mech34Popup = '<img id="image" src="photos/34.jpg" alt="porost"> <p>porost24</p> <a href="index.html#porost34" target="lichen">Dowiedz się więcej...</a>';
var mech35Popup = '<img id="image" src="photos/35.jpg" alt="porost"> <p>porost24</p> <a href="index.html#porost35" target="lichen">Dowiedz się więcej...</a>';
var mech36Popup = '<img id="image" src="photos/36.jpg" alt="porost"> <p>porost24</p> <a href="index.html#porost36" target="lichen">Dowiedz się więcej...</a>';
var mech37Popup = '<img id="image" src="photos/37.jpg" alt="porost"> <p>porost24</p> <a href="index.html#porost37" target="lichen">Dowiedz się więcej...</a>';
var mech38Popup = '<img id="image" src="photos/38.jpg" alt="porost"> <p>porost24</p> <a href="index.html#porost38" target="lichen">Dowiedz się więcej...</a>';
var mech39Popup = '<img id="image" src="photos/39.jpg" alt="porost"> <p>porost24</p> <a href="index.html#porost39" target="lichen">Dowiedz się więcej...</a>';

var mech6 = L.marker([54.38398, 18.57194],
	{ alt: 'porost6' }).addTo(map)
	.bindPopup(mech6Popup);

var mech7 = L.marker([54.38509, 18.57502],
	{ alt: 'porost7' }).addTo(map)
	.bindPopup(mech7Popup);

var mech8 = L.marker([54.38425, 18.57585],
	{ alt: 'porost8' }).addTo(map)
	.bindPopup(mech8Popup);

var mech9 = L.marker([54.38398, 18.57548],
	{ alt: 'porost9' }).addTo(map)
	.bindPopup(mech9Popup);

var mech10 = L.marker([54.39826, 18.58690],
	{ alt: 'porost10' }).addTo(map)
	.bindPopup(mech10Popup);

var mech11 = L.marker([54.3373287, 18.9369002],
	{ alt: 'porost11' }).addTo(map)
	.bindPopup(mech11Popup);

var mech12 = L.marker([54.3398961, 18.9385562],
	{ alt: 'porost12' }).addTo(map)
	.bindPopup(mech12Popup);

var mech13 = L.marker([54.3466277, 18.9409557],
	{ alt: 'porost13' }).addTo(map)
	.bindPopup(mech13Popup);

var mech14 = L.marker([54.3505046, 18.9423984],
	{ alt: 'porost14' }).addTo(map)
	.bindPopup(mech14Popup);

var mech15 = L.marker([54.3592221, 18.9449311],
	{ alt: 'porost15' }).addTo(map)
	.bindPopup(mech15Popup);

var mech16 = L.marker([54.3587140, 18.9441288],
	{ alt: 'porost16' }).addTo(map)
	.bindPopup(mech16Popup);

var mech17 = L.marker([54.3525016, 18.8026232],
	{ alt: 'porost17' }).addTo(map)
	.bindPopup(mech17Popup);

var mech18 = L.marker([54.3598877, 18.8151454],
	{ alt: 'porost18' }).addTo(map)
	.bindPopup(mech18Popup)

var mech19 = L.marker([54.3601403, 18.7949916],
	{ alt: 'porost19' }).addTo(map)
	.bindPopup(mech19Popup);

var mech20 = L.marker([54.3739339, 18.6124988],
	{ alt: 'porost20' }).addTo(map)
	.bindPopup(mech20Popup);

var mech21 = L.marker([54.3314162, 18.6024633],
	{ alt: 'porost21' }).addTo(map)
	.bindPopup(mech21Popup);

var mech22 = L.marker([54.3319161, 18.6038148],
	{ alt: 'porost22' }).addTo(map)
	.bindPopup(mech22Popup);

var mech23 = L.marker([54.3316401, 18.6048692],
	{ alt: 'porost23' }).addTo(map)
	.bindPopup(mech23Popup);

var mech24 = L.marker([54.4036899, 18.6119908],
	{ alt: 'porost24' }).addTo(map)
	.bindPopup(mech24Popup);

var mech25 = L.marker([54.383051, 18.574293],
	{ alt: 'porost24' }).addTo(map)
	.bindPopup(mech24Popup);

var mech26 = L.marker([54.383122, 18.574126],
	{ alt: 'porost24' }).addTo(map)
	.bindPopup(mech24Popup);

var mech27 = L.marker([54.383774, 18.574916],
	{ alt: 'porost24' }).addTo(map)
	.bindPopup(mech24Popup);

var mech28 = L.marker([54.383935, 18.575347],
	{ alt: 'porost24' }).addTo(map)
	.bindPopup(mech24Popup);

var mech29 = L.marker([54.384662, 18.573741],
	{ alt: 'porost24' }).addTo(map)
	.bindPopup(mech24Popup);

var mech30 = L.marker([54.383633, 18.571400],
	{ alt: 'porost24' }).addTo(map)
	.bindPopup(mech24Popup);

var mech31 = L.marker([54.383640, 18.569796],
	{ alt: 'porost24' }).addTo(map)
	.bindPopup(mech24Popup);

var mech32 = L.marker([54.383788, 18.569139],
	{ alt: 'porost24' }).addTo(map)
	.bindPopup(mech24Popup);

var mech33 = L.marker([54.384352, 18.569379],
	{ alt: 'porost24' }).addTo(map)
	.bindPopup(mech24Popup);

var mech34 = L.marker([54.384429, 18.569574],
	{ alt: 'porost24' }).addTo(map)
	.bindPopup(mech24Popup);

var mech35 = L.marker([54.385063, 18.572509],
	{ alt: 'porost24' }).addTo(map)
	.bindPopup(mech24Popup);

var mech36 = L.marker([54.385397, 18.573801],
	{ alt: 'porost24' }).addTo(map)
	.bindPopup(mech24Popup);

var mech37 = L.marker([54.385157, 18.575270],
	{ alt: 'porost24' }).addTo(map)
	.bindPopup(mech24Popup);

var mech38 = L.marker([54.385209, 18.575396],
	{ alt: 'porost24' }).addTo(map)
	.bindPopup(mech24Popup);

var mech39 = L.marker([54.385103, 18.577584],
	{ alt: 'porost24' }).addTo(map)
	.bindPopup(mech24Popup);

var text = window.location.hash.substring(1);
switch (text) {
	case '':
	{
		break;
	}
	case '6':
	{
		mech6.openPopup();
		break;
	}
	case '7':
	{
		mech7.openPopup();
		break;
	}
	case '8':
	{
		mech8.openPopup();
		break;
	}
	case '9':
	{
		mech9.openPopup();
		break;
	}
	case '10':
	{
		mech10.openPopup();
		break;
	}
	case '11':
	{
		mech11.openPopup();
		break;
	}
	case '12':
	{
		mech12.openPopup();
		break;
	}
	case '13':
	{
		mech13.openPopup();
		break;
	}
	case '14':
	{
		mech14.openPopup();
		break;
	}
	case '15':
	{
		mech15.openPopup();
		break;
	}
	case '16':
	{
		mech16.openPopup();
		break;
	}
	case '17':
	{
		mech17.openPopup();
		break;
	}
	case '18':
	{
		mech18.openPopup();
		break;
	}
	case '19':
	{
		mech19.openPopup();
		break;
	}
	case '20':
	{
		mech20.openPopup();
		break;
	}
	case '21':
	{
		mech21.openPopup();
		break;
	}
	case '22':
	{
		mech22.openPopup();
		break;
	}
	case '23':
	{
		mech23.openPopup();
		break;
	}
	case '24':
	{
		mech24.openPopup();
		break;
	}
	case '25':
	{
		mech25.openPopup();
		break;
	}
	case '26':
	{
		mech26.openPopup();
		break;
	}
	case '27':
	{
		mech27.openPopup();
		break;
	}
	case '28':
	{
		mech28.openPopup();
		break;
	}
	case '29':
	{
		mech29.openPopup();
		break;
	}
	case '30':
	{
		mech30.openPopup();
		break;
	}
	case '31':
	{
		mech31.openPopup();
		break;
	}
	case '32':
	{
		mech32.openPopup();
		break;
	}
	case '33':
	{
		mech33.openPopup();
		break;
	}
	case '34':
	{
		mech34.openPopup();
		break;
	}
	case '35':
	{
		mech35.openPopup();
		break;
	}
	case '36':
	{
		mech36.openPopup();
		break;
	}
	case '37':
	{
		mech37.openPopup();
		break;
	}
	case '38':
	{
		mech38.openPopup();
		break;
	}
	case '39':
	{
		mech39.openPopup();
		break;
	}
}

document.addEventListener("visibilitychange", function(){
	location.reload(true);
})
