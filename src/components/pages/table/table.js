import { getNutsPop } from 'api';
import React, { useEffect } from 'react';

const TablePage = () => {
	useEffect(() => {
		getNutsPop();
	}, []);

	return <div>Table page</div>;
};

export default TablePage;
