// src/components/FeaturedCoursesCarousel.js
import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
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
                <Link to={`/courses/${course.id}`} key={course.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div>
                        <img src={course.img} alt={course.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <h3>{course.title}</h3>
                        <p>
                            <span className="rating-stars">
                                {'★'.repeat(Math.floor(course.rating))}{'☆'.repeat(5 - Math.floor(course.rating))}
                            </span>

                        </p>
                        <p>${course.price.toFixed(2)}</p>
                    </div>
                </Link>
            ))}
        </Slider>
    );
}


export default FeaturedCoursesCarousel;
