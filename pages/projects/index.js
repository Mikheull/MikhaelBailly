import React, {Component} from 'react';

import Head from 'next/head'
import Header from '../../components/Header'

import '../../styles/sass/style.scss'


class Projects extends Component {

  constructor(props) {
    super(props);

    this.state = {}
  }
    
  componentDidMount() {
   
  }

  componentWillUnmount() {

  }

  
  render() {
    return (
      <div>
      
        <Head>
          <title>Mikhael Bailly - Projects</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&display=swap" rel="stylesheet" /> 
        </Head>
  
        <Header />
        
      </div>
    );
  }
}

export default Projects;
