
var map = L.map('map', {
center: [-18.014405, -70.251853],
zoom: 18,
minZoom: 10,
maxZoom: 20,
maxBounds: [[-18.392,-71.1491], [-16.7634,-69.4133]]
});

var basemapOSM = L.tileLayer ('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});

basemapOSM.addTo(map);


//***********************LISTA DE SERVICIOS***********//
var Departamento = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_webgis/wms?", {
	   layers: "proyecto_webgis:departamentos_tacnaa",//gisweb:centros educativos tacna
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	}).addTo(map);




var Provincia = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_webgis/wms?", {
	   layers: "proyecto_webgis:provincias_tacna",//gisweb:centros educativos tacna
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	}).addTo(map);


var Distrito = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_webgis/wms?", {
	   layers: "proyecto_webgis:distritos_tacna",//gisweb:centros educativos tacna
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	}).addTo(map);


var centros = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_webgis/wms?", {
	   layers: "proyecto_webgis:centros_educativos_tacna1",//gisweb:centros educativos tacna
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	}).addTo(map);
	
//***********************LISTA DE SERVICIOS***********//

var baseMaps = {
    "OSM": basemapOSM
};

var overlayMaps = {
    "centros educativos": centros

   };

L.control.layers(baseMaps, overlayMaps,{
    position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
    collapsed: false // true
}).addTo(map);

//***********************LISTA DE SERVICIOS***********//

L.control.scale({
  imperial: false
}).addTo(map);