import React, { useState } from 'react';

import 'leaflet/dist/leaflet.css';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import './service2.css';

import Paper from '@mui/material/Paper';
import Table from '../table-data';
import { AQ } from 'api/constants';

import Left from './left';
import One from './center/one';
import Title from 'components/common/title';
import Map from './center/map';

const Service2 = () => {
	const [country, setCountry] = useState('0');

	return (
		<Grid container spacing={2}>
			<Grid item xs={2}>
				<Left />
			</Grid>

			<Grid item xs={10}>
				<Stack
					spacing={0.5}
					style={{
						height: '100%',
						width: '100%',
					}}
				>
					<Grid container spacing={4}>
						<Grid item xs={4}>
							<div
								style={{
									height: '100%',
									width: '100%',
									border: 'double',
									borderRadius: '25px',
									borderColor: '#1678f7',
									paddingLeft: '0.8rem',
									paddingRight: '0.6rem',
									paddingTop: '0.6rem',
								}}
							>
								<Title label="Geographic areas" />

								<Stack spacing={2} style={{ height: '100%', width: '100%' }}>
									<One />
								</Stack>
							</div>
						</Grid>

						<Grid item xs={8}>
							<Map />
						</Grid>
					</Grid>

					<div style={{ height: '100%', width: '100%', paddingTop: '2rem' }}>
						<Title label="Air pollution data (PM10) for ITC11 NUTS3 region" />
						<Paper>
							<Table
								endpoint={AQ}
								country={'IT'}
								lang={'it'}
								municipality={'Torino'}
							/>
						</Paper>
					</div>

					<div style={{ height: '100%', width: '100%' }}>
						<Title label="Air pollution data (PM10) for FR101 NUTS3 region" />
						<Paper>
							<Table
								endpoint={AQ}
								country={'FR'}
								lang={'fr'}
								municipality={'Paris'}
							/>
						</Paper>
					</div>
				</Stack>
			</Grid>
		</Grid>
	);
};

export default Service2;
