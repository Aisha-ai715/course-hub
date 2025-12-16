import React from 'react'
import "../PopularPosts/Popular.css"
import PostCard from '../Cards/PostCard'
import Birds from "../../assets/images/Birds.svg?react"
import HalfCircle from "../../assets/images/HalfCircle.svg?react"
import Book from "../../assets/images/Book.svg?react"
import GirlInclass from "../../assets/images/GirlInclass.svg?react"
import StudentsInclass from "../../assets/images/StudentsInclass.svg?react"
import Kindergarden from "../../assets/images/Kindergarden.svg?react"
import { Button } from '../Button/Button'


export default function Popular() {

    const popularPost = [
        { postimg: <GirlInclass />, postdate: "15 April 2024", commentnum: "06", postlink: "#", posttitle: "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat" },
        { postimg: <StudentsInclass />, postdate: "15 April 2024", commentnum: "06", postlink: "#", posttitle: "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat" },
        { postimg: <Kindergarden />, postdate: "15 April 2024", commentnum: "06", postlink: "#", posttitle: "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat" }
    ];

    return (
        <section className="popular">
            <div className="popular-icons _flex">
                <Birds className="popular-bird-img" />
                <HalfCircle className="popular-halfcircle" />
            </div>

            <div className="popular-main _flex">
                <div className="popular-header _flex">

                    <div className="popular-titles">
                        <div className="popular-secondary-title _flex">
                            <Book />
                            <p>EXPLORE NEWSLETTER</p>
                        </div>

                        <h2 className="popular-main-title">Most Popular Post.</h2>
                    </div>

                    <div className="popular-allblog-btn">
                        <Button content="All Blog Post" />
                    </div>

                </div>

                <div className="popular-cards-posts _flex">
                    {
                        popularPost.map((item) => {
                            return (
                                <PostCard postimg={item.postimg} postdate={item.postdate} commentnum={item.commentnum} postlink={item.postlink} posttitle={item.posttitle} />
                            )
                        })
                    }
                </div>
            </div>



        </section>
    )
}
