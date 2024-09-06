import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import testimonialsData from './TestimonialsData';  // Asegúrate de que la ruta sea correcta

function TestimonialsCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };

    return (
        <div className="testimonials-carousel">
            <Slider {...settings}>
                {testimonialsData.map(testimonial => (
                    <div key={testimonial.id} className="testimonial-item">
                        <p className="testimonial-text">"{testimonial.text}"</p>
                        <p className="testimonial-author">— {testimonial.name}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default TestimonialsCarousel;
