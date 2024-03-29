import React from 'react';
import Grid from '@mui/material/Grid';
import 'leaflet/dist/leaflet.css';
import SelectData from '../../select-data';
import {
	NUTS,
	AGE_GROUPS, GET_LAU_FROM_NUTS
} from 'api/constants';


const One = ({ lauIt, setLauIt, lauFr, setLauFr, nutsIt, setNutsIt, nutsFr, setNutsFr, age, setAge,  lauCode, setLauCode  }) => {

return (
	<>
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

					<SelectData endpoint={GET_LAU_FROM_NUTS} lang={'it'} nuts3Code={nutsIt} lauIt={lauIt} setLauIt={setLauIt} lauCode={lauCode} setLauCode={setLauCode} /> 

				</div>
			</Grid>
		</Grid>

		<br />
		<br />
		<br />
		<div style={{ height: '50%', width: '50%', marginLeft: '6rem' }}>
			<label style={{ color: 'black', fontWeight: 'bold', fontSize: 'small' }}>
				Select an Age Group
			</label>
			<SelectData endpoint={AGE_GROUPS} age={age} setAge={setAge} /> 
		</div>
	</>
);
};

export default One;
