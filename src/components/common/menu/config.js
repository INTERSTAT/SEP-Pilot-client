import * as C from 'utils/constants';
import HomeIcon from '@mui/icons-material/Home';
import MapIcon from '@mui/icons-material/Map';
import TableViewIcon from '@mui/icons-material/TableView';

export const menuConfig = [
	{ label: 'Home', route: C.HOME_ROUTE, icon: <HomeIcon /> },
	//{ label: 'Map - Fake data', route: C.MAP_FAKE_ROUTE, icon: <MapIcon /> },
	//{ label: 'Table', route: C.TABLE_ROUTE, icon: <TableViewIcon /> },
	{ label: 'SEP Service 1', route: C.SERVICE1_ROUTE, icon: <MapIcon /> },   
	{ label: 'SEP Service 2', route: C.SERVICE2_ROUTE, icon: <MapIcon /> },  
	{ label: 'SEP Service 3', route: C.SERVICE3_ROUTE, icon: <MapIcon /> }, 
	/*{
		label: 'Table - Fake data',
		route: C.TABLE_FAKE_ROUTE,
		icon: <TableViewIcon />, 
	}, */
];
