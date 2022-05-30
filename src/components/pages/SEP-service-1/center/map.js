import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import { Icon } from 'leaflet';

const positionRome = [41.9027835, 12.4963655];

// const positionMilan = [45.4654219, 9.1859243];
// const positionTurin = [45.070312, 7.6868565];
// const positionNaples = [40.8517746, 14.2681244];
// const positionFrosinone = [41.6401367, 13.3519019];
// const positionSalerno = [40.682441, 14.768096];

const Map = ({ country }) => {
	const positionRome = [41.9027835, 12.4963655];
	const positionParis = [48.864716, 2.349014];
	const positionMilan = [45.4654219, 9.1859243];
	let zoom ;

	let center ;
	if(country === 'IT'){
		center = positionRome;
		zoom = 7;
		console.log("CENTER: " + JSON.stringify(center) + " ZOOM: " + zoom);
	}else if(country === 'FR') {
		console.log("SONO IN FR");
		center = positionParis;
		zoom = 5;
	} else {
		zoom = 4.4;
		center = positionMilan;
	}

return (
	<div
		style={{
			height: '100%',
			width: '100%',
			border: 'double',
			borderColor: 'blue',
		}}
	>
		<MapContainer
			center={center}
			zoom={zoom}
			style={{ height: '80vh', width: '20wh' }}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker
				position={positionRome}
				icon={
					new Icon({
						iconUrl: markerIconPng,
						iconSize: [25, 41],
						iconAnchor: [12, 41],
					})
				}
			>
				<Popup>
					<b>Torino</b> <br /> <b>Latitude:</b> {positionRome[0]} <br /> <b>Longitude:</b>{' '}
					{positionRome[1]}
				</Popup>
			</Marker>

			<Marker
				position={positionParis}
				icon={
					new Icon({
						iconUrl: markerIconPng,
						iconSize: [25, 41],
						iconAnchor: [12, 41],
					})
				}
			>
				<Popup>
					<b>Frosinone</b> <br /><b>Latitude:</b> {positionParis[0]} <br /> <b>Longitude:</b>{' '}
					{positionParis[1]}
				</Popup>
			</Marker>
			
		</MapContainer>
	</div>
);
};

export default Map;
