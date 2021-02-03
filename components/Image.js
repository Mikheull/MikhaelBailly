import React, {Component} from 'react';
import { TweenMax, TimelineMax} from "gsap";

class Image extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visiblity: false 
        }

        this.handleModal = this.handleModal.bind(this);
    }

    
    handleModal() {
        const tl = new TimelineMax();
        const sidebar = document.getElementById('side_header')

        this.setState(state => ({      
            visiblity: !state.visiblity    
        }));
    }

    render() {
        return (
            <div>
				<div className="flex justify-between py-6" data-visible={this.state.visiblity} >
                    <img src={this.props.preview} className="w-auto rounded-lg cursor-pointer" alt={this.props.alt} onClick={this.handleModal}/>
				</div>

                <div className={(this.state.visiblity) ? 'h-screen w-full fixed top-0 left-0 bg-white flex flex-col z-30' : 'hidden'} id="side_header">
                    <div className="h-1/6 flex justify-end">
                        <span onClick={this.handleModal} className="p-10 cursor-pointer"> <img src="/images/icons/x-circle.svg" className="w-8" /></span>
                    </div>
                    
                    <div className="h-5/6 flex flex-col items-center justify-center">
                        <img src={this.props.src} className="w-auto rounded-lg" alt={this.props.alt}/>
                        <p className="text-xl font-semibold uppercase text-gray-900 mt-4">{this.props.small}</p>

                    </div>
                </div>
            </div>
        )
    }
}

export default Image;