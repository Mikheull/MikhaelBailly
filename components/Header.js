import React, {Component} from 'react';

// Components
import Link from 'next/link'

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visiblity: false,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({      
            visiblity: !state.visiblity    
        }));
    }

    render() {
        return (
            <>
                <header className="p-3 container mx-auto header-wrapper">
                    <Link href='/'>
                        <a className='inline-flex items-center p-2 mr-4'>
                            <img src="/images/logo.svg" />
                        </a>
                    </Link>
                    <div className="nav-but-wrap">
                        <div className="menu-icon hover-target">
                            <span className="menu-icon__line menu-icon__line-left"></span>
                            <span className="menu-icon__line"></span>
                            <span className="menu-icon__line menu-icon__line-right"></span>
                        </div>					
                    </div>	
                </header>				

                <div className="nav">
                    <div className="nav__content">
                        <ul className="nav__list">
                            <li className="nav__list-item active-nav">
                                <Link href='/'>
                                    <a className=''>
                                        Home
                                    </a>
                                </Link>
                            </li>
                            <li className="nav__list-item active-nav">
                                <Link href='/projects'>
                                    <a className=''>
                                        Projects
                                    </a>
                                </Link>
                            </li>
                            <li className="nav__list-item active-nav">
                                <Link href='/weekdev'>
                                    <a className=''>
                                        WeekDev
                                    </a>
                                </Link>
                            </li>
                            <li className="nav__list-item active-nav">
                                <Link href='/resume'>
                                    <a className=''>
                                        My Resume
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default Header;