ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-12464979.791584, 3710111.573145, -12233998.541584, 3848859.073145]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ApartmentsSmall_3 = new ol.format.GeoJSON();
var features_ApartmentsSmall_3 = format_ApartmentsSmall_3.readFeatures(json_ApartmentsSmall_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ApartmentsSmall_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ApartmentsSmall_3.addFeatures(features_ApartmentsSmall_3);
var lyr_ApartmentsSmall_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ApartmentsSmall_3, 
                style: style_ApartmentsSmall_3,
                popuplayertitle: "Apartments - Small",
                interactive: true,
                title: '<img src="styles/legend/ApartmentsSmall_3.png" /> Apartments - Small'
            });
var format_ApartmentsMedium_4 = new ol.format.GeoJSON();
var features_ApartmentsMedium_4 = format_ApartmentsMedium_4.readFeatures(json_ApartmentsMedium_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ApartmentsMedium_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ApartmentsMedium_4.addFeatures(features_ApartmentsMedium_4);
var lyr_ApartmentsMedium_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ApartmentsMedium_4, 
                style: style_ApartmentsMedium_4,
                popuplayertitle: "Apartments - Medium",
                interactive: true,
                title: '<img src="styles/legend/ApartmentsMedium_4.png" /> Apartments - Medium'
            });
var format_ApartmentsLarge_5 = new ol.format.GeoJSON();
var features_ApartmentsLarge_5 = format_ApartmentsLarge_5.readFeatures(json_ApartmentsLarge_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ApartmentsLarge_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ApartmentsLarge_5.addFeatures(features_ApartmentsLarge_5);
var lyr_ApartmentsLarge_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ApartmentsLarge_5, 
                style: style_ApartmentsLarge_5,
                popuplayertitle: "Apartments - Large",
                interactive: true,
                title: '<img src="styles/legend/ApartmentsLarge_5.png" /> Apartments - Large'
            });
var format_CommonArea_6 = new ol.format.GeoJSON();
var features_CommonArea_6 = format_CommonArea_6.readFeatures(json_CommonArea_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommonArea_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommonArea_6.addFeatures(features_CommonArea_6);
var lyr_CommonArea_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CommonArea_6, 
                style: style_CommonArea_6,
                popuplayertitle: "Common Area",
                interactive: true,
                title: '<img src="styles/legend/CommonArea_6.png" /> Common Area'
            });
var format_500k510k_7 = new ol.format.GeoJSON();
var features_500k510k_7 = format_500k510k_7.readFeatures(json_500k510k_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_500k510k_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_500k510k_7.addFeatures(features_500k510k_7);
var lyr_500k510k_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_500k510k_7, 
                style: style_500k510k_7,
                popuplayertitle: "500k - 510k",
                interactive: true,
                title: '<img src="styles/legend/500k510k_7.png" /> 500k - 510k'
            });
var format_510k520k_8 = new ol.format.GeoJSON();
var features_510k520k_8 = format_510k520k_8.readFeatures(json_510k520k_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_510k520k_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_510k520k_8.addFeatures(features_510k520k_8);
var lyr_510k520k_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_510k520k_8, 
                style: style_510k520k_8,
                popuplayertitle: "510k - 520k",
                interactive: true,
                title: '<img src="styles/legend/510k520k_8.png" /> 510k - 520k'
            });
var format_520k530k_9 = new ol.format.GeoJSON();
var features_520k530k_9 = format_520k530k_9.readFeatures(json_520k530k_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_520k530k_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_520k530k_9.addFeatures(features_520k530k_9);
var lyr_520k530k_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_520k530k_9, 
                style: style_520k530k_9,
                popuplayertitle: "520k - 530k",
                interactive: true,
                title: '<img src="styles/legend/520k530k_9.png" /> 520k - 530k'
            });
var format_530k540k_10 = new ol.format.GeoJSON();
var features_530k540k_10 = format_530k540k_10.readFeatures(json_530k540k_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_530k540k_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_530k540k_10.addFeatures(features_530k540k_10);
var lyr_530k540k_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_530k540k_10, 
                style: style_530k540k_10,
                popuplayertitle: "530k - 540k",
                interactive: true,
                title: '<img src="styles/legend/530k540k_10.png" /> 530k - 540k'
            });
var format_540k550k_11 = new ol.format.GeoJSON();
var features_540k550k_11 = format_540k550k_11.readFeatures(json_540k550k_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_540k550k_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_540k550k_11.addFeatures(features_540k550k_11);
var lyr_540k550k_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_540k550k_11, 
                style: style_540k550k_11,
                popuplayertitle: "540k - 550k",
                interactive: true,
                title: '<img src="styles/legend/540k550k_11.png" /> 540k - 550k'
            });
var format_550k560k_12 = new ol.format.GeoJSON();
var features_550k560k_12 = format_550k560k_12.readFeatures(json_550k560k_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_550k560k_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_550k560k_12.addFeatures(features_550k560k_12);
var lyr_550k560k_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_550k560k_12, 
                style: style_550k560k_12,
                popuplayertitle: "550k - 560k",
                interactive: true,
                title: '<img src="styles/legend/550k560k_12.png" /> 550k - 560k'
            });
var format_560k575k_13 = new ol.format.GeoJSON();
var features_560k575k_13 = format_560k575k_13.readFeatures(json_560k575k_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_560k575k_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_560k575k_13.addFeatures(features_560k575k_13);
var lyr_560k575k_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_560k575k_13, 
                style: style_560k575k_13,
                popuplayertitle: "560k - 575k",
                interactive: true,
                title: '<img src="styles/legend/560k575k_13.png" /> 560k - 575k'
            });
