import React from 'react';
import Select from 'react-select';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import SelectData from './select-data';
import { AQ_LEVELS, GET_COUNTRIES, NUTS, GET_LAU_FROM_NUTS } from 'api/constants';


const One = ({
	// rangePm10,
	// setRangePm10,
	// rangePm25,
	// setRangePm25,
	// rangeNo3, 
	// setRangeNo3,
	// country,
	// setCountry
	lauIt, setLauIt, lauFr, setLauFr, nutsIt, setNutsIt, nutsFr, setNutsFr,
}) => {
	return (

		// <Stack container spacing={2}>
		// 	<Stack item xs={3}>
		// 	<div style={{ height: '100%', width: '100%' }}>
		// 			<label
		// 				style={{
		// 					color: 'black',
		// 					fontWeight: 'bold',
		// 					fontSize: 'small',
		// 				}}
		// 			>
		// 				Select a Country to analize
		// 			</label>

		// 			{/* <Select options={optionsPM10} placeholder="Good (<40)" /> */}

		// 			<SelectData
		// 			endpoint={GET_COUNTRIES}
		// 			country={country}
		// 			setCountry={setCountry}
		// 		/>
		// 		</div>
		// 		</Stack>

		// 	<Stack item xs={3}>
		// 		<div style={{ height: '100%', width: '50%', paddingLeft: '5rem' }}>
		// 			<label
		// 				style={{
		// 					color: 'black',
		// 					fontWeight: 'bold',
		// 					fontSize: 'small',
		// 				}}
		// 			>
		// 				Select a value for PM10 (µg/m3)
		// 			</label>

		// 			{/* <Select options={optionsPM10} placeholder="Good (<40)" /> */}

		// 			<SelectData
		// 				endpoint={AQ_LEVELS}
		// 				rangePm10={rangePm10}
		// 				setRangePm10={setRangePm10}
		// 				type={'PM10'}
		// 			/>
		// 		</div>
		// 	</Stack>

		// 	<Stack item xs={3}>
		// 		<div style={{ height: '100%', width: '50%', paddingLeft: '5rem' }}>
		// 			<label
		// 				style={{
		// 					color: 'black',
		// 					fontWeight: 'bold',
		// 					fontSize: 'small',
		// 				}}
		// 			>
		// 				Select a value for PM2.5 (µg/m3)
		// 			</label>

		// 			{/* <Select options={optionsPM2point5} placeholder="Good (<25)" /> */}

		// 			<SelectData
		// 				endpoint={AQ_LEVELS}
		// 				rangePm25={rangePm25}
		// 				setRangePm25={setRangePm25}
		// 				type={'PM25'}
		// 			/>
		// 		</div>
		// 	</Stack>

		// 	<Stack item xs={3}>
		// 		<div style={{ height: '100%', width: '50%', paddingLeft: '5rem' }}>
		// 			<label
		// 				style={{
		// 					color: 'black',
		// 					fontWeight: 'bold',
		// 					fontSize: 'small',
		// 				}}
		// 			>
		// 				Select a value for NO2 (µg/m3)
		// 			</label>
		// 			{/* <Select options={optionsNO2} placeholder="Good (<50)" /> */}

		// 			<SelectData
		// 				endpoint={AQ_LEVELS}
		// 				rangeNo3={rangeNo3}
		// 				setRangeNo3={setRangeNo3}
		// 				type={'NO2'}
		// 			/>
		// 		</div>
		// 	</Stack>
		// </Stack>

		<Grid container spacing={2}>
		<Grid item xs={6}>
			<div style={{ height: '100%', width: '100%', paddingTop: '3rem' }}>
				<label
					style={{ color: 'black', fontWeight: 'bold', fontSize: 'small' }}
				>
					Select a French NUTS3 Region
				</label>

				<SelectData endpoint={NUTS} country={'FR'} nutsFr={nutsFr} setNutsFr={setNutsFr} /> 

				<br />
				<label
					style={{
						color: 'black',
						fontWeight: 'bold',
						fontSize: 'small',
						paddingTop: '10',
					}}
				>
					Select a French Municipality
				</label>

				<SelectData endpoint={GET_LAU_FROM_NUTS} lang={'fr'} nuts3Code={nutsFr} lauFr={lauFr} setLauFr={setLauFr} /> 

			</div>
		</Grid>

		<Grid item xs={6}>
			<div style={{ height: '100%', width: '100%', paddingTop: '3rem' }}>
				<label
					style={{ color: 'black', fontWeight: 'bold', fontSize: 'small' }}
				>
					Select an Italian NUTS3 Region
				</label>

				<SelectData endpoint={NUTS} country={'IT'} nutsIt={nutsIt} setNutsIt={setNutsIt} /> 
				
				<br />
				<label
					style={{
						color: 'black',
						fontWeight: 'bold',
						fontSize: 'small',
						paddingTop: '10',
					}}
				>
					Select an Italian Municipality
				</label>

				<SelectData endpoint={GET_LAU_FROM_NUTS} lang={'it'} nuts3Code={nutsIt} lauIt={lauIt} setLauIt={setLauIt} /> 

			</div>
		</Grid>
	</Grid>

	

	);
};

export default One;
