export const popAq2  = ({ country, lang }) => `
PREFIX qb: <http://purl.org/linked-data/cube#>
PREFIX sdmx-measure: <http://purl.org/linked-data/sdmx/2009/measure#>
PREFIX isc: <http://id.cef-interstat.eu/sc/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>

PREFIX ap_Istat: <http://www.interstat.it/air_pollution#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

#PREFIX eionet: <http://dd.eionet.europa.eu/property/>

select distinct ?nuts3 ?nuts3_Code ?municipality (xsd:integer(?pop) as ?population) ?gender ?age_Class (avg(?v) as ?avg_Pollutant_value) ?pollutant ?code 
where {
?obs qb:dataSet isc:ds1 ;
sdmx-measure:obsValue ?pop ;
isc:att-nuts3 ?nuts3URI ;
isc:dim-sex ?sexURI ;
isc:dim-lau ?lauURI ;
isc:dim-age ?ageClassURI .
?nuts3URI skos:prefLabel ?nuts3 .
?nuts3URI skos:notation ?nuts3_Code .
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

FILTER (regex (?nuts3_Code , "^(` + country + `)")).
FILTER (lang(?nuts3) = '`  + lang + `').
FILTER (lang(?age_Class) = 'en').
FILTER (lang(?gender) = 'en').
FILTER (?code = 'PM10').

#FILTER((str(?age_Class) = '100 years and over') || (str(?age_Class) = '95 to 99 years') || (str(?age_Class) = '90 #to 94 years') || (str(?age_Class) = '85 to 89 years') || (str(?age_Class) = '80 to 84 years')) .

}
group by ?nuts3 ?nuts3_Code ?municipality ?pop ?gender ?age_Class ?ap ?pollutant ?code
ORDER BY DESC(?population) 
`;
