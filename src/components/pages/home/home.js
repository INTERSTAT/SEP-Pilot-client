import React from 'react';
import './home.css';

const HomePage = () => (
	<div className="Homepage">
		<img
			src="https://cef-interstat.eu/wp-content/uploads/2020/12/INTERSTAT_Symbol.png"
			//className="App-logo"
			alt="logo"
		/>
		<p>INTERSTAT Support for Environment Policies pilot application</p>
		<a
			className="Framework-link"
			href="https://framework.cef-interstat.eu/"
			target="_blank"
			rel="noopener noreferrer"
		>
			INTERSTAT Framework homepage
		</a>
	</div>
);

export default HomePage;