var format_575k590k_14 = new ol.format.GeoJSON();
var features_575k590k_14 = format_575k590k_14.readFeatures(json_575k590k_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_575k590k_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_575k590k_14.addFeatures(features_575k590k_14);
var lyr_575k590k_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_575k590k_14, 
                style: style_575k590k_14,
                popuplayertitle: "575k - 590k",
                interactive: true,
                title: '<img src="styles/legend/575k590k_14.png" /> 575k - 590k'
            });
var format_590k605k_15 = new ol.format.GeoJSON();
var features_590k605k_15 = format_590k605k_15.readFeatures(json_590k605k_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_590k605k_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_590k605k_15.addFeatures(features_590k605k_15);
var lyr_590k605k_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_590k605k_15, 
                style: style_590k605k_15,
                popuplayertitle: "590k - 605k",
                interactive: true,
                title: '<img src="styles/legend/590k605k_15.png" /> 590k - 605k'
            });
var format_605k620k_16 = new ol.format.GeoJSON();
var features_605k620k_16 = format_605k620k_16.readFeatures(json_605k620k_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_605k620k_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_605k620k_16.addFeatures(features_605k620k_16);
var lyr_605k620k_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_605k620k_16, 
                style: style_605k620k_16,
                popuplayertitle: "605k - 620k",
                interactive: true,
                title: '<img src="styles/legend/605k620k_16.png" /> 605k - 620k'
            });
var format_620k640k_17 = new ol.format.GeoJSON();
var features_620k640k_17 = format_620k640k_17.readFeatures(json_620k640k_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_620k640k_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_620k640k_17.addFeatures(features_620k640k_17);
var lyr_620k640k_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_620k640k_17, 
                style: style_620k640k_17,
                popuplayertitle: "620k - 640k",
                interactive: true,
                title: '<img src="styles/legend/620k640k_17.png" /> 620k - 640k'
            });
var format_640k665k_18 = new ol.format.GeoJSON();
var features_640k665k_18 = format_640k665k_18.readFeatures(json_640k665k_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_640k665k_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_640k665k_18.addFeatures(features_640k665k_18);
var lyr_640k665k_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_640k665k_18, 
                style: style_640k665k_18,
                popuplayertitle: "640k - 665k",
                interactive: true,
                title: '<img src="styles/legend/640k665k_18.png" /> 640k - 665k'
            });
var format_665k695k_19 = new ol.format.GeoJSON();
var features_665k695k_19 = format_665k695k_19.readFeatures(json_665k695k_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_665k695k_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_665k695k_19.addFeatures(features_665k695k_19);
var lyr_665k695k_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_665k695k_19, 
                style: style_665k695k_19,
                popuplayertitle: "665k - 695k",
                interactive: true,
                title: '<img src="styles/legend/665k695k_19.png" /> 665k - 695k'
            });
var format_695k730k_20 = new ol.format.GeoJSON();
var features_695k730k_20 = format_695k730k_20.readFeatures(json_695k730k_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_695k730k_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_695k730k_20.addFeatures(features_695k730k_20);
var lyr_695k730k_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_695k730k_20, 
                style: style_695k730k_20,
                popuplayertitle: "695k - 730k",
                interactive: true,
                title: '<img src="styles/legend/695k730k_20.png" /> 695k - 730k'
            });
var format_730k770k_21 = new ol.format.GeoJSON();
var features_730k770k_21 = format_730k770k_21.readFeatures(json_730k770k_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_730k770k_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_730k770k_21.addFeatures(features_730k770k_21);
var lyr_730k770k_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_730k770k_21, 
                style: style_730k770k_21,
                popuplayertitle: "730k - 770k",
                interactive: true,
                title: '<img src="styles/legend/730k770k_21.png" /> 730k - 770k'
            });
var format_770k825k_22 = new ol.format.GeoJSON();
var features_770k825k_22 = format_770k825k_22.readFeatures(json_770k825k_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_770k825k_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_770k825k_22.addFeatures(features_770k825k_22);
var lyr_770k825k_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_770k825k_22, 
                style: style_770k825k_22,
                popuplayertitle: "770k - 825k",
                interactive: true,
                title: '<img src="styles/legend/770k825k_22.png" /> 770k - 825k'
            });
var format_825k900k_23 = new ol.format.GeoJSON();
var features_825k900k_23 = format_825k900k_23.readFeatures(json_825k900k_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_825k900k_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_825k900k_23.addFeatures(features_825k900k_23);
var lyr_825k900k_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_825k900k_23, 
                style: style_825k900k_23,
                popuplayertitle: "825k - 900k",
                interactive: true,
                title: '<img src="styles/legend/825k900k_23.png" /> 825k - 900k'
            });
var format_900k1mil_24 = new ol.format.GeoJSON();
var features_900k1mil_24 = format_900k1mil_24.readFeatures(json_900k1mil_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_900k1mil_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_900k1mil_24.addFeatures(features_900k1mil_24);
var lyr_900k1mil_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_900k1mil_24, 
                style: style_900k1mil_24,
                popuplayertitle: "900k - 1mil",
                interactive: true,
                title: '<img src="styles/legend/900k1mil_24.png" /> 900k - 1mil'
            });
var format_1mil12mil_25 = new ol.format.GeoJSON();
var features_1mil12mil_25 = format_1mil12mil_25.readFeatures(json_1mil12mil_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1mil12mil_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1mil12mil_25.addFeatures(features_1mil12mil_25);
var lyr_1mil12mil_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1mil12mil_25, 
                style: style_1mil12mil_25,
                popuplayertitle: "1mil - 1.2mil",
                interactive: true,
                title: '<img src="styles/legend/1mil12mil_25.png" /> 1mil - 1.2mil'
            });
