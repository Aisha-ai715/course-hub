import React from 'react';
import "../AboutSection/AboutSection.css";
import AboutCard from '../Cards/AboutCard';
import Cube from "../../assets/images/Cube.svg?react";
import SchoolBuilding from "../../assets/images/SchoolBuilding.svg?react";
import Class from "../../assets/images/Class.svg?react";
import Cloud from "../../assets/images/Cloud.svg?react";
import HappyStudents from "../../assets/images/HappyStudents.svg?react";
import AboutBoy from "../../assets/images/AboutBoy.svg?react";
import AboutGirl from "../../assets/images/AboutGirl.svg?react";
import Book from "../../assets/images/Book.svg?react";
import Tick from "../../assets/images/Tick.svg?react";
import Birds from "../../assets/images/Birds.svg?react";

export default function AboutSection({ icon, aboutTitle, aboutDescription, bgcolor, tcolor, dcolor }) {

    const description = "Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur.Excepteur";

    return (
        <section className='about' >
            <div className="about-cards _flex">
                <AboutCard icon={<Cube />} aboutTitle={"START COURSES"} aboutDescription={description} bgcolor="#F3F5F5" tcolor="#0E2A46" dcolor="#4D5756" />
                <AboutCard icon={<Class />} aboutTitle={"EXPERT TEACHERS"} aboutDescription={description} bgcolor="var(--teal)" tcolor="white" dcolor="white" />
                <AboutCard icon={<SchoolBuilding />} aboutTitle={"STRATEGI LOCATION"} aboutDescription={description} bgcolor="#F3F5F5" tcolor="#0E2A46" dcolor="#4D5756" />
            </div>

            <div className="about-main _flex">
                <div className="about-left _flex">
                    <Cloud />
                    <div className='_flex'>                       
                        <div className='about-left-images _flex'>

                            <div className='about-left_rate _flex'>
                                <div className='about-rate_content'>
                                    <p>Happy</p>
                                    <p>Student</p>
                                </div>
                                <HappyStudents />
                            </div>

                            <AboutBoy className="aboutboy-image" />
                        </div>

                        <AboutGirl className="aboutgirl-image " />
                    </div>

                </div>

                <div className="about-right">
                    <div className='about-right-info'>
                        <Book />
                        <p>ABOUT US</p>
                    </div>

                    <h2 className="about-right-title">It's our passion to work with children at kindergarten.</h2>
                    <p className="about-right-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud..</p>

                    <div>
                        <div>
                            <Tick />
                            <p>QUALITY EDUCATIORS</p>
                        </div>
                        <div>
                            <Tick />
                            <p>PLAY TO LEARN</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <Tick />
                            <p>SAFETY AND SECURITY</p>
                        </div>
                        <div>
                            <Tick />
                            <p>HOMELIKE ENVIROMEND</p>
                        </div>
                    </div>

                    <button className="admission-open-btn">Admission Open</button>
                    <Birds />

                </div>
            </div>
        </section >
    )
}
