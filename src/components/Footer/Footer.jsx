import React from 'react';
import "../Footer/Footer.css";
import Location from "../../assets/images/Location.svg?react";
import Email from "../../assets/images/Email.svg?react";
import Phone from "../../assets/images/Phone.svg?react";
import LeftChevron from "../../assets/images/LeftChevron.svg?react";
import { Button } from '../Button/Button';
import GalleryCard from '../Cards/GalleryCard';
import WhiteLogo from "../../assets/images/WhiteLogo.svg?react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


export default function Footer() {


    return (
        <section className="footer">
            <div className="footer-main">
                <div className="footer-contact _flex">

                    <div className="footer-contact-content _flex">
                        <Location />
                        <div className="footer-address_content">
                            <p className='footer-address_header'>Address:</p>
                            <p className='footer-address_info'>1925 Boggess Street</p>
                        </div>
                    </div>

                    <div className="footer-contact_line"></div>

                    <div className="footer-contact-content _flex">
                        <Phone />
                        <div className="footer-address_content">
                            <p className='footer-address_header'>Phone:</p>
                            <p className='footer-address_info'>(00) 875 784 568</p>
                        </div>
                    </div>

                    <div className="footer-contact_line"></div>

                    <div className="footer-contact-content _flex">
                        <Email />
                        <div className="footer-address_content">
                            <p className='footer-address_header'>Email:</p>
                            <p className='footer-address_info'>info@gmail.com</p>
                        </div>
                    </div>

                </div>

                <div className="footer-overview _flex">
                    <div className="footer-overview-main _flex">
                        <div className="footer-overview_sites">
                            <WhiteLogo className="footer-overview-log" />
                            <p>Interdum velit laoreet id donec ultrices tincidunt arcu. Tincidunt tortor aliqua mfacilisi cras fermentum odio eu.</p>
                            <div className="footer-overview_icons _flex">
                                <span><FaFacebookF className='fa-icon' /></span>
                                <span><FaInstagram className='fa-icon' /></span>
                                <span><FaPinterestP className='fa-icon' /></span>
                                <span><FaTwitter className='fa-icon' /></span>
                            </div>
                        </div>

                        <div className="footer-overview_services">
                            <p className="footer_services-title">our services:</p>

                            <div className="footer_services _flex">
                                <div className="footer_service-link _flex">
                                    <LeftChevron className="leftChveron-icon" />
                                    <a href="#">Web development</a>
                                </div>

                                <div className="footer_service-link _flex">
                                    <LeftChevron className="leftChveron-icon" />
                                    <a href="#">UI/UX Design</a>
                                </div>

                                <div className="footer_service-link _flex">
                                    <LeftChevron className="leftChveron-icon" />
                                    <a href="#">Management</a>
                                </div>

                                <div className="footer_service-link _flex">
                                    <LeftChevron className="leftChveron-icon" />
                                    <a href="#">Digital Marketing</a>
                                </div>

                                <div className="footer_service-link _flex">
                                    <LeftChevron className="leftChveron-icon" />
                                    <a href="#">Blog News</a>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="footer-overview-side _flex">
                        <div className="footer-side_gallery">
                            <p>Gallery</p>
                            <GalleryCard />
                        </div>

                        <div className="footer-side_subscribe">
                            <p>Subscribe</p>
                            <form className='subscribe-form _flex'>
                                <input id='subscribe-form-input' type='email' placeholder='Enter your email:' />
                                <Button type="submit" content="SUBSCRIBE NOW" width="184.05px" background="var(--teal)" borderRadius="5px" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-copyright _flex">
                Copyright &copy; 2024 <a href="#">edunity</a> || All Rights Reserved
            </div>
        </section>
    )
}
