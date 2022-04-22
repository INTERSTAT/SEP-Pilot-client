import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '../../table-data';

import { GET_NUTS_POP } from 'api/constants';
import { GET_NUTS_POP2 } from 'api/constants';

const Right = () => (
	<>
		<div style={{ height: '50%', width: '100%' }}>
			<h4>Data about population on the most polluted municipalities</h4>
			<Paper>
				<Table endpoint={GET_NUTS_POP} />
			</Paper>
		</div>

		<div style={{ height: '50%', width: '100%' }}>
			<h4>Data about territorial population</h4>
			<Paper>
				<Table endpoint={GET_NUTS_POP2} />
			</Paper>
		</div>
	</>
);

export default Right;
