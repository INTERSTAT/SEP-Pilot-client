import React, { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import Stack from '@mui/material/Stack';
import './service3.css';
import Grid from '@mui/material/Grid';

import Paper from '@mui/material/Paper';
import Table from '../table-data';
import { AQ } from 'api/constants';

import Left from './left';
import One from './center/one';
import Title from 'components/common/title';
import Map from './center/map';

const Service3 = () => {
	// const [rangePm10, setRangePm10] = useState('');
	// const [rangePm25, setRangePm25] = useState('');
	// const [rangeNo3, setRangeNo3] = useState('');
	// const [country, setCountry] = useState('');

	const [lauIt, setLauIt] = useState('');
	const [lauFr, setLauFr] = useState('');
	const [nutsIt, setNutsIt] = useState('');
	const [nutsFr, setNutsFr] = useState('');

	let label_It =
		'Air pollution data (PM2.5) for the ' + nutsIt + ' NUTS3 region';
	let label_Fr =
		'Air pollution data (PM2.5) for the ' + nutsFr + ' NUTS3 region';

	let label_It_2 =
		'Air pollution data (NO2) for the ' + nutsIt + ' NUTS3 region';
	let label_Fr_2 =
		'Air pollution data (NO2) for the ' + nutsFr + ' NUTS3 region';

	return (
		<Grid container spacing={2}>
			<Grid item xs={2}>
				<Left />
			</Grid>

			<Grid item xs={10}>
				<Stack spacing={0.5} style={{ height: '100%', width: '100%' }}>
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
								}}
							>
								{/* <Title label="Pollutants" /> */}
								<Title label="Geographic areas" />

								<Stack spacing={2} style={{ height: '100%', width: '100%' }}>
									<One
										// rangePm10={rangePm10}
										// setRangePm10={setRangePm10}
										// rangePm25={rangePm25}
										// setRangePm25={setRangePm25}
										// rangeNo3={rangeNo3}
										// setRangeNo3={setRangeNo3}
										// country={country}
										// setCountry={setCountry}
										lauIt={lauIt}
										setLauIt={setLauIt}
										lauFr={lauFr}
										setLauFr={setLauFr}
										nutsIt={nutsIt}
										setNutsIt={setNutsIt}
										nutsFr={nutsFr}
										setNutsFr={setNutsFr}
									/>
								</Stack>
							</div>
						</Grid>

						<Grid item xs={8}>
							<Map />
						</Grid>
					</Grid>

					<Grid container spacing={0.5}>
						<Grid item xs={12}>
							{/* <div style={{ height: '100%', width: '100%' }}>
								<Title label="NUTS3 regions related to the selected air pollution data levels" />
								<Paper> <Table endpoint={GET_NUTS_POP} /> </Paper>
							</div> */}

							<div
								style={{ height: '40%', width: '100%', paddingTop: '1rem' }}
							>
								<Title label={label_It} />

								<Paper>
									<Table
										endpoint={AQ}
										country={'IT'}
										lang={'it'}
										municipality={lauIt}
										pollutantType={'PM2.5'}
									/>
								</Paper>
							</div>

							<div style={{ height: '40%', width: '100%' }}>
								<Title label={label_Fr} />
								<Paper>
									<Table
										endpoint={AQ}
										country={'FR'}
										lang={'fr'}
										municipality={lauFr}
										pollutantType={'PM2.5'}
									/>
								</Paper>
							</div>

							<div
								style={{ height: '40%', width: '100%' }}
							>
								<Title label={label_It_2} />

								<Paper>
									<Table
										endpoint={AQ}
										country={'IT'}
										lang={'it'}
										municipality={lauIt}
										pollutantType={'NO2'}
									/>
								</Paper>
							</div>

							<div style={{ height: '40%', width: '100%' }}>
								<Title label={label_Fr_2} />
								<Paper>
									<Table
										endpoint={AQ}
										country={'FR'}
										lang={'fr'}
										municipality={lauFr}
										pollutantType={'NO2'}
									/>
								</Paper>
							</div>
						</Grid>
					</Grid>
				</Stack>
			</Grid>
		</Grid>
	);
};

export default Service3;
