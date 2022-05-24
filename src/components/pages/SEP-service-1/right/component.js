import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '../../table-data';
import Title from 'components/common/title/component';

import { GET_POP_AQ } from 'api/constants';
import { GET_NUTS_POP2 } from 'api/constants';

// const paginationComponentOptions = {
// 	selectAllRowsItem: true,
// 	selectAllRowsItemText: '30',
//   };

const Right = () => (
	<>
		<div style={{ height: '100%', width: '100%', textAlign: 'center' }}>
			<Title label="Data about population and pollution in the most polluted municipalities" />
			<Paper>
				<Table endpoint={GET_POP_AQ} country={'IT'} lang={'it'} />
			</Paper>
		</div>

		{/* <div style={{ height: '50%', width: '100%' }}>
			<h4>Data about territorial population</h4>
			<Paper>
				<Table endpoint={GET_NUTS_POP2} />
			</Paper>
		</div> */}
	</>
);

export default Right;
