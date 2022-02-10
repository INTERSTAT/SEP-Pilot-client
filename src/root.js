import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
	HomePage,
	MapPage,
	MapFakePage,
	TablePage,
	TableFakePage,
} from 'components/pages';

const Root = () => (
	<Routes>
		<Route path="/" element={<HomePage />} />
		<Route path="/map" element={<MapPage />} />
		<Route path="/map-fake" element={<MapFakePage />} />
		<Route path="/table" element={<TablePage />} />
		<Route path="/table-fake" element={<TableFakePage />} />
	</Routes>
);

export default Root;
