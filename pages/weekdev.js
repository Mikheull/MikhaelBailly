import React, {Component} from 'react';

import Head from 'next/head'
import Header from '../components/Header'

import '../styles/sass/style.scss'

class WeekDev extends Component {
	render() {
		return (
			<div className="relative">
			
				<Head>
					<title>Mikhael Bailly - WeekDev</title>
					<link rel="icon" href="/favicon.ico" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&display=swap" rel="stylesheet" /> 
					<script src="https://cdn.jsdelivr.net/npm/jquery@latest/dist/jquery.min.js"></script>
				</Head>
		
				<main>
					<Header />

					Weekdev
						
					<script type="text/javascript" src="/scripts/main.js"></script>
				</main>
			</div>
		);
	}
}

export default WeekDev;
