import React from 'react';
import "../../components/TestimonialSection/Testimonial.css";
import TestimonialCard from '../Cards/TestimonialCard';
import Elise from "../../assets/images/Elise.svg?react";
import Kathy from "../../assets/images/Kathy.svg?react";
import Cloud from "../../assets/images/Cloud.svg?react";
import Sun from "../../assets/images/Sun.svg?react";
import Book from "../../assets/images/Book.svg?react";

export default function Testimonial() {

    const qoute = "“Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Orci nulla pellentesque dignissim enim. Amet consectetur adipiscing”";
    const testArray = [
        { qoute: qoute, personimg :<Kathy/>, name: "Kathy Sullivan", position: "CEO at ordian it" },
        { qoute: qoute, personimg :<Elise/>, name: "Elsie Stroud", position: "CEO at Edwards" },
        { qoute: qoute, personimg :<Kathy/>, name: "Kathy Sullivan", position: "CEO at ordian it" }
    ];

    return (
        <section className="testemonial">
            <Sun className="testimonial-sun _absolute"/>
            <div className="testimonial-secondary-title _flex">
                <Book />
                <p>TESTIMONIAL</p>
            </div>

            <h2 className="testimonial-main-title">What Parents Say</h2>
            <div className="testimonial-users _flex">
                <Cloud className="testemonial-cloud-img"/>
                <div className='testimoial-users_cards _flex'>
                    {testArray.map((test)=>{
                        return (
                            <TestimonialCard qoute={test.qoute} personimg={test.personimg} name={test.name} position={test.position}/>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
