// src/components/FeaturedCoursesCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function FeaturedCoursesCarousel({ courses }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <Slider {...settings}>
            {courses.map(course => (
                <div key={course.id}>
                    <img src={course.img} alt={course.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                    <h3>{course.title}</h3>
                    <p>${course.price.toFixed(2)}</p>
                </div>
            ))}
        </Slider>
    );
}

export default FeaturedCoursesCarousel;
