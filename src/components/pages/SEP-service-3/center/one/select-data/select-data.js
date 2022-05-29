import React from 'react';
import Loader from 'components/common/loader';
import Error from 'components/common/error';
import { useFetch } from 'api';
import { sparqlDataToTable } from 'utils';
import Select from 'react-select';


const SelectData = ({ endpoint, country, lang,  rangePm10, setRangePm10, rangePm25, setRangePm25, rangeNo3, setRangeNo3, coutry, setCountry, type,
	lauFr, setLauFr, lauIt, setLauIt, nutsIt, setNutsIt, nutsFr, setNutsFr, nuts3Code }) => {
	
	const handleChange = (obj) => {
		if(lang==='it'){
			console.log(obj.label);
			setLauIt(obj.label); 
			console.log(JSON.stringify(lauIt));
		}
		if(lang==='fr'){
			console.log(obj.label);
			setLauFr(obj.label);
			console.log(JSON.stringify(lauFr));
		} 
		if(endpoint==="NUTS" && country==="FR"){
			setNutsFr(obj.code);
			console.log(JSON.stringify(nutsFr));
		}
		if(endpoint==="NUTS" && country==="IT"){
			setNutsIt(obj.code);
			console.log(JSON.stringify(nutsIt));
		}
		if(endpoint==="AQ_LEVELS" && type==="PM10"){
			setRangePm10(obj.label);
			console.log(JSON.stringify(rangePm10));
		}
		if(endpoint==="AQ_LEVELS" && type==="PM25"){
			setRangePm25(obj.label);
			console.log(JSON.stringify(rangePm25));
		}
		if(endpoint==="AQ_LEVELS" && type==="NO2"){
			setRangeNo3(obj.label);
			console.log(JSON.stringify(rangeNo3));
		}
		if(endpoint==="GET_COUNTRIES") {
			setCountry(obj.label);
			console.log(JSON.stringify(country));
		}
		
	};

	const { data, error, loading } = useFetch(endpoint, country, lang, '', nuts3Code);

	if (loading) return <Loader />;
	if (error) return <Error message={error.toString()} />;

	const sparqlData = sparqlDataToTable(data);
	const { columns, data: tableData } = sparqlData;

	return (

		<Select style={{ 
			height: '100%', 
			width: '90%' }} options={tableData} onChange={handleChange} getOptionValue={(option) => option.label} />

	);
};

export default SelectData;
