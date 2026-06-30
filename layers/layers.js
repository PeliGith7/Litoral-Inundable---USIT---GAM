var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Edificios_1 = new ol.format.GeoJSON();
var features_Edificios_1 = format_Edificios_1.readFeatures(json_Edificios_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Edificios_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Edificios_1.addFeatures(features_Edificios_1);
var lyr_Edificios_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Edificios_1, 
                style: style_Edificios_1,
                popuplayertitle: 'Edificios',
                interactive: true,
                title: '<img src="styles/legend/Edificios_1.png" /> Edificios'
            });
var format_Calles_2 = new ol.format.GeoJSON();
var features_Calles_2 = format_Calles_2.readFeatures(json_Calles_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Calles_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Calles_2.addFeatures(features_Calles_2);
var lyr_Calles_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Calles_2, 
                style: style_Calles_2,
                popuplayertitle: 'Calles',
                interactive: true,
                title: '<img src="styles/legend/Calles_2.png" /> Calles'
            });
var format_Edificios_3 = new ol.format.GeoJSON();
var features_Edificios_3 = format_Edificios_3.readFeatures(json_Edificios_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Edificios_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Edificios_3.addFeatures(features_Edificios_3);
var lyr_Edificios_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Edificios_3, 
                style: style_Edificios_3,
                popuplayertitle: 'Edificios',
                interactive: true,
                title: '<img src="styles/legend/Edificios_3.png" /> Edificios'
            });
var format_Calles_4 = new ol.format.GeoJSON();
var features_Calles_4 = format_Calles_4.readFeatures(json_Calles_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Calles_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Calles_4.addFeatures(features_Calles_4);
var lyr_Calles_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Calles_4, 
                style: style_Calles_4,
                popuplayertitle: 'Calles',
                interactive: true,
                title: '<img src="styles/legend/Calles_4.png" /> Calles'
            });
var format_casas_camino_islaCerrito_5 = new ol.format.GeoJSON();
var features_casas_camino_islaCerrito_5 = format_casas_camino_islaCerrito_5.readFeatures(json_casas_camino_islaCerrito_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_casas_camino_islaCerrito_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_casas_camino_islaCerrito_5.addFeatures(features_casas_camino_islaCerrito_5);
var lyr_casas_camino_islaCerrito_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_casas_camino_islaCerrito_5, 
                style: style_casas_camino_islaCerrito_5,
                popuplayertitle: 'casas_camino_islaCerrito',
                interactive: true,
                title: '<img src="styles/legend/casas_camino_islaCerrito_5.png" /> casas_camino_islaCerrito'
            });
var format_casas_icerrito_f5_6 = new ol.format.GeoJSON();
var features_casas_icerrito_f5_6 = format_casas_icerrito_f5_6.readFeatures(json_casas_icerrito_f5_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_casas_icerrito_f5_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_casas_icerrito_f5_6.addFeatures(features_casas_icerrito_f5_6);
var lyr_casas_icerrito_f5_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_casas_icerrito_f5_6, 
                style: style_casas_icerrito_f5_6,
                popuplayertitle: 'casas_icerrito_f5',
                interactive: true,
                title: '<img src="styles/legend/casas_icerrito_f5_6.png" /> casas_icerrito_f5'
            });
var format_casaszonarural_7 = new ol.format.GeoJSON();
var features_casaszonarural_7 = format_casaszonarural_7.readFeatures(json_casaszonarural_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_casaszonarural_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_casaszonarural_7.addFeatures(features_casaszonarural_7);
var lyr_casaszonarural_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_casaszonarural_7, 
                style: style_casaszonarural_7,
                popuplayertitle: 'casas zona rural',
                interactive: true,
                title: '<img src="styles/legend/casaszonarural_7.png" /> casas zona rural'
            });
var format_casaszonaruralycn50_8 = new ol.format.GeoJSON();
var features_casaszonaruralycn50_8 = format_casaszonaruralycn50_8.readFeatures(json_casaszonaruralycn50_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_casaszonaruralycn50_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_casaszonaruralycn50_8.addFeatures(features_casaszonaruralycn50_8);
var lyr_casaszonaruralycn50_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_casaszonaruralycn50_8, 
                style: style_casaszonaruralycn50_8,
                popuplayertitle: 'casas zona rural y cn50',
                interactive: true,
                title: '<img src="styles/legend/casaszonaruralycn50_8.png" /> casas zona rural y cn50'
            });
var format_DEFENSA__9 = new ol.format.GeoJSON();
var features_DEFENSA__9 = format_DEFENSA__9.readFeatures(json_DEFENSA__9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DEFENSA__9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEFENSA__9.addFeatures(features_DEFENSA__9);
var lyr_DEFENSA__9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DEFENSA__9, 
                style: style_DEFENSA__9,
                popuplayertitle: 'DEFENSA_',
                interactive: true,
                title: '<img src="styles/legend/DEFENSA__9.png" /> DEFENSA_'
            });
var format_cn_zona_litoral_mi50_10 = new ol.format.GeoJSON();
var features_cn_zona_litoral_mi50_10 = format_cn_zona_litoral_mi50_10.readFeatures(json_cn_zona_litoral_mi50_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cn_zona_litoral_mi50_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cn_zona_litoral_mi50_10.addFeatures(features_cn_zona_litoral_mi50_10);
var lyr_cn_zona_litoral_mi50_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cn_zona_litoral_mi50_10, 
                style: style_cn_zona_litoral_mi50_10,
                popuplayertitle: 'cn_zona_litoral_mi50',
                interactive: true,
                title: '<img src="styles/legend/cn_zona_litoral_mi50_10.png" /> cn_zona_litoral_mi50'
            });
