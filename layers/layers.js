var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_cdmx_alcaldias_1 = new ol.format.GeoJSON();
var features_cdmx_alcaldias_1 = format_cdmx_alcaldias_1.readFeatures(json_cdmx_alcaldias_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cdmx_alcaldias_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cdmx_alcaldias_1.addFeatures(features_cdmx_alcaldias_1);
var lyr_cdmx_alcaldias_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cdmx_alcaldias_1, 
                style: style_cdmx_alcaldias_1,
                interactive: false,
                title: '<img src="styles/legend/cdmx_alcaldias_1.png" /> cdmx_alcaldias'
            });
var format_RUTAS_PANTACO_ALCALDIAS_2 = new ol.format.GeoJSON();
var features_RUTAS_PANTACO_ALCALDIAS_2 = format_RUTAS_PANTACO_ALCALDIAS_2.readFeatures(json_RUTAS_PANTACO_ALCALDIAS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUTAS_PANTACO_ALCALDIAS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUTAS_PANTACO_ALCALDIAS_2.addFeatures(features_RUTAS_PANTACO_ALCALDIAS_2);
var lyr_RUTAS_PANTACO_ALCALDIAS_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RUTAS_PANTACO_ALCALDIAS_2, 
                style: style_RUTAS_PANTACO_ALCALDIAS_2,
                interactive: true,
    title: 'RUTAS_PANTACO_ALCALDIAS<br />\
    <img src="styles/legend/RUTAS_PANTACO_ALCALDIAS_2_0.png" /> Ãlvaro ObregÃ³n<br />\
    <img src="styles/legend/RUTAS_PANTACO_ALCALDIAS_2_1.png" /> Azcapotzalco<br />\
    <img src="styles/legend/RUTAS_PANTACO_ALCALDIAS_2_2.png" /> BENITO JUAREZ<br />\
    <img src="styles/legend/RUTAS_PANTACO_ALCALDIAS_2_3.png" /> CoyoacÃ¡n<br />\
    <img src="styles/legend/RUTAS_PANTACO_ALCALDIAS_2_4.png" /> Cuajimalpa de Morelos<br />\
    <img src="styles/legend/RUTAS_PANTACO_ALCALDIAS_2_5.png" /> CuauhtÃ©moc<br />\
    <img src="styles/legend/RUTAS_PANTACO_ALCALDIAS_2_6.png" /> Gustavo A. Madero<br />\
    <img src="styles/legend/RUTAS_PANTACO_ALCALDIAS_2_7.png" /> Iztacalco<br />\
    <img src="styles/legend/RUTAS_PANTACO_ALCALDIAS_2_8.png" /> Iztapalapa<br />\
    <img src="styles/legend/RUTAS_PANTACO_ALCALDIAS_2_9.png" /> LA MAGDALENA CONTRERAS<br />\
    <img src="styles/legend/RUTAS_PANTACO_ALCALDIAS_2_10.png" /> Miguel Hidalgo<br />\
    <img src="styles/legend/RUTAS_PANTACO_ALCALDIAS_2_11.png" /> MILPA ALTA<br />\
    <img src="styles/legend/RUTAS_PANTACO_ALCALDIAS_2_12.png" /> Tlahuac<br />\
    <img src="styles/legend/RUTAS_PANTACO_ALCALDIAS_2_13.png" /> Tlalpan<br />\
    <img src="styles/legend/RUTAS_PANTACO_ALCALDIAS_2_14.png" /> Venustiano Carranza<br />\
    <img src="styles/legend/RUTAS_PANTACO_ALCALDIAS_2_15.png" /> Xochimilco<br />\
    <img src="styles/legend/RUTAS_PANTACO_ALCALDIAS_2_16.png" /> <br />'
        });
var format_pantaco_3 = new ol.format.GeoJSON();
var features_pantaco_3 = format_pantaco_3.readFeatures(json_pantaco_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pantaco_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pantaco_3.addFeatures(features_pantaco_3);
var lyr_pantaco_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pantaco_3, 
                style: style_pantaco_3,
                interactive: false,
                title: '<img src="styles/legend/pantaco_3.png" /> pantaco'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_cdmx_alcaldias_1.setVisible(true);lyr_RUTAS_PANTACO_ALCALDIAS_2.setVisible(true);lyr_pantaco_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_cdmx_alcaldias_1,lyr_RUTAS_PANTACO_ALCALDIAS_2,lyr_pantaco_3];
lyr_cdmx_alcaldias_1.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'NOM_ENT': 'NOM_ENT', 'COV_': 'COV_', 'COV_ID': 'COV_ID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', });
lyr_RUTAS_PANTACO_ALCALDIAS_2.set('fieldAliases', {'NOMGEO': 'NOMGEO', 'start': 'start', 'end': 'end', 'LONGI_KM': 'LONGI_KM', });
lyr_pantaco_3.set('fieldAliases', {'Direccion': 'Direccion', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'estacion': 'estacion', });
lyr_cdmx_alcaldias_1.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'NOM_ENT': 'TextEdit', 'COV_': 'Range', 'COV_ID': 'Range', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', });
lyr_RUTAS_PANTACO_ALCALDIAS_2.set('fieldImages', {'NOMGEO': 'TextEdit', 'start': 'TextEdit', 'end': 'TextEdit', 'LONGI_KM': 'TextEdit', });
lyr_pantaco_3.set('fieldImages', {'Direccion': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'estacion': 'TextEdit', });
lyr_cdmx_alcaldias_1.set('fieldLabels', {'CVEGEO': 'header label', 'CVE_ENT': 'header label', 'CVE_MUN': 'header label', 'NOMGEO': 'header label', 'NOM_ENT': 'header label', 'COV_': 'header label', 'COV_ID': 'header label', 'AREA': 'header label', 'PERIMETER': 'header label', });
lyr_RUTAS_PANTACO_ALCALDIAS_2.set('fieldLabels', {'NOMGEO': 'header label', 'start': 'header label', 'end': 'header label', 'LONGI_KM': 'header label', });
lyr_pantaco_3.set('fieldLabels', {'Direccion': 'header label', 'Latitude': 'header label', 'Longitude': 'header label', 'estacion': 'header label', });
lyr_pantaco_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});