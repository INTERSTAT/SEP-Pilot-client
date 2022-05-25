import React from 'react';
import Loader from 'components/common/loader';
import Error from 'components/common/error';
import { useFetch } from 'api';
import { sparqlDataToTable } from 'utils';
import Select from 'react-select';


const SelectData = ({ endpoint, country, lang, nuts3Code, lauFr, setLauFr, lauIt, setLauIt, nutsIt, setNutsIt, nutsFr, setNutsFr, age, setAge }) => {
	
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
			setNutsFr(obj.label);
			console.log(JSON.stringify(nutsFr));
		}
		if(endpoint==="NUTS" && country==="IT"){
			setNutsIt(obj.label);
			console.log(JSON.stringify(nutsIt));
		}
		if(endpoint==="AGE_GROUPS"){
			setAge(obj.label);
			console.log(JSON.stringify(age));
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
