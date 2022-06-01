let map;

window.onload = function () {
	map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([37.41, 8.82]),
          zoom: 4
        })
      });
	  

console.log(btc);

var markers = new ol.layer.Vector({
  source: new ol.source.Vector(),
  style: new ol.style.Style({
    image: new ol.style.Icon({
      anchor: [0.5, 1],
      src: 'marker.png'
    })
  })
});
map.addLayer(markers);


//this marker is what creates

let venue = btc.venues;

for (let v in venue){
	var marker = new ol.Feature(new ol.geom.Point(ol.proj.fromLonLat([venue[v].lon, venue[v].lat])));
	markers.getSource().addFeature(marker);

	
	marker.onclick = function(){myScript};



	
}

if ('serviceWorker' in navigator){
	navigator.serviceWorker.register('/sw.js');
}

};

function markerClick(thing){
	console.log("im wlaking here");
}