import React from "react";
import './Logo.css'
import Tilt from 'react-parallax-tilt';
import brain from './brain.png'


const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt
                style={{
                    height: '200px',
                    width: '200px',
                    background: `linear-gradient(89deg, #f63a5d 0%, #a15ee6 100%)`,
                    display: "flex",
                    justifyContent: "flex-start",
                    boxShadow: '1px 2px 9px #F4AAB9',
                    margin: '2em'
                }}>
                <div className="Tilt-inner">
                    <img className='brain' alt="logo" src={brain} />
                </div>
            </Tilt>
        </div>
    );
};


export default Logo;




