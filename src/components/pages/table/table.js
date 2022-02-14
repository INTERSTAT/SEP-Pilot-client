import React from 'react';
import DataTable from 'react-data-table-component';
import Loader from 'components/common/loader';
import Error from 'components/common/error';
import { useFetch } from 'api';
import { GET_NUTS_POP } from 'api/constants';
import { sparqlDataToTable } from 'utils';

const Table = () => {
	const { data, error, loading } = useFetch(GET_NUTS_POP);

	if (loading) return <Loader />;
	if (error) return <Error message={error.toString()} />;

	const sparqlData = sparqlDataToTable(data);
	const { columns, data: tableData } = sparqlData;

	return (
		<DataTable
			title="Nuts population"
			columns={columns}
			data={tableData}
			pagination
		/>
	);
};

export default Table;
