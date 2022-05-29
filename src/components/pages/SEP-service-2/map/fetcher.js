import React from 'react';
import Loader from 'components/common/loader';
import Error from 'components/common/error';
import Map from './component';
import { useFetch } from 'api';
import { GET_FACILITIES, POINT_FROM_LAUCODE } from 'api/constants';


const MapFetcher = ({ lauCode, country }) => {
	const { data, loading, error } = useFetch(POINT_FROM_LAUCODE, '' , '', '', '', '', '', lauCode);
	if (loading) return <Loader />;
	if (error) return <Error message={error.toString()} />;

	console.log("DATA FOR MAP: ");
	console.log(JSON.stringify(data));

	// if(country==="Y10-14"){
	// 	console.log("ZOOM: " + zoomValue)
	// 	return <Map points={data} country={country} zoomValue={zoomValue}  />;
	// } else {
	// 	console.log("ZOOM: " + zoomValue)
	// 	return <Map points={data} country={country} zoomValue={zoomValue}  />;
	// }

	return <Map points={data} country={country}   />;

};

export default MapFetcher;
