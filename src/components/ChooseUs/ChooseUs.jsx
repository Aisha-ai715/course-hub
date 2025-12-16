import React from 'react';
import "../ChooseUs/ChooseUs.css";
import SmilingKid from "../../assets/images/SmilingKid.svg?react";
import Birds from "../../assets/images/Birds.svg?react";
import Book from "../../assets/images/Book.svg?react";
import Done from "../../assets/images/Done.svg?react";
import { Button } from '../Button/Button';

export default function ChooseUs() {
    return (
        <section className="chooseus _flex">
            <div className="chooseus-left">
                <Birds className="chooseus-birds _absolute" />

                <div className="chooseus-why _flex">
                    <Book />
                    <p className="choosus-why_p">WHY CHOOSE US</p>
                </div>

                <h2 className="choosus-title">New approach to fun</h2>
                <p className='chooseus-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et.</p>

                <div className="chooseus-qualites chooseus-quality_one _flex">
                    <div className="quality_text _flex">
                        <Done />
                        <p>Best Teaching</p>
                    </div>

                    <div className="quality_text _flex">
                        <Done />
                        <p>Quality Educators</p>
                    </div>
                </div>

                <div className="chooseus-qualites chooseus-quality_two _flex">
                    <div className="quality_text _flex">
                        <Done />
                        <p>Expert Tutor</p>
                    </div>

                    <div className="quality_text _flex">
                        <Done />
                        <p>Affordable</p>
                    </div>
                </div>

                <Button content="Find Events" width="9.8244rem" background="var(--teal)"/>

            </div>

            <div className="choosus-right">
                <SmilingKid className="smilingkid_image" />
            </div>
        </section>
    )
}