var format_12mil25mil_26 = new ol.format.GeoJSON();
var features_12mil25mil_26 = format_12mil25mil_26.readFeatures(json_12mil25mil_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_12mil25mil_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_12mil25mil_26.addFeatures(features_12mil25mil_26);
var lyr_12mil25mil_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_12mil25mil_26, 
                style: style_12mil25mil_26,
                popuplayertitle: "1.2mil - 2.5mil",
                interactive: true,
                title: '<img src="styles/legend/12mil25mil_26.png" /> 1.2mil - 2.5mil'
            });
var format_Over25mil_27 = new ol.format.GeoJSON();
var features_Over25mil_27 = format_Over25mil_27.readFeatures(json_Over25mil_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Over25mil_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Over25mil_27.addFeatures(features_Over25mil_27);
var lyr_Over25mil_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Over25mil_27, 
                style: style_Over25mil_27,
                popuplayertitle: "Over 2.5mil",
                interactive: true,
                title: '<img src="styles/legend/Over25mil_27.png" /> Over 2.5mil'
            });
var group_ResidentialHomesbyValue = new ol.layer.Group({
                                layers: [lyr_500k510k_7,lyr_510k520k_8,lyr_520k530k_9,lyr_530k540k_10,lyr_540k550k_11,lyr_550k560k_12,lyr_560k575k_13,lyr_575k590k_14,lyr_590k605k_15,lyr_605k620k_16,lyr_620k640k_17,lyr_640k665k_18,lyr_665k695k_19,lyr_695k730k_20,lyr_730k770k_21,lyr_770k825k_22,lyr_825k900k_23,lyr_900k1mil_24,lyr_1mil12mil_25,lyr_12mil25mil_26,lyr_Over25mil_27,],
                                fold: "open",
                                title: "Residential Homes by Value"});
var group_ResidentialCommonAreaParcels = new ol.layer.Group({
                                layers: [lyr_CommonArea_6,],
                                fold: "open",
                                title: "Residential Common Area Parcels"});
var group_Apartments = new ol.layer.Group({
                                layers: [lyr_ApartmentsSmall_3,lyr_ApartmentsMedium_4,lyr_ApartmentsLarge_5,],
                                fold: "open",
                                title: "Apartments"});
var group_BaseMaps = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_GoogleSatelliteHybrid_1,lyr_GoogleSatellite_2,],
                                fold: "open",
                                title: "Base Maps"});
