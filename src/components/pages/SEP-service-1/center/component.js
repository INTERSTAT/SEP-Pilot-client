import React from 'react';
import Grid from '@mui/material/Grid';
import 'leaflet/dist/leaflet.css';
import Stack from '@mui/material/Stack';

import Map from './map';

const Center = ({ country }) => {

return <Map country={country} />;
};

export default Center;
