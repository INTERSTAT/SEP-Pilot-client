import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '../../table-data';
import Title from 'components/common/title/component';
import SelectData from 'components/pages/select-data';

import { GET_POP_AQ, GET_POP_AQ2, GET_COUNTRIES } from 'api/constants';

// const paginationComponentOptions = {
// 	selectAllRowsItem: true,
// 	selectAllRowsItemText: '30',
//   };

const Right = ({ country, setCountry }) => {
	return (
		<>
			<div style={{ height: '100%', width: '100%', textAlign: 'center' }}>
				<label
					style={{ color: 'black', fontWeight: 'bold', fontSize: 'small' }}
				>
					Select a Country to analize
				</label>
				{/* <Select options={optionsCountry} placeholder="Italy" /> */}

				<SelectData
					endpoint={GET_COUNTRIES}
					country={country}
					setCountry={setCountry}
				/>
			</div>
			<div style={{ height: '100%', width: '100%', textAlign: 'center' }}>
				{/* <Title label="Data about population and pollution in the most polluted municipalities" /> */}
				<Title label="Municipalities with higher pollution" />
				<Paper>
					<Table endpoint={GET_POP_AQ} country={country} />
				</Paper>
			</div>

			<div style={{ height: '100%', width: '100%', textAlign: 'center' }}>
				<Title label="Municipalities with higher population" />
				<Paper>
					<Table endpoint={GET_POP_AQ2} country={country} />
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
};

export default Right;
