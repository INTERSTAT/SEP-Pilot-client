import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
	HomePage,
	TablePage,
	TableFakePage,
	Service1,
	Service2,
	Service3,
} from 'components/pages';

const Root = () => (
	<Routes>
		<Route path="/" element={<HomePage />} />
		<Route path="/table" element={<TablePage />} />
		<Route path="/table-fake" element={<TableFakePage />} />
		<Route path="/SEP-service-1" element={<Service1 />} />
		<Route path="/SEP-service-2" element={<Service2 />} />
		<Route path="/SEP-service-3" element={<Service3 />} />
	</Routes>
);

export default Root;
