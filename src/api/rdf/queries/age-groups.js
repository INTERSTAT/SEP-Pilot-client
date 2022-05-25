export const ageGroups  = `PREFIX isc: <http://id.cef-interstat.eu/sc/> 
PREFIX skos: <http://www.w3.org/2004/02/skos/core#> 

SELECT DISTINCT ?label where {   
?s skos:inScheme isc:cl-age .  
?s skos:notation ?label .
} 
ORDER BY ?label
`;
