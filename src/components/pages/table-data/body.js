import React from 'react';
import Grid from '@mui/material/Grid';
import Accordion from 'components/common/accordion';
import Paper from 'components/common/paper';
import Table from './table-data';
import { FAKE_TEXT } from '../table-fake/fake-data';

const TablePage = () => (
	<Grid container spacing={2}>
		<Grid item xs={4}>
			<div style={{ marginBottom: '1em' }}>
				<Accordion title="Accordion sample">{FAKE_TEXT}</Accordion>
			</div>
			<Paper>{FAKE_TEXT}</Paper>
		</Grid>
		<Grid item xs={8}>
			<Paper>
				<Table />
			</Paper>
		</Grid>
	</Grid>
);

export default TablePage;
