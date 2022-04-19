import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Accordion from 'components/common/accordion';
import Paper from 'components/common/paper';
import './service3.css';
import { SERVICE_3_TITLE, SERVICE_3_DESCRIPTION } from './data';
import Select from 'react-select'

import TablePageNew from '../table-dataNew';

const positionRome = [41.9027835, 12.4963655]
const positionParis = [48.864716, 2.349014]

const optionsPM10 = [
  { value: '1', label: 'Good (<40)' },
  { value: '2', label: 'Fair (40–80)' },
  { value: '3', label: 'Poor (80–120)' },
  { value: '4', label: 'Very Poor (120–300)' },
  { value: '5', label: 'Extremely Poor (>300)' }
]

const optionsPM2point5 = [
  { value: '1', label: 'Good (<25)' },
  { value: '2', label: 'Fair (25–50)' },
  { value: '3', label: 'Poor (50–100)' },
  { value: '4', label: 'Very Poor (100–300)' },
  { value: '5', label: 'Extremely Poor (>300)' }
]

const optionsO3 = [
  { value: '1', label: 'Good (0.000-0.054)' },
  { value: '2', label: 'Moderate (0.055-0.070)' },
  { value: '3', label: 'Unhealthy for Sensitive Groups (0.071-0.085)' },
  { value: '4', label: 'Unhealthy (0.086-0.105)' },
  { value: '5', label: 'Very Unhealthy (0.106-0.200)' }
]

const optionsNO2 = [
  { value: '1', label: 'Good (0-50)' },
  { value: '2', label: 'Moderate (51-100)' },
  { value: '3', label: 'Unhealthy for Sensitive Groups (101-150)' },
  { value: '4', label: 'Unhealthy (151-200)' },
  { value: '5', label: 'Very Unhealthy (201-300)' }
]

const Service3 = () => (	
		<Grid container spacing={2}>  
		<Grid item xs={2}>
			<div style={{ marginBottom: '1em', fontWeight: 'bold' }}>
				<Accordion className="titleAcc" title="Evaluation of the effects of pollution on specific population groups in Italy and France">
					<strong>{SERVICE_3_TITLE}</strong>
				</Accordion>
			</div>
			<Paper>{SERVICE_3_DESCRIPTION}</Paper>
		</Grid>

		<Grid item xs={10}>
    <Stack spacing={0.5} style={{ height: '100%', width: '100%'}}>

          <Grid container spacing={4}>  
            <Grid item xs={4}>
              
              <div style={{ height: '100%', width: '100%', border: 'double', borderRadius: '25px', borderColor: '#1678f7', paddingLeft: '0.8rem', paddingRight: '0.6rem' }}>
              
                <h3>Pollutants</h3>
                <Stack spacing={2} style={{ height: '100%', width: '100%'}}>

                    <Grid container spacing={2}>  
                      <Grid item xs={6}>
                        <br />
                        <br />
                        <br />
                        <div style={{ height: '100%', width: '100%'}}>
                          <label style={{ color: 'black', fontWeight: 'bold', fontSize: 'small' }}>Select a value for PM10 (µg/m3)</label>
                          <Select options={optionsPM10} placeholder="Good (<40)"/>
                          <br/>
                          <br/>
                          <label style={{ color: 'black', fontWeight: 'bold', fontSize: 'small', paddingTop:'10' }}>Select a value for NO2 (µg/m3)</label>
                          <Select options={optionsNO2} placeholder="Good (<25)" />
                        </div>
                      </Grid>
                      <Grid item xs={6}>
                        <br />
                        <br />
                        <br />
                        <div style={{ height: '100%', width: '100%'}}>
                          <label style={{ color: 'black', fontWeight: 'bold', fontSize: 'small' }}>Select a value for PM2.5 (µg/m3)</label>
                          <Select options={optionsPM2point5} placeholder="Good (0-50)"/>
                          <br/>
                          <br/>
                          <label style={{ color: 'black', fontWeight: 'bold', fontSize: 'small', paddingTop:'10' }}>Select a value for O3 (ppm)</label>
                          <Select options={optionsO3} placeholder="Good (0.000-0.054)"/>
                        </div>
                      </Grid>
                    </Grid>

                </Stack>
              </div>
            </Grid>
            
            <Grid item xs={8}>
              <div style={{ height: '100%', width: '100%'}}>
                {/*style={{ height: '100%', width: '100%', border: 'double', borderColor: 'blue'}} */}
                 <div >
                  <MapContainer center={positionRome} zoom={4}
                  style={{ height: '60vh', width: '100wh' }}  >
                      <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      <Marker position={positionRome} icon={new Icon({iconUrl: markerIconPng, iconSize: [15, 31], iconAnchor: [12, 41]})}>
                      <Popup>
                        <b>Latitude:</b> {positionRome[0]} <br /> <b>Longitude:</b> {positionRome[1]}
                      </Popup>
                      </Marker>
                      <Marker position={positionParis} icon={new Icon({iconUrl: markerIconPng, iconSize: [15, 31], iconAnchor: [12, 41]})}>
                      <Popup>
                        <b>Latitude:</b> {positionParis[0]} <br /> <b>Longitude:</b> {positionParis[1]}
                      </Popup>
                      </Marker>
                </MapContainer>
              </div>		
              </div>
            </Grid>
          </Grid>
      
      <Grid container spacing={1}>  
          <Grid item xs={6}>
						<div style={{ height: '100%', width: '100%'}}>
              <h4>Air pollution data for ITC11 NUTS3 region</h4>
              <TablePageNew />
						</div>
          </Grid>

          <Grid item xs={6}>
						<div style={{ height: '100%', width: '100%'}}>
              <h4>Air pollution data for ITC11 NUTS3 region</h4>
              <TablePageNew />
						</div>
          </Grid>
      </Grid>
		</Stack>


		</Grid>
	</Grid>
);

export default Service3;
