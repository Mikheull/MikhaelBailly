import React, {Component} from 'react';

import Head from 'next/head'
import Header from '../components/Header'
import Image from '../components/Image'

import '../styles/sass/style.scss'

class Home extends Component {

    constructor(props) {
        super(props);

		this.state = {
			profile: "developer",
		}

		this.handleProfileSwitch = this.handleProfileSwitch.bind(this);
	}

	handleProfileSwitch = (ref) => {
		this.setState({profile: ref});
	}

	render() {
		return (
			<div className="relative">
			
				<Head>
					<title>Mikhael Bailly - Home</title>
					<link rel="icon" href="/favicon.ico" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&display=swap" rel="stylesheet" /> 
					<script src="https://cdn.jsdelivr.net/npm/jquery@latest/dist/jquery.min.js"></script>
				</Head>
		
				<Header />

				<main>
					<div>
						<div className="relative bg-gray-50">
							<div className="mx-auto flex flex-col md:flex-row relative">
								<div className="md:w-1/2 w-full flex flex-col self-center">
									<div className="md:px-24 px-12 py-24 mb-48 md:mb-0">
										<h1 className="text-gray-900 font-semibold text-8xl">Mikhaël Bailly</h1>
										<h2 className="text-gray-500 font-medium text-5xl">Web Development</h2>
									</div>
									
									<div className="absolute bottom-0">
										<div className="md:px-24 px-12">
											<p className="text-gray-600 italic text-lg underline">Choose a profile below</p>
										</div>

										<ul className="md:px-24 px-12 flex gap-6 mt-6 pb-4">
											<li><a className={`${this.state.profile == 'developer' ? 'border-b-2 border-c-yellow-400 text-c-yellow-400 font-semibold' : 'font-medium'} text-xl cursor-pointer pb-4`} onClick={() => this.handleProfileSwitch("developer")}>Developer</a></li>
											<li><a className={`${this.state.profile == 'student' ? 'border-b-2 border-c-yellow-400 text-c-yellow-400 font-semibold' : 'font-medium'} text-xl cursor-pointer pb-4`} onClick={() => this.handleProfileSwitch("student")}>Student</a></li>
											<li><a className={`${this.state.profile == 'entrepreneur' ? 'border-b-2 border-c-yellow-400 text-c-yellow-400 font-semibold' : 'font-medium'} text-xl cursor-pointer pb-4`} onClick={() => this.handleProfileSwitch("entrepreneur")}>Entrepreneur</a></li>
										</ul>
									</div>
								</div>

								<div className="md:w-1/2 w-full pb-12 hidden justify-items-end md:grid">
									<img src="/images/jane-palash-dfRgump8lsE-unsplash.jpg" className="w-full md:w-3/5 rounded-bl-3xl" />
								</div>
							</div>
						</div>


						{/* Developer part */}
						<div className={`${this.state.profile == 'developer' ? '' : 'hidden'} container mx-auto mt-12`}>
							<h3 class="text-gray-800 font-semibold text-4xl text-center">My developer life</h3>

							<div class="items-center flex flex-wrap my-20" data-aos="fade-right" data-aos-duration="700" data-aos-once="true">
								<div class="w-full md:w-6/12 ml-auto mr-auto px-4">
									<div class="md:pr-12 mt-5">
										<h2 class="text-3xl font-semibold text-gray-800">Développeur</h2>
										<p class="mt-4 text-lg leading-relaxed text-gray-700">Développement coté client et serveur, je maitrise les langages web de base (html, css, javascript, php) et m'intéresse également aux nouvelles technologies comme les frameworks JS (nodejs, vuejs, reactjs) ou encore les systèmes de base de données (Sql et NoSql)</p>
									</div>
								</div>
								<div class="w-full md:w-6/12 ml-auto mr-auto px-4 order-first sm:order-first md:order-last lg:order-last xl:order-last">
									<img alt="Illustration" class="max-w-full" src="/images/illustrations/developper.svg"/>
								</div>
							</div>
						</div>


						{/* Student part */}
						<div className={`${this.state.profile == 'student' ? '' : 'hidden'} container mx-auto mt-12`}>
							<h3 class="text-gray-800 font-semibold text-4xl text-center">Student</h3>

							<div class="items-center flex flex-wrap my-20" data-aos="fade-right" data-aos-duration="700" data-aos-once="true">
								<div class="w-full md:w-6/12 ml-auto mr-auto px-4">
									<div class="md:pr-12 mt-5">
										<h2 class="text-3xl font-semibold text-gray-800">Développeur</h2>
										<p class="mt-4 text-lg leading-relaxed text-gray-700">Développement coté client et serveur, je maitrise les langages web de base (html, css, javascript, php) et m'intéresse également aux nouvelles technologies comme les frameworks JS (nodejs, vuejs, reactjs) ou encore les systèmes de base de données (Sql et NoSql)</p>
									</div>
								</div>
								<div class="w-full md:w-6/12 ml-auto mr-auto px-4 order-first sm:order-first md:order-last lg:order-last xl:order-last">
									<img alt="Illustration" class="max-w-full" src="/images/illustrations/developper.svg"/>
								</div>
							</div>
						</div>


						{/* Entrepreneur part */}
						<div className={`${this.state.profile == 'entrepreneur' ? '' : 'hidden'} container mx-auto mt-12`}>
							<h3 className="font-bold text-3xl text-gray-700">More details in 2022</h3>
						</div>
					</div>

					<div className="">
						<div className="container mx-auto">
							a
						</div>
					</div>

					<script type="text/javascript" src="/scripts/main.js"></script>
				</main>
			</div>
		);
	}
}

export default Home;
