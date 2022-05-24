export const popAq  = ({ country, lang }) => `PREFIX qb: <http://purl.org/linked-data/cube#>
PREFIX sdmx-measure: <http://purl.org/linked-data/sdmx/2009/measure#>
PREFIX isc: <http://id.cef-interstat.eu/sc/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>

PREFIX ap_Istat: <http://www.interstat.it/air_pollution#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

select distinct ?nuts3 ?municipality ?population ?gender ?age_Class (avg(?v) as ?avg_Value_Pollutant) ?pollutant ?code
where {
?obs qb:dataSet isc:ds1 ;
sdmx-measure:obsValue ?population ;
isc:att-nuts3 ?nuts3URI ;
isc:dim-sex ?sexURI ;
isc:dim-lau ?lauURI ;
isc:dim-age ?ageClassURI .
?nuts3URI skos:prefLabel ?nuts3 .
?nuts3URI skos:notation ?nuts3Code .
?ageClassURI skos:prefLabel ?age_Class .
?sexURI skos:prefLabel ?gender .
    
?o rdf:type ap_Istat:Air_pollution_Observation .
?o ap_Istat:obsmadeBySensor ?s.
?o ap_Istat:related_to_pollutant ?ap.
?ap skos:prefLabel ?pollutant.
?ap skos:notation ?code.
?s ap_Istat:located_in_municipality ?lauURI.
    
?lauURI skos:prefLabel ?municipality.
?o ap_Istat:hasResult ?r.
?r ap_Istat:aq_value ?v.

#FILTER (?ln='Vienne')   
#FILTER (?ln='001028')
FILTER (regex (?nuts3Code , "^(` + country + `)")).
FILTER (lang(?nuts3) = '`  + lang + `').
FILTER (lang(?age_Class) = 'en').
FILTER (lang(?gender) = 'en').
}
group by ?municipality ?nuts3 ?population ?gender ?age_Class ?ap ?pollutant ?code
ORDER BY DESC(?avg_Value_Pollutant)
`;
