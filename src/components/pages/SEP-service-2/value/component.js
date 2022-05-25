import React from 'react';
import Loader from 'components/common/loader';
import Error from 'components/common/error';
import { useFetch } from 'api';

const Value = ({ endpoint, age, mun }) => {
	const { data, error, loading } = useFetch(endpoint, '', '', mun, '', age );

	if (loading) return <Loader />;
	if (error) return <Error message={error.toString()} />;

	//const sparqlData = sparqlDataToTable(data);
	//const { columns, data: tableData } = sparqlData;

	console.log("DATA RET: " + JSON.stringify(data.results.bindings[0].population.value));
	
	return (
	<>
		<div style={{ marginBottom: '1em', fontWeight: 'bold', textAlign: 'center', fontSize: '1.5rem' }}>
			<label>{data.results.bindings[0].population.value}</label>  
		</div>
	</>
	);
};

export default Value;
