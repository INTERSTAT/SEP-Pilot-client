import React from 'react';
import DataTable from 'react-data-table-component';
import Loader from 'components/common/loader';
import Error from 'components/common/error';
import { useFetch } from 'api';
import { GET_NUTS_POP } from 'api/constants';
import { sparqlDataToTable } from 'utils';

const customStyles = {
	/*title: {
	  style: {
		fontColor: 'red', 
		fontWeight: '10',
	  }
	},*/
	rows: {
	  style: { 
		minHeight: '10px', 
	  }
	},
	headCells: {
	  style: {
		fontSize: '15px',
		fontWeight: '10',
		textTransform: 'uppercase',
		paddingLeft: '0 8px'
	  },
	},
	cells: {
	  style: {
		fontSize: '10px',
		paddingLeft: '0 8px',
	  },
	},
  };

const Table = () => {
	const { data, error, loading } = useFetch(GET_NUTS_POP);  

	if (loading) return <Loader />;
	if (error) return <Error message={error.toString()} />;

	const sparqlData = sparqlDataToTable(data);
	const { columns, data: tableData } = sparqlData;

	return (
		<DataTable
			//title="Nuts population"
			columns={columns}
			data={tableData}
			customStyles={customStyles}
			pagination
		/>
	);
};

export default Table;
