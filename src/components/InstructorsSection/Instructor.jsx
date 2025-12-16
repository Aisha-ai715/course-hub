import React from 'react'
import "../InstructorsSection/Instructor.css"
import InstructorCard from '../Cards/InstructorCard'
import Cheryl from "../../assets/images/Cheryl.svg?react"
import Willie from "../../assets/images/Willie.svg?react"
import Jimmy from "../../assets/images/Jimmy.svg?react"
import Micheal from "../../assets/images/Micheal.svg?react"
import GoLeft from "../../assets/images/GoLeft.svg?react"
import GoRight from "../../assets/images/GoRight.svg?react"
import Book from "../../assets/images/Book.svg?react"
import SocialHandle from "../../assets/images/SocialHandle.svg?react"


export default function Instructor() {

    const instructorsArray = [
        {photo: <Cheryl/>, teachername: "Cheryl Curry", urls: "#"},
        {photo: <Willie/>, teachername: "Willie Daiz", urls: "#"},
        {photo: <Jimmy/>, teachername: "Jimmy Stifuentes", urls: "#"},
        {photo: <Micheal/>, teachername: "Micheal Hammod", urls: "#"}
    ];

    return (
        <section className="instructor">
            <div className="instuctor-main _flex">

                <div className="instructor-titles">

                    <div className="instructor-secondary-title _flex">
                        <Book />
                        <p>TEACHER</p>
                    </div>

                    <h2 className="instructor-main-title">Meet Our Instructor</h2>
                </div>

                <div className="instructor-colletion _flex">
                    <GoLeft />
                    <GoRight />
                </div>
            </div>

            <div className="intructor-galary _flex">
                {
                    instructorsArray.map((person)=>{
                        return (
                            <InstructorCard photo={person.photo} teachername={person.teachername} urls={person.urls} />
                        )
                    })
                }
            </div>

        </section>
    )
}
