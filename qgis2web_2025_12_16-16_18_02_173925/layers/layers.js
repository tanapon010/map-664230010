var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_regionSouthpasted_features_1 = new ol.format.GeoJSON();
var features_regionSouthpasted_features_1 = format_regionSouthpasted_features_1.readFeatures(json_regionSouthpasted_features_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_regionSouthpasted_features_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_regionSouthpasted_features_1.addFeatures(features_regionSouthpasted_features_1);
var lyr_regionSouthpasted_features_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_regionSouthpasted_features_1, 
                style: style_regionSouthpasted_features_1,
                popuplayertitle: 'regionSouth — pasted_features',
                interactive: false,
                title: '<img src="styles/legend/regionSouthpasted_features_1.png" /> regionSouth — pasted_features'
            });
var format_schoolSouthschool_college_2 = new ol.format.GeoJSON();
var features_schoolSouthschool_college_2 = format_schoolSouthschool_college_2.readFeatures(json_schoolSouthschool_college_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_schoolSouthschool_college_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_schoolSouthschool_college_2.addFeatures(features_schoolSouthschool_college_2);
cluster_schoolSouthschool_college_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_schoolSouthschool_college_2
});
var lyr_schoolSouthschool_college_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_schoolSouthschool_college_2, 
                style: style_schoolSouthschool_college_2,
                popuplayertitle: 'schoolSouth — school_college',
                interactive: true,
                title: '<img src="styles/legend/schoolSouthschool_college_2.png" /> schoolSouth — school_college'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_regionSouthpasted_features_1.setVisible(true);lyr_schoolSouthschool_college_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_regionSouthpasted_features_1,lyr_schoolSouthschool_college_2];
lyr_regionSouthpasted_features_1.set('fieldAliases', {'fid': 'fid', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM1_EN': 'ADM1_EN', 'ADM1_TH': 'ADM1_TH', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM1_REF': 'ADM1_REF', 'ADM1ALT1EN': 'ADM1ALT1EN', 'ADM1ALT2EN': 'ADM1ALT2EN', 'ADM1ALT1TH': 'ADM1ALT1TH', 'ADM1ALT2TH': 'ADM1ALT2TH', 'ADM0_EN': 'ADM0_EN', 'ADM0_TH': 'ADM0_TH', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'dataregion_Region_RDPB': 'dataregion_Region_RDPB', });
lyr_schoolSouthschool_college_2.set('fieldAliases', {'fid': 'fid', 'SUB_CODE': 'SUB_CODE', 'NAMT': 'NAMT', 'NAME': 'NAME', 'LOCATION_T': 'LOCATION_T', 'LOCATION_E': 'LOCATION_E', 'VERSION': 'VERSION', 'SOURCETHM': 'SOURCETHM', });
lyr_regionSouthpasted_features_1.set('fieldImages', {'fid': '', 'Shape_Leng': '', 'Shape_Area': '', 'ADM1_EN': '', 'ADM1_TH': '', 'ADM1_PCODE': '', 'ADM1_REF': '', 'ADM1ALT1EN': '', 'ADM1ALT2EN': '', 'ADM1ALT1TH': '', 'ADM1ALT2TH': '', 'ADM0_EN': '', 'ADM0_TH': '', 'ADM0_PCODE': '', 'date': '', 'validOn': '', 'validTo': '', 'dataregion_Region_RDPB': '', });
lyr_schoolSouthschool_college_2.set('fieldImages', {'fid': '', 'SUB_CODE': '', 'NAMT': '', 'NAME': '', 'LOCATION_T': '', 'LOCATION_E': '', 'VERSION': '', 'SOURCETHM': '', });
lyr_regionSouthpasted_features_1.set('fieldLabels', {'fid': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM1_EN': 'no label', 'ADM1_TH': 'no label', 'ADM1_PCODE': 'no label', 'ADM1_REF': 'no label', 'ADM1ALT1EN': 'no label', 'ADM1ALT2EN': 'no label', 'ADM1ALT1TH': 'no label', 'ADM1ALT2TH': 'no label', 'ADM0_EN': 'no label', 'ADM0_TH': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', 'dataregion_Region_RDPB': 'no label', });
lyr_schoolSouthschool_college_2.set('fieldLabels', {'fid': 'inline label - always visible', 'SUB_CODE': 'inline label - always visible', 'NAMT': 'inline label - always visible', 'NAME': 'inline label - always visible', 'LOCATION_T': 'inline label - always visible', 'LOCATION_E': 'inline label - always visible', 'VERSION': 'inline label - always visible', 'SOURCETHM': 'inline label - always visible', });
lyr_schoolSouthschool_college_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});