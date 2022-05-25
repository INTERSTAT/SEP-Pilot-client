import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import { Icon } from 'leaflet';

const positionRome = [41.9027835, 12.4963655];
const positionMilan = [45.4654219, 9.1859243];
const positionTurin = [45.070312, 7.6868565];

const positionNaples = [40.8517746, 14.2681244];
const positionFrosinone = [41.6401367, 13.3519019];
const positionSalerno = [40.682441, 14.768096];

const Map = () => (
	<div
		style={{
			height: '100%',
			width: '100%',
			border: 'double',
			borderColor: 'blue',
		}}
	>
		<MapContainer
			center={positionRome}
			zoom={4.4}
			style={{ height: '80vh', width: '20wh' }}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker
				position={positionTurin}
				icon={
					new Icon({
						iconUrl: markerIconPng,
						iconSize: [25, 41],
						iconAnchor: [12, 41],
					})
				}
			>
				<Popup>
					<b>Torino</b> <br /> <b>Latitude:</b> {positionTurin[0]} <br /> <b>Longitude:</b>{' '}
					{positionTurin[1]}
				</Popup>
			</Marker>
			<Marker
				position={positionMilan}
				icon={
					new Icon({
						iconUrl: markerIconPng,
						iconSize: [25, 41],
						iconAnchor: [12, 41],
					})
				}
			>
				<Popup>
					<b>Milano</b> <br /> <b>Latitude:</b> {positionMilan[0]} <br /> <b>Longitude:</b>{' '}
					{positionMilan[1]}
				</Popup>
			</Marker>
			<Marker
				position={positionFrosinone}
				icon={
					new Icon({
						iconUrl: markerIconPng,
						iconSize: [25, 41],
						iconAnchor: [12, 41],
					})
				}
			>
				<Popup>
					<b>Frosinone</b> <br /><b>Latitude:</b> {positionFrosinone[0]} <br /> <b>Longitude:</b>{' '}
					{positionFrosinone[1]}
				</Popup>
			</Marker>
			<Marker
				position={positionNaples}
				icon={
					new Icon({
						iconUrl: markerIconPng,
						iconSize: [25, 41],
						iconAnchor: [12, 41],
					})
				}
			>
				<Popup>
					<b>Napoli</b> <br /> <b>Latitude:</b> {positionNaples[0]} <br /> <b>Longitude:</b>{positionNaples[1]}
				</Popup>
			</Marker>
			<Marker
				position={positionSalerno}
				icon={
					new Icon({
						iconUrl: markerIconPng,
						iconSize: [25, 41],
						iconAnchor: [12, 41],
					})
				}
			>
				<Popup>
					<b>Salerno</b> <br /> <b>Latitude:</b> {positionSalerno[0]} <br /> <b>Longitude:</b>{positionSalerno[1]}
				</Popup>
			</Marker>
		</MapContainer>
	</div>
);

export default Map;
