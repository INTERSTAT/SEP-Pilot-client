import React from 'react';
import DataTable from 'react-data-table-component';
import Loader from 'components/common/loader';
import Error from 'components/common/error';
import { useFetch } from 'api';
import { sparqlDataToTable } from 'utils';
import loader from 'components/common/loader';

const customStyles = {
	rows: {
		style: {
			minHeight: '13px',
			//backgroundColor: '#e0e0e0',
		},
	},
	columns: {
		style: {
			minHeight: '13px',
			//backgroundColor: '#e0e0e0',
		},
	},
	headCells: {
		style: {
			fontSize: '13px',
			fontWeight: '10',
			textTransform: 'uppercase',
			paddingLeft: '0 8px',
			backgroundColor: '#deeafa',
		},
	},
	cells: {
		style: {
			fontSize: '15px',
			paddingLeft: '0 8px',
		},
	},
};

const Table = ({ endpoint, country, lang, municipality }) => {
	console.log("COUNTRY:  " + country)
	const { data, error, loading } = useFetch(endpoint, country, lang, municipality);

	if (loading) return <Loader />;
	if (error) return <Error message={error.toString()} />;

	const sparqlData = sparqlDataToTable(data);
	const { columns, data: tableData } = sparqlData;

	return (
		<DataTable
			columns={columns}
			data={tableData}
			customStyles={customStyles}
			pagination
			progressComponent={<Loader color="primary" size="md" className="justify-self-center align-self-center"/>}
			//progressPending={loader}
			//paginationRowsPerPageOptions={rowsPerPage}
		/>
	);
};

export default Table;
