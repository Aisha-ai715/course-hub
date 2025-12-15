import React from 'react';
import "../Header/Header.css";
import { GoClockFill } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
import English from "../../assets/images/English.svg?react";
import { FaAngleDown } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Logo from "../../assets/images/Logo.svg?react";
import Search from "../../assets/images/Search.svg?react";
import Person from "../../assets/images/Person.svg?react";
import { Button } from '../Button/Button';

export default function Header() {
    return (
        <header>
            <div className="top-nav _flex">
                <div className='top-nav_opening _flex'>
                    <GoClockFill className='go-clock' />
                    <p>Working: Monday - Friday.9:Am - 5:Pm</p>
                    <span className="vertical-line line_one"></span>
                    <FaLocationDot className='location-icon' />
                    <p>Hudson, Wisconsin(WI), 54016</p>
                </div>

                <div className="social-icons _flex">
                    <div className="social-icons_languages _flex">
                        <English />
                        <p>English</p>
                        <FaAngleDown />
                        <span className="vertical-line line_two"></span>
                    </div>

                    <div className='social-icons_links _flex'>
                        <span className='_flex'>
                            <a><FaFacebookF /></a>
                            <a><FaTwitter /></a>
                            <a><FaSkype /></a>
                            <a><FaLinkedin /></a>
                        </span>
                        <div className='teal-square'></div>
                    </div>

                </div>

            </div>

            <div className="main-nav _flex">
                <Logo />

                <nav className="main-nav-menu">
                    <ul className='_flex'>

                        <li className='nav_list _flex'>
                            <a href='#'>Home</a>
                            <FaAngleDown />
                        </li>
                        <li> <a href="#">About Us</a></li>
                        <li className='nav_list _flex'>
                            <a href="#">Courses</a>
                            <FaAngleDown />
                        </li>
                        <li><a href="#">Pages</a></li>
                        <li className='nav_list _flex'>
                            <a href="#">Blog</a>
                            <FaAngleDown />
                        </li>
                        <li> <a href="#">contact</a></li>

                    </ul>
                </nav>

                <div className="main-nav-info _flex">
                    <Search />
                    <Person />
                    <Button content="Contact"/>
                </div>
            </div>
        </header>
    )
}
