import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Accordion from 'components/common/accordion';
import Paper from 'components/common/paper';
import './service1.css';
import { SERVICE_1_TITLE, SERVICE_1_DESCRIPTION } from './data';

import TablePageNew2 from '../table-dataNew2';
import TablePageNew from '../table-dataNew';

const positionRome = [41.9027835, 12.4963655]
const positionMilan = [45.4654219, 9.1859243]
const positionTurin = [45.070312, 7.6868565]
const positionBologna = [44.494887, 11.3426163]

const Service1 = () => (	
		<Grid container spacing={2}>  
		<Grid item xs={2}>
			<div style={{ marginBottom: '1em', fontWeight: 'bold' }}>
				<Accordion className="titleAcc" title="Resident population in the most polluted areas">
					<strong>{SERVICE_1_TITLE}</strong>
				</Accordion>
			</div>
			<Paper>{SERVICE_1_DESCRIPTION}</Paper>
		</Grid>
		<Grid item xs={4}>
				<div style={{ height: '100%', width: '100%', border: 'double', borderColor: 'blue'}}>
					<MapContainer center={positionRome} zoom={6}
					 style={{ height: '100vh', width: '50wh' }}  >
					  <TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					  />
					  <Marker position={positionTurin} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
						<Popup>
						  <b>Latitude:</b> {positionTurin[0]} <br /> <b>Longitude:</b> {positionTurin[1]}
						</Popup>
					  </Marker>
					  <Marker position={positionMilan} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
						<Popup>
						  <b>Latitude:</b> {positionMilan[0]} <br /> <b>Longitude:</b> {positionMilan[1]}
						</Popup>
					  </Marker>
					  <Marker position={positionBologna} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
						<Popup>
						  <b>Latitude:</b> {positionBologna[0]} <br /> <b>Longitude:</b> {positionBologna[1]}
						</Popup>
					  </Marker>
					</MapContainer>
				</div>		
		</Grid>
		<Grid item xs={6}> 
				<div style={{ height: '100%', width: '100%'}}>
					<Stack spacing={2} style={{ height: '100%', width: '100%'}}>
						<div style={{ height: '50%', width: '100%'}}>
							<h4>Data about population on the most polluted municipalities</h4>
							<TablePageNew2 />
						</div>
						<div style={{ height: '50%', width: '100%'}}>
						<h4>Data about territorial population</h4>
							<TablePageNew />
						</div>
					</Stack>
				</div>		
		</Grid>
	</Grid>
);

export default Service1;
