import React, {Component} from 'react';

import Head from 'next/head'
import Header from '../../components/Header'
import Video from '../../components/Video'
import {} from '../../helper/functions'

import '../../styles/sass/style.scss'

class Project extends Component {
    constructor(props) {
        super(props);
    
        this.state = {}
    }

    static async getInitialProps({query, req}) {
        const {project} = query;
        return {project}
    }

    componentDidMount() {
       
    }
    
    componentWillUnmount() {
    
    }

    render() {
        return (
            <div>
                <Head>
                    <title>Mikhael Bailly - Project</title>
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&display=swap" rel="stylesheet" /> 
                </Head>
        
                <Header />
            </div>
        )
    }
}

export default Project;