var group_Aerials = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Aerials"});

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_ApartmentsSmall_3.setVisible(true);lyr_ApartmentsMedium_4.setVisible(true);lyr_ApartmentsLarge_5.setVisible(true);lyr_CommonArea_6.setVisible(true);lyr_500k510k_7.setVisible(true);lyr_510k520k_8.setVisible(true);lyr_520k530k_9.setVisible(true);lyr_530k540k_10.setVisible(true);lyr_540k550k_11.setVisible(true);lyr_550k560k_12.setVisible(true);lyr_560k575k_13.setVisible(true);lyr_575k590k_14.setVisible(true);lyr_590k605k_15.setVisible(true);lyr_605k620k_16.setVisible(true);lyr_620k640k_17.setVisible(true);lyr_640k665k_18.setVisible(true);lyr_665k695k_19.setVisible(true);lyr_695k730k_20.setVisible(true);lyr_730k770k_21.setVisible(true);lyr_770k825k_22.setVisible(true);lyr_825k900k_23.setVisible(true);lyr_900k1mil_24.setVisible(true);lyr_1mil12mil_25.setVisible(true);lyr_12mil25mil_26.setVisible(true);lyr_Over25mil_27.setVisible(true);
var layersList = [group_BaseMaps,group_Apartments,group_ResidentialCommonAreaParcels,group_ResidentialHomesbyValue];
lyr_ApartmentsSmall_3.set('fieldAliases', {'PARCEL': 'PARCEL', 'GISACRES': 'GISACRES', 'LINK': 'LINK', 'ADDRESS_OL': 'ADDRESS_OL', 'PARCEL_USE': 'PARCEL_USE', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'PAGE': 'PAGE', 'RECORDDATE': 'RECORDDATE', 'DOCKET': 'DOCKET', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'TAXYR': 'TAXYR', 'LIMNET': 'LIMNET', 'FCV': 'FCV', 'PC_RESTRIC': 'PC_RESTRIC', });
lyr_ApartmentsMedium_4.set('fieldAliases', {'PARCEL': 'PARCEL', 'GISACRES': 'GISACRES', 'LINK': 'LINK', 'ADDRESS_OL': 'ADDRESS_OL', 'PARCEL_USE': 'PARCEL_USE', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'PAGE': 'PAGE', 'RECORDDATE': 'RECORDDATE', 'DOCKET': 'DOCKET', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'TAXYR': 'TAXYR', 'LIMNET': 'LIMNET', 'FCV': 'FCV', 'PC_RESTRIC': 'PC_RESTRIC', });
lyr_ApartmentsLarge_5.set('fieldAliases', {'PARCEL': 'PARCEL', 'GISACRES': 'GISACRES', 'LINK': 'LINK', 'ADDRESS_OL': 'ADDRESS_OL', 'PARCEL_USE': 'PARCEL_USE', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'PAGE': 'PAGE', 'RECORDDATE': 'RECORDDATE', 'DOCKET': 'DOCKET', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'TAXYR': 'TAXYR', 'LIMNET': 'LIMNET', 'FCV': 'FCV', 'PC_RESTRIC': 'PC_RESTRIC', });
lyr_CommonArea_6.set('fieldAliases', {'PARCEL': 'PARCEL', 'GISACRES': 'GISACRES', 'LINK': 'LINK', 'ADDRESS_OL': 'ADDRESS_OL', 'PARCEL_USE': 'PARCEL_USE', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'PAGE': 'PAGE', 'RECORDDATE': 'RECORDDATE', 'DOCKET': 'DOCKET', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'TAXYR': 'TAXYR', 'LIMNET': 'LIMNET', 'FCV': 'FCV', 'PC_RESTRIC': 'PC_RESTRIC', });
lyr_500k510k_7.set('fieldAliases', {'PARCEL': 'PARCEL', 'GISACRES': 'GISACRES', 'LINK': 'LINK', 'ADDRESS_OL': 'ADDRESS_OL', 'PARCEL_USE': 'PARCEL_USE', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'PAGE': 'PAGE', 'RECORDDATE': 'RECORDDATE', 'DOCKET': 'DOCKET', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'TAXYR': 'TAXYR', 'LIMNETVAL': 'LIMNETVAL', 'FULCASHVAL': 'FULCASHVAL', 'PC_RESTRIC': 'PC_RESTRIC', });
lyr_510k520k_8.set('fieldAliases', {'PARCEL': 'PARCEL', 'GISACRES': 'GISACRES', 'LINK': 'LINK', 'ADDRESS_OL': 'ADDRESS_OL', 'PARCEL_USE': 'PARCEL_USE', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'PAGE': 'PAGE', 'RECORDDATE': 'RECORDDATE', 'DOCKET': 'DOCKET', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'TAXYR': 'TAXYR', 'LIMNETVAL': 'LIMNETVAL', 'FULCASHVAL': 'FULCASHVAL', 'PC_RESTRIC': 'PC_RESTRIC', });
lyr_520k530k_9.set('fieldAliases', {'PARCEL': 'PARCEL', 'GISACRES': 'GISACRES', 'LINK': 'LINK', 'ADDRESS_OL': 'ADDRESS_OL', 'PARCEL_USE': 'PARCEL_USE', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'PAGE': 'PAGE', 'RECORDDATE': 'RECORDDATE', 'DOCKET': 'DOCKET', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'TAXYR': 'TAXYR', 'LIMNETVAL': 'LIMNETVAL', 'FULCASHVAL': 'FULCASHVAL', 'PC_RESTRIC': 'PC_RESTRIC', });
lyr_530k540k_10.set('fieldAliases', {'PARCEL': 'PARCEL', 'GISACRES': 'GISACRES', 'LINK': 'LINK', 'ADDRESS_OL': 'ADDRESS_OL', 'PARCEL_USE': 'PARCEL_USE', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'PAGE': 'PAGE', 'RECORDDATE': 'RECORDDATE', 'DOCKET': 'DOCKET', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'TAXYR': 'TAXYR', 'LIMNETVAL': 'LIMNETVAL', 'FULCASHVAL': 'FULCASHVAL', 'PC_RESTRIC': 'PC_RESTRIC', });
lyr_540k550k_11.set('fieldAliases', {'PARCEL': 'PARCEL', 'GISACRES': 'GISACRES', 'LINK': 'LINK', 'ADDRESS_OL': 'ADDRESS_OL', 'PARCEL_USE': 'PARCEL_USE', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'PAGE': 'PAGE', 'RECORDDATE': 'RECORDDATE', 'DOCKET': 'DOCKET', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'TAXYR': 'TAXYR', 'LIMNETVAL': 'LIMNETVAL', 'FULCASHVAL': 'FULCASHVAL', 'PC_RESTRIC': 'PC_RESTRIC', });
lyr_550k560k_12.set('fieldAliases', {'PARCEL': 'PARCEL', 'GISACRES': 'GISACRES', 'LINK': 'LINK', 'ADDRESS_OL': 'ADDRESS_OL', 'PARCEL_USE': 'PARCEL_USE', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'PAGE': 'PAGE', 'RECORDDATE': 'RECORDDATE', 'DOCKET': 'DOCKET', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'TAXYR': 'TAXYR', 'LIMNETVAL': 'LIMNETVAL', 'FULCASHVAL': 'FULCASHVAL', 'PC_RESTRIC': 'PC_RESTRIC', });
lyr_560k575k_13.set('fieldAliases', {'PARCEL': 'PARCEL', 'GISACRES': 'GISACRES', 'LINK': 'LINK', 'ADDRESS_OL': 'ADDRESS_OL', 'PARCEL_USE': 'PARCEL_USE', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'PAGE': 'PAGE', 'RECORDDATE': 'RECORDDATE', 'DOCKET': 'DOCKET', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'TAXYR': 'TAXYR', 'LIMNETVAL': 'LIMNETVAL', 'FULCASHVAL': 'FULCASHVAL', 'PC_RESTRIC': 'PC_RESTRIC', });
lyr_575k590k_14.set('fieldAliases', {'PARCEL': 'PARCEL', 'GISACRES': 'GISACRES', 'LINK': 'LINK', 'ADDRESS_OL': 'ADDRESS_OL', 'PARCEL_USE': 'PARCEL_USE', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'PAGE': 'PAGE', 'RECORDDATE': 'RECORDDATE', 'DOCKET': 'DOCKET', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'TAXYR': 'TAXYR', 'LIMNETVAL': 'LIMNETVAL', 'FULCASHVAL': 'FULCASHVAL', 'PC_RESTRIC': 'PC_RESTRIC', });
lyr_590k605k_15.set('fieldAliases', {'PARCEL': 'PARCEL', 'GISACRES': 'GISACRES', 'LINK': 'LINK', 'ADDRESS_OL': 'ADDRESS_OL', 'PARCEL_USE': 'PARCEL_USE', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'PAGE': 'PAGE', 'RECORDDATE': 'RECORDDATE', 'DOCKET': 'DOCKET', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'TAXYR': 'TAXYR', 'LIMNETVAL': 'LIMNETVAL', 'FULCASHVAL': 'FULCASHVAL', 'PC_RESTRIC': 'PC_RESTRIC', });
lyr_605k620k_16.set('fieldAliases', {'PARCEL': 'PARCEL', 'GISACRES': 'GISACRES', 'LINK': 'LINK', 'ADDRESS_OL': 'ADDRESS_OL', 'PARCEL_USE': 'PARCEL_USE', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'PAGE': 'PAGE', 'RECORDDATE': 'RECORDDATE', 'DOCKET': 'DOCKET', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'TAXYR': 'TAXYR', 'LIMNETVAL': 'LIMNETVAL', 'FULCASHVAL': 'FULCASHVAL', 'PC_RESTRIC': 'PC_RESTRIC', });
lyr_620k640k_17.set('fieldAliases', {'PARCEL': 'PARCEL', 'GISACRES': 'GISACRES', 'LINK': 'LINK', 'ADDRESS_OL': 'ADDRESS_OL', 'PARCEL_USE': 'PARCEL_USE', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'PAGE': 'PAGE', 'RECORDDATE': 'RECORDDATE', 'DOCKET': 'DOCKET', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'TAXYR': 'TAXYR', 'LIMNETVAL': 'LIMNETVAL', 'FULCASHVAL': 'FULCASHVAL', 'PC_RESTRIC': 'PC_RESTRIC', });
lyr_640k665k_18.set('fieldAliases', {'PARCEL': 'PARCEL', 'GISACRES': 'GISACRES', 'LINK': 'LINK', 'ADDRESS_OL': 'ADDRESS_OL', 'PARCEL_USE': 'PARCEL_USE', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'PAGE': 'PAGE', 'RECORDDATE': 'RECORDDATE', 'DOCKET': 'DOCKET', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'TAXYR': 'TAXYR', 'LIMNETVAL': 'LIMNETVAL', 'FULCASHVAL': 'FULCASHVAL', 'PC_RESTRIC': 'PC_RESTRIC', });
lyr_665k695k_19.set('fieldAliases', {'PARCEL': 'PARCEL', 'GISACRES': 'GISACRES', 'LINK': 'LINK', 'ADDRESS_OL': 'ADDRESS_OL', 'PARCEL_USE': 'PARCEL_USE', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'PAGE': 'PAGE', 'RECORDDATE': 'RECORDDATE', 'DOCKET': 'DOCKET', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'TAXYR': 'TAXYR', 'LIMNETVAL': 'LIMNETVAL', 'FULCASHVAL': 'FULCASHVAL', 'PC_RESTRIC': 'PC_RESTRIC', });
lyr_695k730k_20.set('fieldAliases', {'PARCEL': 'PARCEL', 'GISACRES': 'GISACRES', 'LINK': 'LINK', 'ADDRESS_OL': 'ADDRESS_OL', 'PARCEL_USE': 'PARCEL_USE', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'PAGE': 'PAGE', 'RECORDDATE': 'RECORDDATE', 'DOCKET': 'DOCKET', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'TAXYR': 'TAXYR', 'LIMNETVAL': 'LIMNETVAL', 'FULCASHVAL': 'FULCASHVAL', 'PC_RESTRIC': 'PC_RESTRIC', });
lyr_730k770k_21.set('fieldAliases', {'PARCEL': 'PARCEL', 'GISACRES': 'GISACRES', 'LINK': 'LINK', 'ADDRESS_OL': 'ADDRESS_OL', 'PARCEL_USE': 'PARCEL_USE', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'PAGE': 'PAGE', 'RECORDDATE': 'RECORDDATE', 'DOCKET': 'DOCKET', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'TAXYR': 'TAXYR', 'LIMNETVAL': 'LIMNETVAL', 'FULCASHVAL': 'FULCASHVAL', 'PC_RESTRIC': 'PC_RESTRIC', });
lyr_770k825k_22.set('fieldAliases', {'PARCEL': 'PARCEL', 'GISACRES': 'GISACRES', 'LINK': 'LINK', 'ADDRESS_OL': 'ADDRESS_OL', 'PARCEL_USE': 'PARCEL_USE', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'PAGE': 'PAGE', 'RECORDDATE': 'RECORDDATE', 'DOCKET': 'DOCKET', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'TAXYR': 'TAXYR', 'LIMNETVAL': 'LIMNETVAL', 'FULCASHVAL': 'FULCASHVAL', 'PC_RESTRIC': 'PC_RESTRIC', });
lyr_825k900k_23.set('fieldAliases', {'PARCEL': 'PARCEL', 'GISACRES': 'GISACRES', 'LINK': 'LINK', 'ADDRESS_OL': 'ADDRESS_OL', 'PARCEL_USE': 'PARCEL_USE', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'PAGE': 'PAGE', 'RECORDDATE': 'RECORDDATE', 'DOCKET': 'DOCKET', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'TAXYR': 'TAXYR', 'LIMNETVAL': 'LIMNETVAL', 'FULCASHVAL': 'FULCASHVAL', 'PC_RESTRIC': 'PC_RESTRIC', });
lyr_900k1mil_24.set('fieldAliases', {'PARCEL': 'PARCEL', 'GISACRES': 'GISACRES', 'LINK': 'LINK', 'ADDRESS_OL': 'ADDRESS_OL', 'PARCEL_USE': 'PARCEL_USE', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'PAGE': 'PAGE', 'RECORDDATE': 'RECORDDATE', 'DOCKET': 'DOCKET', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'TAXYR': 'TAXYR', 'LIMNETVAL': 'LIMNETVAL', 'FULCASHVAL': 'FULCASHVAL', 'PC_RESTRIC': 'PC_RESTRIC', });
lyr_1mil12mil_25.set('fieldAliases', {'PARCEL': 'PARCEL', 'GISACRES': 'GISACRES', 'LINK': 'LINK', 'ADDRESS_OL': 'ADDRESS_OL', 'PARCEL_USE': 'PARCEL_USE', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'PAGE': 'PAGE', 'RECORDDATE': 'RECORDDATE', 'DOCKET': 'DOCKET', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'TAXYR': 'TAXYR', 'LIMNETVAL': 'LIMNETVAL', 'FULCASHVAL': 'FULCASHVAL', 'PC_RESTRIC': 'PC_RESTRIC', });
lyr_12mil25mil_26.set('fieldAliases', {'PARCEL': 'PARCEL', 'GISACRES': 'GISACRES', 'LINK': 'LINK', 'ADDRESS_OL': 'ADDRESS_OL', 'PARCEL_USE': 'PARCEL_USE', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'PAGE': 'PAGE', 'RECORDDATE': 'RECORDDATE', 'DOCKET': 'DOCKET', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'TAXYR': 'TAXYR', 'LIMNETVAL': 'LIMNETVAL', 'FULCASHVAL': 'FULCASHVAL', 'PC_RESTRIC': 'PC_RESTRIC', });
lyr_Over25mil_27.set('fieldAliases', {'PARCEL': 'PARCEL', 'GISACRES': 'GISACRES', 'LINK': 'LINK', 'ADDRESS_OL': 'ADDRESS_OL', 'PARCEL_USE': 'PARCEL_USE', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'PAGE': 'PAGE', 'RECORDDATE': 'RECORDDATE', 'DOCKET': 'DOCKET', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'TAXYR': 'TAXYR', 'LIMNETVAL': 'LIMNETVAL', 'FULCASHVAL': 'FULCASHVAL', 'PC_RESTRIC': 'PC_RESTRIC', });
lyr_ApartmentsSmall_3.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'PAGE': 'TextEdit', 'RECORDDATE': 'TextEdit', 'DOCKET': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'TextEdit', 'FCV': 'TextEdit', 'PC_RESTRIC': 'TextEdit', });
lyr_ApartmentsMedium_4.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'PAGE': 'TextEdit', 'RECORDDATE': 'TextEdit', 'DOCKET': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'TextEdit', 'FCV': 'TextEdit', 'PC_RESTRIC': 'TextEdit', });
lyr_ApartmentsLarge_5.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'PAGE': 'TextEdit', 'RECORDDATE': 'TextEdit', 'DOCKET': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'TextEdit', 'FCV': 'TextEdit', 'PC_RESTRIC': 'TextEdit', });
lyr_CommonArea_6.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'PAGE': 'TextEdit', 'RECORDDATE': 'TextEdit', 'DOCKET': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'TextEdit', 'FCV': 'TextEdit', 'PC_RESTRIC': 'TextEdit', });
lyr_500k510k_7.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'PAGE': 'TextEdit', 'RECORDDATE': 'TextEdit', 'DOCKET': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNETVAL': 'TextEdit', 'FULCASHVAL': 'TextEdit', 'PC_RESTRIC': 'TextEdit', });
lyr_510k520k_8.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'PAGE': 'TextEdit', 'RECORDDATE': 'TextEdit', 'DOCKET': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNETVAL': 'TextEdit', 'FULCASHVAL': 'TextEdit', 'PC_RESTRIC': 'TextEdit', });
lyr_520k530k_9.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'PAGE': 'TextEdit', 'RECORDDATE': 'TextEdit', 'DOCKET': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNETVAL': 'TextEdit', 'FULCASHVAL': 'TextEdit', 'PC_RESTRIC': 'TextEdit', });
lyr_530k540k_10.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'PAGE': 'TextEdit', 'RECORDDATE': 'TextEdit', 'DOCKET': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNETVAL': 'TextEdit', 'FULCASHVAL': 'TextEdit', 'PC_RESTRIC': 'TextEdit', });
lyr_540k550k_11.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'PAGE': 'TextEdit', 'RECORDDATE': 'TextEdit', 'DOCKET': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNETVAL': 'TextEdit', 'FULCASHVAL': 'TextEdit', 'PC_RESTRIC': 'TextEdit', });
lyr_550k560k_12.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'PAGE': 'TextEdit', 'RECORDDATE': 'TextEdit', 'DOCKET': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNETVAL': 'TextEdit', 'FULCASHVAL': 'TextEdit', 'PC_RESTRIC': 'TextEdit', });
lyr_560k575k_13.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'PAGE': 'TextEdit', 'RECORDDATE': 'TextEdit', 'DOCKET': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNETVAL': 'TextEdit', 'FULCASHVAL': 'TextEdit', 'PC_RESTRIC': 'TextEdit', });
lyr_575k590k_14.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'PAGE': 'TextEdit', 'RECORDDATE': 'TextEdit', 'DOCKET': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNETVAL': 'TextEdit', 'FULCASHVAL': 'TextEdit', 'PC_RESTRIC': 'TextEdit', });
lyr_590k605k_15.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'PAGE': 'TextEdit', 'RECORDDATE': 'TextEdit', 'DOCKET': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNETVAL': 'TextEdit', 'FULCASHVAL': 'TextEdit', 'PC_RESTRIC': 'TextEdit', });
lyr_605k620k_16.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'PAGE': 'TextEdit', 'RECORDDATE': 'TextEdit', 'DOCKET': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNETVAL': 'TextEdit', 'FULCASHVAL': 'TextEdit', 'PC_RESTRIC': 'TextEdit', });
lyr_620k640k_17.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'PAGE': 'TextEdit', 'RECORDDATE': 'TextEdit', 'DOCKET': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNETVAL': 'TextEdit', 'FULCASHVAL': 'TextEdit', 'PC_RESTRIC': 'TextEdit', });
lyr_640k665k_18.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'PAGE': 'TextEdit', 'RECORDDATE': 'TextEdit', 'DOCKET': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNETVAL': 'TextEdit', 'FULCASHVAL': 'TextEdit', 'PC_RESTRIC': 'TextEdit', });
lyr_665k695k_19.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'PAGE': 'TextEdit', 'RECORDDATE': 'TextEdit', 'DOCKET': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNETVAL': 'TextEdit', 'FULCASHVAL': 'TextEdit', 'PC_RESTRIC': 'TextEdit', });
lyr_695k730k_20.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'PAGE': 'TextEdit', 'RECORDDATE': 'TextEdit', 'DOCKET': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNETVAL': 'TextEdit', 'FULCASHVAL': 'TextEdit', 'PC_RESTRIC': 'TextEdit', });
lyr_730k770k_21.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'PAGE': 'TextEdit', 'RECORDDATE': 'TextEdit', 'DOCKET': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNETVAL': 'TextEdit', 'FULCASHVAL': 'TextEdit', 'PC_RESTRIC': 'TextEdit', });
lyr_770k825k_22.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'PAGE': 'TextEdit', 'RECORDDATE': 'TextEdit', 'DOCKET': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNETVAL': 'TextEdit', 'FULCASHVAL': 'TextEdit', 'PC_RESTRIC': 'TextEdit', });
lyr_825k900k_23.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'PAGE': 'TextEdit', 'RECORDDATE': 'TextEdit', 'DOCKET': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNETVAL': 'TextEdit', 'FULCASHVAL': 'TextEdit', 'PC_RESTRIC': 'TextEdit', });
lyr_900k1mil_24.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'PAGE': 'TextEdit', 'RECORDDATE': 'TextEdit', 'DOCKET': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNETVAL': 'TextEdit', 'FULCASHVAL': 'TextEdit', 'PC_RESTRIC': 'TextEdit', });
lyr_1mil12mil_25.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'PAGE': 'TextEdit', 'RECORDDATE': 'TextEdit', 'DOCKET': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNETVAL': 'TextEdit', 'FULCASHVAL': 'TextEdit', 'PC_RESTRIC': 'TextEdit', });
lyr_12mil25mil_26.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'PAGE': 'TextEdit', 'RECORDDATE': 'TextEdit', 'DOCKET': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNETVAL': 'TextEdit', 'FULCASHVAL': 'TextEdit', 'PC_RESTRIC': 'TextEdit', });
lyr_Over25mil_27.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'PAGE': 'TextEdit', 'RECORDDATE': 'TextEdit', 'DOCKET': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNETVAL': 'TextEdit', 'FULCASHVAL': 'TextEdit', 'PC_RESTRIC': 'TextEdit', });
lyr_ApartmentsSmall_3.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'PAGE': 'inline label - visible with data', 'RECORDDATE': 'inline label - visible with data', 'DOCKET': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', 'PC_RESTRIC': 'inline label - visible with data', });
lyr_ApartmentsMedium_4.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'PAGE': 'inline label - visible with data', 'RECORDDATE': 'inline label - visible with data', 'DOCKET': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', 'PC_RESTRIC': 'inline label - visible with data', });
lyr_ApartmentsLarge_5.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'PAGE': 'inline label - visible with data', 'RECORDDATE': 'inline label - visible with data', 'DOCKET': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', 'PC_RESTRIC': 'inline label - visible with data', });
lyr_CommonArea_6.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'PAGE': 'inline label - visible with data', 'RECORDDATE': 'inline label - visible with data', 'DOCKET': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', 'PC_RESTRIC': 'inline label - visible with data', });
lyr_500k510k_7.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'PAGE': 'inline label - visible with data', 'RECORDDATE': 'inline label - visible with data', 'DOCKET': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNETVAL': 'inline label - visible with data', 'FULCASHVAL': 'inline label - visible with data', 'PC_RESTRIC': 'inline label - visible with data', });
lyr_510k520k_8.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'PAGE': 'inline label - visible with data', 'RECORDDATE': 'inline label - visible with data', 'DOCKET': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNETVAL': 'inline label - visible with data', 'FULCASHVAL': 'inline label - visible with data', 'PC_RESTRIC': 'inline label - visible with data', });
lyr_520k530k_9.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'PAGE': 'inline label - visible with data', 'RECORDDATE': 'inline label - visible with data', 'DOCKET': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNETVAL': 'inline label - visible with data', 'FULCASHVAL': 'inline label - visible with data', 'PC_RESTRIC': 'inline label - visible with data', });
lyr_530k540k_10.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'PAGE': 'inline label - visible with data', 'RECORDDATE': 'inline label - visible with data', 'DOCKET': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNETVAL': 'inline label - visible with data', 'FULCASHVAL': 'inline label - visible with data', 'PC_RESTRIC': 'inline label - visible with data', });
lyr_540k550k_11.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'PAGE': 'inline label - visible with data', 'RECORDDATE': 'inline label - visible with data', 'DOCKET': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNETVAL': 'inline label - visible with data', 'FULCASHVAL': 'inline label - visible with data', 'PC_RESTRIC': 'inline label - visible with data', });
lyr_550k560k_12.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'PAGE': 'inline label - visible with data', 'RECORDDATE': 'inline label - visible with data', 'DOCKET': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNETVAL': 'inline label - visible with data', 'FULCASHVAL': 'inline label - visible with data', 'PC_RESTRIC': 'inline label - visible with data', });
lyr_560k575k_13.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'PAGE': 'inline label - visible with data', 'RECORDDATE': 'inline label - visible with data', 'DOCKET': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNETVAL': 'inline label - visible with data', 'FULCASHVAL': 'inline label - visible with data', 'PC_RESTRIC': 'inline label - visible with data', });
lyr_575k590k_14.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'PAGE': 'inline label - visible with data', 'RECORDDATE': 'inline label - visible with data', 'DOCKET': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNETVAL': 'inline label - visible with data', 'FULCASHVAL': 'inline label - visible with data', 'PC_RESTRIC': 'inline label - visible with data', });
lyr_590k605k_15.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'PAGE': 'inline label - visible with data', 'RECORDDATE': 'inline label - visible with data', 'DOCKET': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNETVAL': 'inline label - visible with data', 'FULCASHVAL': 'inline label - visible with data', 'PC_RESTRIC': 'inline label - visible with data', });
lyr_605k620k_16.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'PAGE': 'inline label - visible with data', 'RECORDDATE': 'inline label - visible with data', 'DOCKET': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNETVAL': 'inline label - visible with data', 'FULCASHVAL': 'inline label - visible with data', 'PC_RESTRIC': 'inline label - visible with data', });
lyr_620k640k_17.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'PAGE': 'inline label - visible with data', 'RECORDDATE': 'inline label - visible with data', 'DOCKET': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNETVAL': 'inline label - visible with data', 'FULCASHVAL': 'inline label - visible with data', 'PC_RESTRIC': 'inline label - visible with data', });
lyr_640k665k_18.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'PAGE': 'inline label - visible with data', 'RECORDDATE': 'inline label - visible with data', 'DOCKET': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNETVAL': 'inline label - visible with data', 'FULCASHVAL': 'inline label - visible with data', 'PC_RESTRIC': 'inline label - visible with data', });
lyr_665k695k_19.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'PAGE': 'inline label - visible with data', 'RECORDDATE': 'inline label - visible with data', 'DOCKET': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNETVAL': 'inline label - visible with data', 'FULCASHVAL': 'inline label - visible with data', 'PC_RESTRIC': 'inline label - visible with data', });
lyr_695k730k_20.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'PAGE': 'inline label - visible with data', 'RECORDDATE': 'inline label - visible with data', 'DOCKET': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNETVAL': 'inline label - visible with data', 'FULCASHVAL': 'inline label - visible with data', 'PC_RESTRIC': 'inline label - visible with data', });
lyr_730k770k_21.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'PAGE': 'inline label - visible with data', 'RECORDDATE': 'inline label - visible with data', 'DOCKET': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNETVAL': 'inline label - visible with data', 'FULCASHVAL': 'inline label - visible with data', 'PC_RESTRIC': 'inline label - visible with data', });
lyr_770k825k_22.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'PAGE': 'inline label - visible with data', 'RECORDDATE': 'inline label - visible with data', 'DOCKET': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNETVAL': 'inline label - visible with data', 'FULCASHVAL': 'inline label - visible with data', 'PC_RESTRIC': 'inline label - visible with data', });
lyr_825k900k_23.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'PAGE': 'inline label - visible with data', 'RECORDDATE': 'inline label - visible with data', 'DOCKET': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNETVAL': 'inline label - visible with data', 'FULCASHVAL': 'inline label - visible with data', 'PC_RESTRIC': 'inline label - visible with data', });
lyr_900k1mil_24.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'PAGE': 'inline label - visible with data', 'RECORDDATE': 'inline label - visible with data', 'DOCKET': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNETVAL': 'inline label - visible with data', 'FULCASHVAL': 'inline label - visible with data', 'PC_RESTRIC': 'inline label - visible with data', });
lyr_1mil12mil_25.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'PAGE': 'inline label - visible with data', 'RECORDDATE': 'inline label - visible with data', 'DOCKET': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNETVAL': 'inline label - visible with data', 'FULCASHVAL': 'inline label - visible with data', 'PC_RESTRIC': 'inline label - visible with data', });
lyr_12mil25mil_26.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'PAGE': 'inline label - visible with data', 'RECORDDATE': 'inline label - visible with data', 'DOCKET': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNETVAL': 'inline label - visible with data', 'FULCASHVAL': 'inline label - visible with data', 'PC_RESTRIC': 'inline label - visible with data', });
lyr_Over25mil_27.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'PAGE': 'inline label - visible with data', 'RECORDDATE': 'inline label - visible with data', 'DOCKET': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNETVAL': 'inline label - visible with data', 'FULCASHVAL': 'inline label - visible with data', 'PC_RESTRIC': 'inline label - visible with data', });
lyr_Over25mil_27.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});