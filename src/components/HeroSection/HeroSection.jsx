import React from 'react';
import "../HeroSection/HeroSection.css";
import Birds from "../../assets/images/Birds.svg?react";
import Cross from "../../assets/images/Cross.svg?react";
import VideoClose from "../../assets/images/VideoClose.svg?react";
import Circle from "../../assets/images/Circle.svg?react";
import Cloud from "../../assets/images/Cloud.svg?react";
import Boy from "../../assets/images/Boy.svg?react";
import Girl from "../../assets/images/Girl.svg?react";
import Sun from "../../assets/images/Sun.svg?react";
import Students from "../../assets/images/Students.svg?react";
import VidepClose from "../../assets/images/VideoClose.svg?react";
import { Button } from '../Button/Button';

export default function HeroSection() {
  return (
    <section className="hero _flex">
      <div className="hero-right">
        <div className='hero-right-images _flex'>
          <Birds />
          <Cross className="cross-icon" />
        </div>

        <div className='hero-right-contents'>
          <h1 className="hero-title">The Best Place TO Learn and Play For Kids</h1>
          <p className="hero-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.</p>

          <div className="hero-right-browse _flex">
            <Button content="Browse Courses" width="12.0956rem"/>
            <div className='hero-browse_videos _flex'>
              <div className="videoclose-circle _flex">
                <VideoClose />
              </div>

              <Circle className="circle-icon _absolute"/>
              <a href="#" className="hero-right_watch">Watch Now</a>
            </div>
          </div>

          <Cloud className="cloud-icon"/>
        </div>

      </div>

      <div className="hero-left _flex">

        <div className="hero-left_one">
          <Boy className="boy-image"/>

          <div className="hero-left_students _flex">
            <div className='student-rate'>
              <p className='student-rate_num'>10k+</p>
              <p className='student-rate_text'>Student</p>
            </div>
            <Students />
          </div>

        </div>

        <div className="hero-left_two">

          <div className="hero_couses_rate _flex">
            <p className='hero-course_num'>5.8k</p>
            <p className='hero-course_text'>Success Courses</p>
          </div>

          <Girl className="girl-image"/>
        </div>
        <Sun className="sun-icon _absolute"/>
        <Cross className="left-cross_icon _absolute"/>

      </div>

    </section>
  )
}
