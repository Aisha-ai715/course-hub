import React from 'react';
import "../SchoolNumSection/SchoolNum.css";
import SchoolVideo from "../../assets/images/SchoolVideo.svg?react";
import YellowCloseVideo from "../../assets/images/YellowCloseVideo.svg?react";
import StudentNum from "../../assets/images/StudentNum.svg?react";
import HandShake from "../../assets/images/HandShake.svg?react";
import ThreeStudents from "../../assets/images/ThreeStudents.svg?react";
import OpenBook from "../../assets/images/OpenBook.svg?react";

export default function SchoolNum() {
  return (
    <section className="schoolnum">

      <div className="schoolnum-video">
        <div className='video-img'></div>

        <div className="schoolnum-closevideo _flex">
          <YellowCloseVideo className="yellow-close-video" />
        </div>

      </div>

      <div id='studentnum-total_part' className='_flex'>
        <div className="schoolnum-total">
          <StudentNum className="schoolnum-icon"/>
          <h3 className='schoolnum_account'>2,500</h3>
          <p className='schoolnum_text'>Total Teacher</p>
        </div>

        <div className="schoolnum-dotline"></div>

        <div className="schoolnum-total">
          <HandShake className="schoolnum-icon"/>
          <h3 className='schoolnum_account'>5,000</h3>
          <p className='schoolnum_text'>Total student</p>
        </div>

        <div className="schoolnum-dotline"></div>

        <div className="schoolnum-total">
          <ThreeStudents className="schoolnum-icon"/>
          <h3 className='schoolnum_account'>350</h3>
          <p className='schoolnum_text'>Total classroom</p>
        </div>

        <div className="schoolnum-dotline"></div>

        <div className="schoolnum-total">
          <OpenBook className="schoolnum-icon"/>
          <h3 className='schoolnum_account'>1,200</h3>
          <p className='schoolnum_text'>Best Awards Won</p>
        </div>

      </div>

    </section>
  )
}
