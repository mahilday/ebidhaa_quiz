import React from 'react';
import './Getapp.css'
import Bell from '../../../assets/icons/notif.svg'

function Getapp(){
    return(
        <div className="getapp_wrapper">
            <img className="notif" src={Bell} alt="notif" /> 
            <h2 className="app">Get Our App!</h2>
            {/* make a div for each store */}
            <div className="store">
                <div className="circle ml-3"></div>
                <p className="col-8">Get on the <span className="bigger">Appstore</span></p>
            </div>
            <div className="store">
                <div className="circle ml-3"></div>
                <p className="col-8">Get on the <span className="bigger">Playstore</span></p>
            </div>
        </div>
    )
}
export default Getapp;