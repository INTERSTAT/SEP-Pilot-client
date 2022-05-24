import React from 'react';
import 'leaflet/dist/leaflet.css';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import './service1.css';

import Left from './left';
import Right from './right';
import Center from './center/component';

const Service1 = () => (
	<Grid container spacing={1}>
		<Stack spacing={1} style={{ height: '100%', width: '100%' }}>
			<Left />
		</Stack>

		<Grid item xs={3}>
			<Center />
		</Grid>

		<Grid item xs={9}>
			<div style={{ height: '100%', width: '100%' }}>
				{/* <Stack spacing={2} style={{ height: '100%', width: '100%' }}> */}
					<Right />
				{/* </Stack> */}
			</div>
		</Grid>
	</Grid>
);

export default Service1;
