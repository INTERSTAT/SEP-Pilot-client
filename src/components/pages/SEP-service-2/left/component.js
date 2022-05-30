import React from 'react';
import Accordion from 'components/common/accordion';
//import Paper from '@mui/material/Paper';
import Paper from 'components/common/paper';
import { SERVICE_2_TITLE, SERVICE_2_DESCRIPTION } from '../data';

const Left = () => (
	<>
		<div style={{ marginBottom: '1em', fontWeight: 'bold' }}>
			<Accordion
				className="titleAcc"
				title="Evaluation of the effects of pollution (considering PM10) on specific municipalities in Italy and France"
			>
				<strong>{SERVICE_2_TITLE}</strong>
			</Accordion>
		</div>
		<Paper>{SERVICE_2_DESCRIPTION}</Paper>
	</>
);

export default Left;
