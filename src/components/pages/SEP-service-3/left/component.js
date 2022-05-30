import React from 'react';
import Accordion from 'components/common/accordion';
import Paper from 'components/common/paper';
import { SERVICE_3_TITLE, SERVICE_3_DESCRIPTION } from '../data';

const Left = () => (
	<>
		<div style={{ marginBottom: '1em', fontWeight: 'bold' }}>
			<Accordion
				className="titleAcc"
				title="Evaluation of the effects of pollution (considering PM2.5 and NO2) on specific municipalities in Italy and France"
			>
				<strong>{SERVICE_3_TITLE}</strong>
			</Accordion>
		</div>
		<Paper>{SERVICE_3_DESCRIPTION}</Paper>
	</>
);

export default Left;
