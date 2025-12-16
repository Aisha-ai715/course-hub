import React from 'react'
import "../Cards/TestimonialCard.css"
import Stars from "../../assets/images/Stars.svg?react";

export default function TestimonialCard({qoute,personimg, name, position }) {
    return (
        <div className="testmonial-card">
            <Stars className="testemoial-card-stars"/>
            <p className="testemoial-card-text">{qoute}</p>

            <div className="testimonial-card-person _flex">
               <div className="testemonial-image">{personimg}</div>

               <div className="testemoial-person_info">
                <p className="testimoial-info_name">{name}</p>
                <p className="testimonial-info_position">{position}</p>
               </div>
            </div>
        </div>
    )
}
