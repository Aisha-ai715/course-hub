import React from 'react'
import "../../components/Cards/PostCard.css"
import Date from "../../assets/images/Date.svg?react"
import Message from "../../assets/images/Message.svg?react"
import { Button } from '../Button/Button'

export default function PostCard({postimg, postdate, commentnum, postlink, posttitle}) {
    return (
        <div className='postcard'>
            <div className="postcard-image">
                {postimg}
            </div>

            <div className="postcard-info _flex">
                <div className="postcard-date _flex">
                    <Date />
                    <p>{postdate}</p>
                </div>

                <div className="postcard-comment_num _flex">
                    <Message />
                    <p>Comment ({commentnum})</p>
                </div>
            </div>
            <div className="postcard-main-header">
                <a href={postlink} className="postcard-title">{posttitle}</a>
            </div>

            <Button content="Read More" width="8.4031rem" background="var(--teal)" height="3.0313rem" borderRadius="var(--secondary-border-radious)"/>

        </div>
    )
}
