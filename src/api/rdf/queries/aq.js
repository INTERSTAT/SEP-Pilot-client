export const aq = ({ country, lang, municipality, pollutantType }) => `
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX ap_Istat: <http://www.interstat.it/air_pollution#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX eionet: <http://dd.eionet.europa.eu/property/>
PREFIX country: <http://www.interstat.it/air_pollution#/Country/>
PREFIX qb: <http://purl.org/linked-data/cube#> 

select distinct ?nuts3_Code ?municipality ?station_name ?station_id ?air_quality_value ?pollutant ?code ?aggregation_Type 
?aggregation_info ?measure_unit ?info_measure_unit ?source ?date 
where {
?o rdf:type ap_Istat:Air_pollution_Observation .
?o ap_Istat:obsmadeBySensor ?station.
?o ap_Istat:related_to_pollutant ?ap.
?ap skos:prefLabel ?pollutant.
?ap skos:notation ?code .
?station ap_Istat:located_in_municipality ?lauURI.
?lauURI ap_Istat:belongs_to_nuts3 ?nuts3 .

#?nuts3 ap_Istat:nuts3_code ?nuts3_Code .
?nuts3 skos:notation ?nuts3_Code .

?station ap_Istat:station_LocalId ?station_id .
?station ap_Istat:station_name ?station_name .

?o ap_Istat:has_type  ?type .
?type skos:notation ?aggregation_Type .
?type skos:definition ?aggregation_info .
    
?o qb:dataSet ?dataset .
?dataset ap_Istat:has_country country:` + country + ` .
?dataset dcterms:publisher ?source . 
#?dataset dcterms:description ?source_description .
?dataset dcterms:temporal ?time .
?time dcterms:startDate ?date . 

?o ap_Istat:related_to_pollutant ?generalPollutant .
?generalPollutant eionet:mandatoryUnit ?unit .
?unit skos:notation ?measure_unit .
?unit skos:prefLabel ?info_measure_unit .
    
?lauURI skos:prefLabel ?municipality.
?o ap_Istat:hasResult ?r.
?r ap_Istat:aq_value ?air_quality_value.

#FILTER (lang(?nuts3) = 'it').
FILTER (regex (?nuts3_Code , "^(` + country + `)")).
FILTER (lang(?municipality) = '` + lang + `').
FILTER (str(?municipality) = '` + municipality + `').
FILTER (?code = '` + pollutantType + `').
}
ORDER BY DESC(?aq_value)
`;


