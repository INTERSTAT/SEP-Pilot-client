import React from 'react';
import Accordion from 'components/common/accordion';
import Paper from 'components/common/paper';
import { SERVICE_1_TITLE, SERVICE_1_DESCRIPTION } from '../data';

const Left = () => (
	<>
		<div style={{ marginBottom: '1em'  }}>
			<Accordion
				className="titleAcc"
				title="Resident population in the most polluted areas"
			>
				<strong>{SERVICE_1_TITLE}</strong>
			</Accordion>
		</div>
		<Paper>{SERVICE_1_DESCRIPTION}</Paper>
	</>
);

export default Left;