var format_caminos_vilelas_isla_sotoycn50_11 = new ol.format.GeoJSON();
var features_caminos_vilelas_isla_sotoycn50_11 = format_caminos_vilelas_isla_sotoycn50_11.readFeatures(json_caminos_vilelas_isla_sotoycn50_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_caminos_vilelas_isla_sotoycn50_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_caminos_vilelas_isla_sotoycn50_11.addFeatures(features_caminos_vilelas_isla_sotoycn50_11);
var lyr_caminos_vilelas_isla_sotoycn50_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_caminos_vilelas_isla_sotoycn50_11, 
                style: style_caminos_vilelas_isla_sotoycn50_11,
                popuplayertitle: 'caminos_vilelas_isla_soto y cn50',
                interactive: true,
                title: '<img src="styles/legend/caminos_vilelas_isla_sotoycn50_11.png" /> caminos_vilelas_isla_soto y cn50'
            });
var format_caminos_vilelas_cniatacuariycn50_12 = new ol.format.GeoJSON();
var features_caminos_vilelas_cniatacuariycn50_12 = format_caminos_vilelas_cniatacuariycn50_12.readFeatures(json_caminos_vilelas_cniatacuariycn50_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_caminos_vilelas_cniatacuariycn50_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_caminos_vilelas_cniatacuariycn50_12.addFeatures(features_caminos_vilelas_cniatacuariycn50_12);
var lyr_caminos_vilelas_cniatacuariycn50_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_caminos_vilelas_cniatacuariycn50_12, 
                style: style_caminos_vilelas_cniatacuariycn50_12,
                popuplayertitle: 'caminos_vilelas_cniatacuari y cn50',
                interactive: true,
                title: '<img src="styles/legend/caminos_vilelas_cniatacuariycn50_12.png" /> caminos_vilelas_cniatacuari y cn50'
            });
var format_LMT132Kv_13 = new ol.format.GeoJSON();
var features_LMT132Kv_13 = format_LMT132Kv_13.readFeatures(json_LMT132Kv_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LMT132Kv_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LMT132Kv_13.addFeatures(features_LMT132Kv_13);
var lyr_LMT132Kv_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LMT132Kv_13, 
                style: style_LMT132Kv_13,
                popuplayertitle: 'LMT 13,2Kv',
                interactive: true,
                title: '<img src="styles/legend/LMT132Kv_13.png" /> LMT 13,2Kv'
            });
var format_LMT132Kvycn50_14 = new ol.format.GeoJSON();
var features_LMT132Kvycn50_14 = format_LMT132Kvycn50_14.readFeatures(json_LMT132Kvycn50_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LMT132Kvycn50_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LMT132Kvycn50_14.addFeatures(features_LMT132Kvycn50_14);
var lyr_LMT132Kvycn50_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LMT132Kvycn50_14, 
                style: style_LMT132Kvycn50_14,
                popuplayertitle: 'LMT 13,2Kv y cn50',
                interactive: true,
                title: '<img src="styles/legend/LMT132Kvycn50_14.png" /> LMT 13,2Kv y cn50'
            });
var format_SETycn50amenosde200m_15 = new ol.format.GeoJSON();
var features_SETycn50amenosde200m_15 = format_SETycn50amenosde200m_15.readFeatures(json_SETycn50amenosde200m_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SETycn50amenosde200m_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SETycn50amenosde200m_15.addFeatures(features_SETycn50amenosde200m_15);
var lyr_SETycn50amenosde200m_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SETycn50amenosde200m_15, 
                style: style_SETycn50amenosde200m_15,
                popuplayertitle: 'SET y cn50 a menos de 200m',
                interactive: true,
                title: '<img src="styles/legend/SETycn50amenosde200m_15.png" /> SET y cn50 a menos de 200m'
            });
var format_SETycn60amenosde200m_16 = new ol.format.GeoJSON();
var features_SETycn60amenosde200m_16 = format_SETycn60amenosde200m_16.readFeatures(json_SETycn60amenosde200m_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SETycn60amenosde200m_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SETycn60amenosde200m_16.addFeatures(features_SETycn60amenosde200m_16);
var lyr_SETycn60amenosde200m_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SETycn60amenosde200m_16, 
                style: style_SETycn60amenosde200m_16,
                popuplayertitle: 'SET y cn60 a menos de 200m',
                interactive: true,
                title: '<img src="styles/legend/SETycn60amenosde200m_16.png" /> SET y cn60 a menos de 200m'
            });
var group_INFRAESTRUCTURAELECTRICA = new ol.layer.Group({
                                layers: [lyr_LMT132Kv_13,lyr_LMT132Kvycn50_14,lyr_SETycn50amenosde200m_15,lyr_SETycn60amenosde200m_16,],
                                fold: 'open',
                                title: 'INFRAESTRUCTURA ELECTRICA'});
var group_RutasCaminos = new ol.layer.Group({
                                layers: [lyr_caminos_vilelas_isla_sotoycn50_11,lyr_caminos_vilelas_cniatacuariycn50_12,],
                                fold: 'open',
                                title: 'Rutas-Caminos'});
var group_IGN = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'IGN'});
var group_CurvasdeNivel = new ol.layer.Group({
                                layers: [lyr_cn_zona_litoral_mi50_10,],
                                fold: 'open',
                                title: 'Curvas de Nivel'});
