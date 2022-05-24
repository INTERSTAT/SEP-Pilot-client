import React from 'react';
import Loader from 'components/common/loader';
import Error from 'components/common/error';
import { useFetch } from 'api';
import { sparqlDataToTable } from 'utils';
import Select from 'react-select';

const HandelChange = (obj) => {
    console.log(obj.label);
  };
 
const SelectData = ({ endpoint, country, lang }) => {
	const { data, error, loading } = useFetch(endpoint, country, lang);

	if (loading) return <Loader />;
	if (error) return <Error message={error.toString()} />;

	const sparqlData = sparqlDataToTable(data);
	const { columns, data: tableData } = sparqlData;

	return (

		<Select style={{ 
			height: '100%', 
			width: '90%' }} options={tableData} onChange={HandelChange} />

	);
};

export default SelectData;
