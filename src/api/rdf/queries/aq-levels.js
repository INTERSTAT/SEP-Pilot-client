export const aqLevels =  `
PREFIX qb: <http://purl.org/linked-data/cube#>
PREFIX sdmx-measure: <http://purl.org/linked-data/sdmx/2009/measure#>
PREFIX isc: <http://id.cef-interstat.eu/sc/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX ap_Istat: <http://www.interstat.it/air_pollution#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX eionet: <http://dd.eionet.europa.eu/property/>
PREFIX country: <http://www.interstat.it/air_pollution#/Country/>

select distinct ?range_value ?label
where {
?o rdf:type ap_Istat:Air_pollution_Observation .
?o ap_Istat:obsmadeBySensor ?station.
?o ap_Istat:related_to_pollutant ?ap.
?ap skos:prefLabel ?pollutant.
?ap skos:notation ?code .
    
?station ap_Istat:located_in_municipality ?lauURI.
?lauURI skos:prefLabel ?municipality.

?o ap_Istat:hasResult ?r.
    
?r ap_Istat:belongs_to ?level .
?level ap_Istat:level_code ?range_value .
?level ap_Istat:level_description ?label .

FILTER (?code = 'NO2').
}
ORDER BY (?label)
`;


