import React from 'react'
import "../Cards/InstructorCard.css"
import SocialHandle from "../../assets/images/SocialHandle.svg?react";

export default function InstructorCard({photo, teachername, urls}) {
    return (
        <div className="intructorcard">
            <div className="instructor-image">
                {photo}
            </div>
            <div className="soicalhandel _absolute">
                <SocialHandle />
            </div>

            <div className="intructorcard-info">
                <a href={urls} className="instuctorcard-name">{teachername}</a>
                <p className="instructorcard-occopation">Teacher</p>
            </div>
        </div>
    )
}