var group_HIDROLOGIA = new ol.layer.Group({
                                layers: [lyr_DEFENSA__9,],
                                fold: 'open',
                                title: 'HIDROLOGIA'});
var group_ZonaRural = new ol.layer.Group({
                                layers: [lyr_casaszonarural_7,lyr_casaszonaruralycn50_8,],
                                fold: 'open',
                                title: 'ZonaRural'});
var group_CasasCaminoICerrito = new ol.layer.Group({
                                layers: [lyr_casas_camino_islaCerrito_5,lyr_casas_icerrito_f5_6,],
                                fold: 'open',
                                title: 'CasasCaminoICerrito'});
var group_LaLeonesaLasPalmas = new ol.layer.Group({
                                layers: [lyr_Edificios_1,lyr_Calles_2,lyr_Edificios_3,lyr_Calles_4,],
                                fold: 'open',
                                title: 'LaLeonesaLasPalmas'});

lyr_OpenStreetMap_0.setVisible(true);lyr_Edificios_1.setVisible(true);lyr_Calles_2.setVisible(true);lyr_Edificios_3.setVisible(true);lyr_Calles_4.setVisible(true);lyr_casas_camino_islaCerrito_5.setVisible(true);lyr_casas_icerrito_f5_6.setVisible(true);lyr_casaszonarural_7.setVisible(true);lyr_casaszonaruralycn50_8.setVisible(true);lyr_DEFENSA__9.setVisible(true);lyr_cn_zona_litoral_mi50_10.setVisible(true);lyr_caminos_vilelas_isla_sotoycn50_11.setVisible(true);lyr_caminos_vilelas_cniatacuariycn50_12.setVisible(true);lyr_LMT132Kv_13.setVisible(true);lyr_LMT132Kvycn50_14.setVisible(true);lyr_SETycn50amenosde200m_15.setVisible(true);lyr_SETycn60amenosde200m_16.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_LaLeonesaLasPalmas,group_CasasCaminoICerrito,group_ZonaRural,group_HIDROLOGIA,group_CurvasdeNivel,group_RutasCaminos,group_INFRAESTRUCTURAELECTRICA];
lyr_Edificios_1.set('fieldAliases', {'FID': 'FID', });
lyr_Calles_2.set('fieldAliases', {'nombre': 'nombre', 'tipo_via': 'tipo_via', });
lyr_Edificios_3.set('fieldAliases', {'FID': 'FID', });
lyr_Calles_4.set('fieldAliases', {'nombre': 'nombre', 'tipo_via': 'tipo_via', });
lyr_casas_camino_islaCerrito_5.set('fieldAliases', {'fid': 'fid', });
lyr_casas_icerrito_f5_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'waterway': 'waterway', 'name': 'name', 'amenity': 'amenity', 'brand': 'brand', 'wheelchair': 'wheelchair', 'tourism': 'tourism', });
lyr_casaszonarural_7.set('fieldAliases', {'id': 'id', 'Cliente': 'Cliente', 'Suministro': 'Suministro', 'casa': 'casa', 'nobre': 'nobre', 'layer': 'layer', 'path': 'path', });
lyr_casaszonaruralycn50_8.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'waterway': 'waterway', 'name': 'name', 'amenity': 'amenity', 'brand': 'brand', 'wheelchair': 'wheelchair', 'tourism': 'tourism', 'LIN_fid': 'LIN_fid', 'LIN_ID': 'LIN_ID', 'LIN_ELEV': 'LIN_ELEV', 'id': 'id', 'nobre': 'nobre', 'Cliente': 'Cliente', 'Suministro': 'Suministro', 'layer': 'layer', 'path': 'path', });
lyr_DEFENSA__9.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'COTA_MOP': 'COTA_MOP', 'TIPO': 'TIPO', });
lyr_cn_zona_litoral_mi50_10.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_caminos_vilelas_isla_sotoycn50_11.set('fieldAliases', {'ID_NODO': 'ID_NODO', 'X': 'X', 'Y': 'Y', 'A_Name': 'A_Name', 'A_dist': 'A_dist', 'B_fid': 'B_fid', 'B_ID': 'B_ID', 'B_ELEV': 'B_ELEV', });
lyr_caminos_vilelas_cniatacuariycn50_12.set('fieldAliases', {'ID_NODO': 'ID_NODO', 'X': 'X', 'Y': 'Y', 'A_Name': 'A_Name', 'A_descript': 'A_descript', 'A_timestam': 'A_timestam', 'A_begin': 'A_begin', 'A_end': 'A_end', 'A_altitude': 'A_altitude', 'A_tessella': 'A_tessella', 'A_extrude': 'A_extrude', 'A_visibili': 'A_visibili', 'A_drawOrde': 'A_drawOrde', 'A_icon': 'A_icon', 'A_distanci': 'A_distanci', 'B_fid': 'B_fid', 'B_ID': 'B_ID', 'B_ELEV': 'B_ELEV', });
lyr_LMT132Kv_13.set('fieldAliases', {'ID': 'ID', 'Simbolo': 'Simbolo', 'Tipo_Siste': 'Tipo_Siste', 'Codigo_Sis': 'Codigo_Sis', 'Capa': 'Capa', 'Fase': 'Fase', 'Empresa_MT': 'Empresa_MT', 'Sucursal_M': 'Sucursal_M', 'Alimentado': 'Alimentado', 'Empresa_BT': 'Empresa_BT', 'Sucursal_B': 'Sucursal_B', 'Alimenta_1': 'Alimenta_1', 'Zona': 'Zona', 'Tipo_Terre': 'Tipo_Terre', 'Disposicio': 'Disposicio', 'Longitud': 'Longitud', 'Longitud_O': 'Longitud_O', 'Nodo_Inici': 'Nodo_Inici', 'Nodo_Final': 'Nodo_Final', 'Funcion': 'Funcion', 'Tipo_Propi': 'Tipo_Propi', 'Propiedad': 'Propiedad', 'Propiedad_': 'Propiedad_', 'Propieda_1': 'Propieda_1', 'Propieda_2': 'Propieda_2', 'Propieda_3': 'Propieda_3', 'Propieda_4': 'Propieda_4', 'Propieda_5': 'Propieda_5', 'Propieda_6': 'Propieda_6', 'Conductor_': 'Conductor_', 'Descripcio': 'Descripcio', 'Tipo': 'Tipo', 'Caracteris': 'Caracteris', 'Clase': 'Clase', 'Seccion_Fa': 'Seccion_Fa', 'Material_F': 'Material_F', 'Seccion__1': 'Seccion__1', 'Material_1': 'Material_1', 'Seccion__2': 'Seccion__2', 'Material_2': 'Material_2', 'Seccion_AP': 'Seccion_AP', 'Material_A': 'Material_A', 'Seccion__3': 'Seccion__3', 'Material_3': 'Material_3', 'Seccion_Ne': 'Seccion_Ne', 'Material_N': 'Material_N', 'Tension': 'Tension', 'Costo_Km': 'Costo_Km', 'Carga': 'Carga', 'Corriente_': 'Corriente_', 'Corrient_1': 'Corrient_1', 'Corrient_2': 'Corrient_2', 'Corrient_3': 'Corrient_3', 'Temp_Max_C': 'Temp_Max_C', 'Resistenci': 'Resistenci', 'Resisten_1': 'Resisten_1', 'Reactancia': 'Reactancia', 'Reactanc_1': 'Reactanc_1', 'Fecha_Inst': 'Fecha_Inst', 'Fecha_Crea': 'Fecha_Crea', 'Postacion': 'Postacion', 'Resolucion': 'Resolucion', 'Postacion_': 'Postacion_', 'Postacio_1': 'Postacio_1', 'Postacio_2': 'Postacio_2', 'Postacio_3': 'Postacio_3', 'Postacio_4': 'Postacio_4', 'DA_Alfa_1': 'DA_Alfa_1', 'DA_Alfa_2': 'DA_Alfa_2', 'DA_Alfa_3': 'DA_Alfa_3', 'DA_Alfa_4': 'DA_Alfa_4', 'DA_Numeric': 'DA_Numeric', 'DA_Numer_1': 'DA_Numer_1', 'DA_Numer_2': 'DA_Numer_2', 'DA_Numer_3': 'DA_Numer_3', 'DA_Fecha_1': 'DA_Fecha_1', 'DA_Fecha_2': 'DA_Fecha_2', 'Proyecto': 'Proyecto', 'Q_Nodos': 'Q_Nodos', 'Coord_X1': 'Coord_X1', 'Coord_Y1': 'Coord_Y1', 'Coord_X2': 'Coord_X2', 'Coord_Y2': 'Coord_Y2', 'Accion': 'Accion', 'Linea': 'Linea', '_id': '_id', 'lin_pos_x': 'lin_pos_x', 'lin_pos_y': 'lin_pos_y', });
lyr_LMT132Kvycn50_14.set('fieldAliases', {'ID_NODO': 'ID_NODO', 'X': 'X', 'Y': 'Y', 'A_ID': 'A_ID', 'A_Simbolo': 'A_Simbolo', 'A_Tipo_Sis': 'A_Tipo_Sis', 'A_Codigo_S': 'A_Codigo_S', 'A_Capa': 'A_Capa', 'A_Fase': 'A_Fase', 'A_Empresa_': 'A_Empresa_', 'A_Sucursal': 'A_Sucursal', 'A_Alimenta': 'A_Alimenta', 'A_Empres_1': 'A_Empres_1', 'A_Sucurs_1': 'A_Sucurs_1', 'A_Alimen_1': 'A_Alimen_1', 'A_Zona': 'A_Zona', 'A_Tipo_Ter': 'A_Tipo_Ter', 'A_Disposic': 'A_Disposic', 'A_Longitud': 'A_Longitud', 'A_Longit_1': 'A_Longit_1', 'A_Nodo_Ini': 'A_Nodo_Ini', 'A_Nodo_Fin': 'A_Nodo_Fin', 'A_Funcion': 'A_Funcion', 'A_Tipo_Pro': 'A_Tipo_Pro', 'A_Propieda': 'A_Propieda', 'A_Propie_1': 'A_Propie_1', 'A_Propie_2': 'A_Propie_2', 'A_Propie_3': 'A_Propie_3', 'A_Propie_4': 'A_Propie_4', 'A_Propie_5': 'A_Propie_5', 'A_Propie_6': 'A_Propie_6', 'A_Propie_7': 'A_Propie_7', 'A_Conducto': 'A_Conducto', 'A_Descripc': 'A_Descripc', 'A_Tipo': 'A_Tipo', 'A_Caracter': 'A_Caracter', 'A_Clase': 'A_Clase', 'A_Seccion_': 'A_Seccion_', 'A_Material': 'A_Material', 'A_Seccio_1': 'A_Seccio_1', 'A_Materi_1': 'A_Materi_1', 'A_Seccio_2': 'A_Seccio_2', 'A_Materi_2': 'A_Materi_2', 'A_Seccio_3': 'A_Seccio_3', 'A_Materi_3': 'A_Materi_3', 'A_Seccio_4': 'A_Seccio_4', 'A_Materi_4': 'A_Materi_4', 'A_Seccio_5': 'A_Seccio_5', 'A_Materi_5': 'A_Materi_5', 'A_Tension': 'A_Tension', 'A_Costo_Km': 'A_Costo_Km', 'A_Carga': 'A_Carga', 'A_Corrient': 'A_Corrient', 'A_Corrie_1': 'A_Corrie_1', 'A_Corrie_2': 'A_Corrie_2', 'A_Corrie_3': 'A_Corrie_3', 'A_Temp_Max': 'A_Temp_Max', 'A_Resisten': 'A_Resisten', 'A_Resist_1': 'A_Resist_1', 'A_Reactanc': 'A_Reactanc', 'A_Reacta_1': 'A_Reacta_1', 'A_Fecha_In': 'A_Fecha_In', 'A_Fecha_Cr': 'A_Fecha_Cr', 'A_Postacio': 'A_Postacio', 'A_Resoluci': 'A_Resoluci', 'A_Postac_1': 'A_Postac_1', 'A_Postac_2': 'A_Postac_2', 'A_Postac_3': 'A_Postac_3', 'A_Postac_4': 'A_Postac_4', 'A_Postac_5': 'A_Postac_5', 'A_DA_Alfa_': 'A_DA_Alfa_', 'A_DA_Alf_1': 'A_DA_Alf_1', 'A_DA_Alf_2': 'A_DA_Alf_2', 'A_DA_Alf_3': 'A_DA_Alf_3', 'A_DA_Numer': 'A_DA_Numer', 'A_DA_Num_1': 'A_DA_Num_1', 'A_DA_Num_2': 'A_DA_Num_2', 'A_DA_Num_3': 'A_DA_Num_3', 'A_DA_Fecha': 'A_DA_Fecha', 'A_DA_Fec_1': 'A_DA_Fec_1', 'A_Proyecto': 'A_Proyecto', 'A_Q_Nodos': 'A_Q_Nodos', 'A_Coord_X1': 'A_Coord_X1', 'A_Coord_Y1': 'A_Coord_Y1', 'A_Coord_X2': 'A_Coord_X2', 'A_Coord_Y2': 'A_Coord_Y2', 'A_Accion': 'A_Accion', 'A_Linea': 'A_Linea', 'A__id': 'A__id', 'A_lin_pos_': 'A_lin_pos_', 'A_lin_po_1': 'A_lin_po_1', 'B_fid': 'B_fid', 'B_ID': 'B_ID', 'B_ELEV': 'B_ELEV', });
lyr_SETycn50amenosde200m_15.set('fieldAliases', {'ID': 'ID', 'Capa': 'Capa', 'Nodo': 'Nodo', 'ID_Element': 'ID_Element', 'Codigo': 'Codigo', 'dist_curva': 'dist_curva', 'cota_curva': 'cota_curva', 'dentro_dis': 'dentro_dis', });
lyr_SETycn60amenosde200m_16.set('fieldAliases', {'ID': 'ID', 'Capa': 'Capa', 'Nodo': 'Nodo', 'ID_Element': 'ID_Element', 'Codigo': 'Codigo', 'dist_curva': 'dist_curva', 'cota_curva': 'cota_curva', 'dentro_dis': 'dentro_dis', });
lyr_Edificios_1.set('fieldImages', {'FID': '', });
lyr_Calles_2.set('fieldImages', {'nombre': '', 'tipo_via': '', });
lyr_Edificios_3.set('fieldImages', {'FID': '', });
lyr_Calles_4.set('fieldImages', {'nombre': '', 'tipo_via': '', });
lyr_casas_camino_islaCerrito_5.set('fieldImages', {'fid': '', });
lyr_casas_icerrito_f5_6.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'waterway': '', 'name': '', 'amenity': '', 'brand': '', 'wheelchair': '', 'tourism': '', });
lyr_casaszonarural_7.set('fieldImages', {'id': '', 'Cliente': '', 'Suministro': '', 'casa': '', 'nobre': '', 'layer': '', 'path': '', });
lyr_casaszonaruralycn50_8.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'waterway': '', 'name': '', 'amenity': '', 'brand': '', 'wheelchair': '', 'tourism': '', 'LIN_fid': '', 'LIN_ID': '', 'LIN_ELEV': '', 'id': '', 'nobre': '', 'Cliente': '', 'Suministro': '', 'layer': '', 'path': '', });
lyr_DEFENSA__9.set('fieldImages', {'NOMBRE': '', 'COTA_MOP': '', 'TIPO': '', });
lyr_cn_zona_litoral_mi50_10.set('fieldImages', {'fid': '', 'ID': '', 'ELEV': '', });
lyr_caminos_vilelas_isla_sotoycn50_11.set('fieldImages', {'ID_NODO': '', 'X': '', 'Y': '', 'A_Name': '', 'A_dist': '', 'B_fid': '', 'B_ID': '', 'B_ELEV': '', });
lyr_caminos_vilelas_cniatacuariycn50_12.set('fieldImages', {'ID_NODO': '', 'X': '', 'Y': '', 'A_Name': '', 'A_descript': '', 'A_timestam': '', 'A_begin': '', 'A_end': '', 'A_altitude': '', 'A_tessella': '', 'A_extrude': '', 'A_visibili': '', 'A_drawOrde': '', 'A_icon': '', 'A_distanci': '', 'B_fid': '', 'B_ID': '', 'B_ELEV': '', });
lyr_LMT132Kv_13.set('fieldImages', {'ID': '', 'Simbolo': '', 'Tipo_Siste': '', 'Codigo_Sis': '', 'Capa': '', 'Fase': '', 'Empresa_MT': '', 'Sucursal_M': '', 'Alimentado': '', 'Empresa_BT': '', 'Sucursal_B': '', 'Alimenta_1': '', 'Zona': '', 'Tipo_Terre': '', 'Disposicio': '', 'Longitud': '', 'Longitud_O': '', 'Nodo_Inici': '', 'Nodo_Final': '', 'Funcion': '', 'Tipo_Propi': '', 'Propiedad': '', 'Propiedad_': '', 'Propieda_1': '', 'Propieda_2': '', 'Propieda_3': '', 'Propieda_4': '', 'Propieda_5': '', 'Propieda_6': '', 'Conductor_': '', 'Descripcio': '', 'Tipo': '', 'Caracteris': '', 'Clase': '', 'Seccion_Fa': '', 'Material_F': '', 'Seccion__1': '', 'Material_1': '', 'Seccion__2': '', 'Material_2': '', 'Seccion_AP': '', 'Material_A': '', 'Seccion__3': '', 'Material_3': '', 'Seccion_Ne': '', 'Material_N': '', 'Tension': '', 'Costo_Km': '', 'Carga': '', 'Corriente_': '', 'Corrient_1': '', 'Corrient_2': '', 'Corrient_3': '', 'Temp_Max_C': '', 'Resistenci': '', 'Resisten_1': '', 'Reactancia': '', 'Reactanc_1': '', 'Fecha_Inst': '', 'Fecha_Crea': '', 'Postacion': '', 'Resolucion': '', 'Postacion_': '', 'Postacio_1': '', 'Postacio_2': '', 'Postacio_3': '', 'Postacio_4': '', 'DA_Alfa_1': '', 'DA_Alfa_2': '', 'DA_Alfa_3': '', 'DA_Alfa_4': '', 'DA_Numeric': '', 'DA_Numer_1': '', 'DA_Numer_2': '', 'DA_Numer_3': '', 'DA_Fecha_1': '', 'DA_Fecha_2': '', 'Proyecto': '', 'Q_Nodos': '', 'Coord_X1': '', 'Coord_Y1': '', 'Coord_X2': '', 'Coord_Y2': '', 'Accion': '', 'Linea': '', '_id': '', 'lin_pos_x': '', 'lin_pos_y': '', });
lyr_LMT132Kvycn50_14.set('fieldImages', {'ID_NODO': '', 'X': '', 'Y': '', 'A_ID': '', 'A_Simbolo': '', 'A_Tipo_Sis': '', 'A_Codigo_S': '', 'A_Capa': '', 'A_Fase': '', 'A_Empresa_': '', 'A_Sucursal': '', 'A_Alimenta': '', 'A_Empres_1': '', 'A_Sucurs_1': '', 'A_Alimen_1': '', 'A_Zona': '', 'A_Tipo_Ter': '', 'A_Disposic': '', 'A_Longitud': '', 'A_Longit_1': '', 'A_Nodo_Ini': '', 'A_Nodo_Fin': '', 'A_Funcion': '', 'A_Tipo_Pro': '', 'A_Propieda': '', 'A_Propie_1': '', 'A_Propie_2': '', 'A_Propie_3': '', 'A_Propie_4': '', 'A_Propie_5': '', 'A_Propie_6': '', 'A_Propie_7': '', 'A_Conducto': '', 'A_Descripc': '', 'A_Tipo': '', 'A_Caracter': '', 'A_Clase': '', 'A_Seccion_': '', 'A_Material': '', 'A_Seccio_1': '', 'A_Materi_1': '', 'A_Seccio_2': '', 'A_Materi_2': '', 'A_Seccio_3': '', 'A_Materi_3': '', 'A_Seccio_4': '', 'A_Materi_4': '', 'A_Seccio_5': '', 'A_Materi_5': '', 'A_Tension': '', 'A_Costo_Km': '', 'A_Carga': '', 'A_Corrient': '', 'A_Corrie_1': '', 'A_Corrie_2': '', 'A_Corrie_3': '', 'A_Temp_Max': '', 'A_Resisten': '', 'A_Resist_1': '', 'A_Reactanc': '', 'A_Reacta_1': '', 'A_Fecha_In': '', 'A_Fecha_Cr': '', 'A_Postacio': '', 'A_Resoluci': '', 'A_Postac_1': '', 'A_Postac_2': '', 'A_Postac_3': '', 'A_Postac_4': '', 'A_Postac_5': '', 'A_DA_Alfa_': '', 'A_DA_Alf_1': '', 'A_DA_Alf_2': '', 'A_DA_Alf_3': '', 'A_DA_Numer': '', 'A_DA_Num_1': '', 'A_DA_Num_2': '', 'A_DA_Num_3': '', 'A_DA_Fecha': '', 'A_DA_Fec_1': '', 'A_Proyecto': '', 'A_Q_Nodos': '', 'A_Coord_X1': '', 'A_Coord_Y1': '', 'A_Coord_X2': '', 'A_Coord_Y2': '', 'A_Accion': '', 'A_Linea': '', 'A__id': '', 'A_lin_pos_': '', 'A_lin_po_1': '', 'B_fid': '', 'B_ID': '', 'B_ELEV': '', });
lyr_SETycn50amenosde200m_15.set('fieldImages', {'ID': '', 'Capa': '', 'Nodo': '', 'ID_Element': '', 'Codigo': '', 'dist_curva': '', 'cota_curva': '', 'dentro_dis': '', });
lyr_SETycn60amenosde200m_16.set('fieldImages', {'ID': '', 'Capa': '', 'Nodo': '', 'ID_Element': '', 'Codigo': '', 'dist_curva': '', 'cota_curva': '', 'dentro_dis': '', });
lyr_Edificios_1.set('fieldLabels', {'FID': 'no label', });
lyr_Calles_2.set('fieldLabels', {'nombre': 'no label', 'tipo_via': 'no label', });
lyr_Edificios_3.set('fieldLabels', {'FID': 'no label', });
lyr_Calles_4.set('fieldLabels', {'nombre': 'no label', 'tipo_via': 'no label', });
lyr_casas_camino_islaCerrito_5.set('fieldLabels', {'fid': 'no label', });
lyr_casas_icerrito_f5_6.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'waterway': 'no label', 'name': 'no label', 'amenity': 'no label', 'brand': 'no label', 'wheelchair': 'no label', 'tourism': 'no label', });
lyr_casaszonarural_7.set('fieldLabels', {'id': 'no label', 'Cliente': 'no label', 'Suministro': 'no label', 'casa': 'no label', 'nobre': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_casaszonaruralycn50_8.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'waterway': 'no label', 'name': 'no label', 'amenity': 'no label', 'brand': 'no label', 'wheelchair': 'no label', 'tourism': 'no label', 'LIN_fid': 'no label', 'LIN_ID': 'no label', 'LIN_ELEV': 'inline label - visible with data', 'id': 'no label', 'nobre': 'no label', 'Cliente': 'no label', 'Suministro': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_DEFENSA__9.set('fieldLabels', {'NOMBRE': 'no label', 'COTA_MOP': 'inline label - visible with data', 'TIPO': 'no label', });
lyr_cn_zona_litoral_mi50_10.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'inline label - visible with data', });
lyr_caminos_vilelas_isla_sotoycn50_11.set('fieldLabels', {'ID_NODO': 'no label', 'X': 'no label', 'Y': 'no label', 'A_Name': 'no label', 'A_dist': 'no label', 'B_fid': 'no label', 'B_ID': 'no label', 'B_ELEV': 'inline label - visible with data', });
lyr_caminos_vilelas_cniatacuariycn50_12.set('fieldLabels', {'ID_NODO': 'no label', 'X': 'no label', 'Y': 'no label', 'A_Name': 'no label', 'A_descript': 'no label', 'A_timestam': 'no label', 'A_begin': 'no label', 'A_end': 'no label', 'A_altitude': 'no label', 'A_tessella': 'no label', 'A_extrude': 'no label', 'A_visibili': 'no label', 'A_drawOrde': 'no label', 'A_icon': 'no label', 'A_distanci': 'no label', 'B_fid': 'no label', 'B_ID': 'no label', 'B_ELEV': 'inline label - visible with data', });
lyr_LMT132Kv_13.set('fieldLabels', {'ID': 'header label - visible with data', 'Simbolo': 'no label', 'Tipo_Siste': 'no label', 'Codigo_Sis': 'no label', 'Capa': 'no label', 'Fase': 'no label', 'Empresa_MT': 'no label', 'Sucursal_M': 'no label', 'Alimentado': 'no label', 'Empresa_BT': 'no label', 'Sucursal_B': 'no label', 'Alimenta_1': 'no label', 'Zona': 'no label', 'Tipo_Terre': 'no label', 'Disposicio': 'no label', 'Longitud': 'no label', 'Longitud_O': 'no label', 'Nodo_Inici': 'no label', 'Nodo_Final': 'no label', 'Funcion': 'no label', 'Tipo_Propi': 'no label', 'Propiedad': 'no label', 'Propiedad_': 'no label', 'Propieda_1': 'no label', 'Propieda_2': 'no label', 'Propieda_3': 'no label', 'Propieda_4': 'no label', 'Propieda_5': 'no label', 'Propieda_6': 'no label', 'Conductor_': 'no label', 'Descripcio': 'no label', 'Tipo': 'no label', 'Caracteris': 'no label', 'Clase': 'no label', 'Seccion_Fa': 'no label', 'Material_F': 'no label', 'Seccion__1': 'no label', 'Material_1': 'no label', 'Seccion__2': 'no label', 'Material_2': 'no label', 'Seccion_AP': 'no label', 'Material_A': 'no label', 'Seccion__3': 'no label', 'Material_3': 'no label', 'Seccion_Ne': 'no label', 'Material_N': 'no label', 'Tension': 'no label', 'Costo_Km': 'no label', 'Carga': 'no label', 'Corriente_': 'no label', 'Corrient_1': 'no label', 'Corrient_2': 'no label', 'Corrient_3': 'no label', 'Temp_Max_C': 'no label', 'Resistenci': 'no label', 'Resisten_1': 'no label', 'Reactancia': 'no label', 'Reactanc_1': 'no label', 'Fecha_Inst': 'no label', 'Fecha_Crea': 'no label', 'Postacion': 'no label', 'Resolucion': 'no label', 'Postacion_': 'no label', 'Postacio_1': 'no label', 'Postacio_2': 'no label', 'Postacio_3': 'no label', 'Postacio_4': 'no label', 'DA_Alfa_1': 'no label', 'DA_Alfa_2': 'no label', 'DA_Alfa_3': 'no label', 'DA_Alfa_4': 'no label', 'DA_Numeric': 'no label', 'DA_Numer_1': 'no label', 'DA_Numer_2': 'no label', 'DA_Numer_3': 'no label', 'DA_Fecha_1': 'no label', 'DA_Fecha_2': 'no label', 'Proyecto': 'no label', 'Q_Nodos': 'no label', 'Coord_X1': 'no label', 'Coord_Y1': 'no label', 'Coord_X2': 'no label', 'Coord_Y2': 'no label', 'Accion': 'no label', 'Linea': 'no label', '_id': 'no label', 'lin_pos_x': 'no label', 'lin_pos_y': 'no label', });
lyr_LMT132Kvycn50_14.set('fieldLabels', {'ID_NODO': 'no label', 'X': 'no label', 'Y': 'no label', 'A_ID': 'no label', 'A_Simbolo': 'no label', 'A_Tipo_Sis': 'no label', 'A_Codigo_S': 'no label', 'A_Capa': 'no label', 'A_Fase': 'no label', 'A_Empresa_': 'no label', 'A_Sucursal': 'no label', 'A_Alimenta': 'no label', 'A_Empres_1': 'no label', 'A_Sucurs_1': 'no label', 'A_Alimen_1': 'no label', 'A_Zona': 'no label', 'A_Tipo_Ter': 'no label', 'A_Disposic': 'no label', 'A_Longitud': 'no label', 'A_Longit_1': 'no label', 'A_Nodo_Ini': 'no label', 'A_Nodo_Fin': 'no label', 'A_Funcion': 'no label', 'A_Tipo_Pro': 'no label', 'A_Propieda': 'no label', 'A_Propie_1': 'no label', 'A_Propie_2': 'no label', 'A_Propie_3': 'no label', 'A_Propie_4': 'no label', 'A_Propie_5': 'no label', 'A_Propie_6': 'no label', 'A_Propie_7': 'no label', 'A_Conducto': 'no label', 'A_Descripc': 'no label', 'A_Tipo': 'no label', 'A_Caracter': 'no label', 'A_Clase': 'no label', 'A_Seccion_': 'no label', 'A_Material': 'no label', 'A_Seccio_1': 'no label', 'A_Materi_1': 'no label', 'A_Seccio_2': 'no label', 'A_Materi_2': 'no label', 'A_Seccio_3': 'no label', 'A_Materi_3': 'no label', 'A_Seccio_4': 'no label', 'A_Materi_4': 'no label', 'A_Seccio_5': 'no label', 'A_Materi_5': 'no label', 'A_Tension': 'no label', 'A_Costo_Km': 'no label', 'A_Carga': 'no label', 'A_Corrient': 'no label', 'A_Corrie_1': 'no label', 'A_Corrie_2': 'no label', 'A_Corrie_3': 'no label', 'A_Temp_Max': 'no label', 'A_Resisten': 'no label', 'A_Resist_1': 'no label', 'A_Reactanc': 'no label', 'A_Reacta_1': 'no label', 'A_Fecha_In': 'no label', 'A_Fecha_Cr': 'no label', 'A_Postacio': 'no label', 'A_Resoluci': 'no label', 'A_Postac_1': 'no label', 'A_Postac_2': 'no label', 'A_Postac_3': 'no label', 'A_Postac_4': 'no label', 'A_Postac_5': 'no label', 'A_DA_Alfa_': 'no label', 'A_DA_Alf_1': 'no label', 'A_DA_Alf_2': 'no label', 'A_DA_Alf_3': 'no label', 'A_DA_Numer': 'no label', 'A_DA_Num_1': 'no label', 'A_DA_Num_2': 'no label', 'A_DA_Num_3': 'no label', 'A_DA_Fecha': 'no label', 'A_DA_Fec_1': 'no label', 'A_Proyecto': 'no label', 'A_Q_Nodos': 'no label', 'A_Coord_X1': 'no label', 'A_Coord_Y1': 'no label', 'A_Coord_X2': 'no label', 'A_Coord_Y2': 'no label', 'A_Accion': 'no label', 'A_Linea': 'inline label - visible with data', 'A__id': 'inline label - visible with data', 'A_lin_pos_': 'no label', 'A_lin_po_1': 'no label', 'B_fid': 'no label', 'B_ID': 'no label', 'B_ELEV': 'inline label - visible with data', });
lyr_SETycn50amenosde200m_15.set('fieldLabels', {'ID': 'inline label - always visible', 'Capa': 'no label', 'Nodo': 'no label', 'ID_Element': 'inline label - always visible', 'Codigo': 'no label', 'dist_curva': 'inline label - visible with data', 'cota_curva': 'inline label - visible with data', 'dentro_dis': 'no label', });
lyr_SETycn60amenosde200m_16.set('fieldLabels', {'ID': 'inline label - always visible', 'Capa': 'no label', 'Nodo': 'no label', 'ID_Element': 'inline label - always visible', 'Codigo': 'no label', 'dist_curva': 'inline label - visible with data', 'cota_curva': 'inline label - visible with data', 'dentro_dis': 'no label', });
lyr_SETycn60amenosde200m_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});