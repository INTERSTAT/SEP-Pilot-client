import React, { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import './service1.css';

import Left from './left';
import Right from './right';
import Center from './center/component';

const Service1 = () => {
	const [country, setCountry] = useState('0');

	return (
		<Grid container spacing={1}>
			<Stack spacing={1} style={{ height: '100%', width: '100%' }}>
				<Left />
			</Stack>

			<Grid item xs={2}>
				<Center />
			</Grid>

			<Grid item xs={10}>
				<div style={{ height: '100%', width: '100%' }}>
					<Stack spacing={1} style={{ height: '50%', width: '100%' }}>
						<Right country={country} setCountry={setCountry} />
					</Stack>
				</div>
			</Grid>
		</Grid>
	);
};

export default Service1;
