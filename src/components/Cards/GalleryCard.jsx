import React from 'react';
import GalleryImg1 from "../../assets/images/GalleryImg1.svg?react";
import GalleryImg2 from "../../assets/images/GalleryImg2.svg?react";
import GalleryImg3 from "../../assets/images/GalleryImg3.svg?react";
import GalleryImg4 from "../../assets/images/GalleryImg4.svg?react";
import GalleryImg5 from "../../assets/images/GalleryImg5.svg?react";
import GalleryImg6 from "../../assets/images/GalleryImg6.svg?react";

export default function GalleryCard() {
    const cardStyle = {
        display: "grid",
        gridTemplateRows: "5.3537rem 5.3537rem",
        gridTemplateColumns: "5.3537rem 5.3537rem 5.3537rem",
        gap: "10px",
    };

    return (
        <div style={cardStyle}>
           <GalleryImg1/>
           <GalleryImg2 />
           <GalleryImg3/>
           <GalleryImg4/>
           <GalleryImg5/>
           <GalleryImg6 />
        </div>
    )
}
