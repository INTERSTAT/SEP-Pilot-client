import * as C from 'utils/constants';
import HomeIcon from '@mui/icons-material/Home';
import MapIcon from '@mui/icons-material/Map';
import TableViewIcon from '@mui/icons-material/TableView';

export const menuConfig = [
	{ label: 'Home', route: C.HOME_ROUTE, icon: <HomeIcon /> },
	{ label: 'Map', route: C.MAP_ROUTE, icon: <MapIcon /> },
	{ label: 'Map - Fake data', route: C.MAP_FAKE_ROUTE, icon: <MapIcon /> },
	{ label: 'Table', route: C.TABLE_ROUTE, icon: <TableViewIcon /> },
	{
		label: 'Table - Fake data',
		route: C.TABLE_FAKE_ROUTE,
		icon: <TableViewIcon />,
	},
];
