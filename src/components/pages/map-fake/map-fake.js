import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import Grid from '@mui/material/Grid';
import Accordion from 'components/common/accordion';
import Paper from 'components/common/paper';
import { ACCORDION_TEXT, FAKE_TEXT } from './fake-data';

const position = [51.505, -0.09]

const MapFakePage = () => (	
		<Grid container spacing={2}>
		<Grid item xs={4}>
			<div style={{ marginBottom: '1em' }}>
				<Accordion title="London Map">{ACCORDION_TEXT}</Accordion>
			</div>
			<Paper>{FAKE_TEXT}</Paper>
		</Grid>
		<Grid item xs={8}>
				<div style={{ height: '100%', width: '100%', border: 'double'  }}>
					<MapContainer center={position} zoom={14}
					 style={{ height: '100vh', width: '100wh' }}  >
					  <TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					  />
					  <Marker position={position} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
						<Popup>
						  <b>Latitude:</b> 51.505 <br /> <b>Longitude:</b> -0.09
						</Popup>
					  </Marker>
					</MapContainer>
				</div>		
		</Grid>
	</Grid>
);

export default MapFakePage;
