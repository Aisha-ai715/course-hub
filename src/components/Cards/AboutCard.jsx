import React from 'react';
import "../Cards/AboutCard.css";

export default function AboutCard({ icon, aboutTitle, aboutDescription, bgcolor, tcolor, dcolor }) {
    return (
        <div className='about-card' style={{backgroundColor: bgcolor}}>
            <div className="about-image">{icon}</div>

            <p className='about-card-title' style={{color: tcolor}}>{aboutTitle}</p>
            <p className='about-card-description' style={{color: dcolor}}>{aboutDescription}</p>
        </div>
    )
}
