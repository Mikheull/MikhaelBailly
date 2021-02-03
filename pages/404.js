import React, {Component} from 'react';

import Head from 'next/head'
import Header from '../components/Header'

import '../styles/sass/style.scss'

class Custom404 extends Component {

  constructor(props) {
    super(props);

    this.state = {}
  }
    
  componentDidMount(){
    
  }

  componentWillUnmount() {

  }

  render() {

    return (
      <div className="relative">
      
        <Head>
          <title>Erreur</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&display=swap" rel="stylesheet" /> 
					<script src="https://cdn.jsdelivr.net/npm/jquery@latest/dist/jquery.min.js"></script>
        </Head>
  
        <main>
          <div className="container mx-auto">
            <Header />

            <div className="px-16 py-10 w-full text-center">
                <div className="col-6 offset-3 mb-5 mt-5">
                    <h2 className="text-center text-gray-800 font-bold text-2xl pb-4 pt-4">Page non trouvée</h2>
                </div>
                <img src="<%= configuration.base_url %>images/svg/404.svg" alt="Page non trouvée" className="mx-auto" />
            </div>
          </div>
						
					<script type="text/javascript" src="/scripts/main.js"></script>
				</main>
      </div>
    );
  }
}

export default Custom404;
