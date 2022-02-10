import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import * as C from 'utils/constants';
import './menu.scss';

const config = [
	{ label: 'Home', route: C.HOME_ROUTE },
	{ label: 'Map', route: C.MAP_ROUTE },
	{ label: 'Map - Fake data', route: C.MAP_FAKE_ROUTE },
	{ label: 'Table', route: C.TABLE_ROUTE },
	{ label: 'Table - Fake data', route: C.TABLE_FAKE_ROUTE },
];

const InterstatMenu = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<div className="menu-container">
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static">
					<Toolbar>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 2 }}
							onClick={handleClick}
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="long-menu"
							MenuListProps={{
								'aria-labelledby': 'long-button',
							}}
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							PaperProps={{
								style: {
									width: '20ch',
								},
							}}
						>
							{config.map(({ label, route }) => (
								<MenuItem
									className="menu-item"
									key={route}
									onClick={handleClose}
								>
									<Link to={`/${route}`}>{label}</Link>
								</MenuItem>
							))}
						</Menu>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							Interstat
						</Typography>
					</Toolbar>
				</AppBar>
			</Box>
		</div>
	);
};

export default InterstatMenu;
