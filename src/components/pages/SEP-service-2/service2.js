import React, { useState } from 'react';

import 'leaflet/dist/leaflet.css';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import './service2.css';

import Paper from '@mui/material/Paper';
import Table from '../table-data';
import { AQ, POP_FROM_LAU_AGE  } from 'api/constants';

import Left from './left';
import One from './center/one';
import Title from 'components/common/title';
//import Map from './center/map_old';
import Map from './map'
import Value from './value';

const Service2 = () => {
	const [lauIt, setLauIt] = useState('');
	const [lauFr, setLauFr] = useState('');
	const [lauCode, setLauCode] = useState('');
	const [nutsIt, setNutsIt] = useState('');
	const [nutsFr, setNutsFr] = useState('');
	const [age, setAge] = useState('');

	let label_It =
		'Air pollution data (PM10) for the ' + nutsIt + ' NUTS3 region';
	let label_Fr =
		'Air pollution data (PM10) for the ' + nutsFr + ' NUTS3 region';

	let label_pop_Fr =
		'Total population in the selected French territory for the ' + age + ' Age Group';
	let label_pop_It =
		'Total population in the selected Italian territory for the ' + age + ' Age Group';

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
									<One
										lauIt={lauIt}
										setLauIt={setLauIt}
										lauFr={lauFr}
										setLauFr={setLauFr}
										nutsIt={nutsIt}
										setNutsIt={setNutsIt}
										nutsFr={nutsFr}
										setNutsFr={setNutsFr}
										age={age}
										setAge={setAge}
										lauCode={lauCode}
										setLauCode={setLauCode}
									/>
								</Stack>
								
							</div>
						</Grid>
						
						

						<Grid item xs={8}>
							<Map lauCode={lauCode} />
						</Grid>
					</Grid>

					<Grid container spacing={2}>
					<Grid item xs={6}>
							<div
								style={{ height: '100%', width: '100%', paddingTop: '2rem', textAlign: 'center' }}
							>
								<Title label={label_pop_Fr} />

								<Value
									endpoint={POP_FROM_LAU_AGE}
									age={age}
									mun={lauFr}
								></Value>
							</div>
						</Grid>

						<Grid item xs={6}>
							<div
								style={{ height: '100%', width: '100%', paddingTop: '2rem', textAlign: 'center' }}
							>
								<Title label={label_pop_It} />

								<Value
									endpoint={POP_FROM_LAU_AGE}
									age={age}
									mun={lauIt}
								></Value>

							</div>
						</Grid>
					</Grid>

					<Stack container spacing={1}>
					<Stack item xs={6}>
					<div style={{ height: '100%', width: '100%', paddingTop: '2rem' }}>
						<Title label={label_It} />
						<Paper>
							<Table
								endpoint={AQ}
								country={'IT'}
								lang={'it'}
								municipality={lauIt}
								pollutantType={'PM10'}
							/>
						</Paper>
					</div>
					</Stack>

			
					<Stack item xs={6}>
					<div style={{ height: '100%', width: '100%' }}>
						<Title label={label_Fr} />
						<Paper>
							<Table
								endpoint={AQ}
								country={'FR'}
								lang={'fr'}
								municipality={lauFr}
								pollutantType={'PM10'}
							/>
						</Paper>
					</div>
					</Stack>
					</Stack>
				</Stack>
			</Grid>
		</Grid>
	);
};

export default Service2;
