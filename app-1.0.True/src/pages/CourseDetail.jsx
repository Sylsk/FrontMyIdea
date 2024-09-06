import React from 'react';
import { useParams } from 'react-router-dom';
import './CourseDetail.css';
import courses from './CoursesData';  // Asegúrate de que esta ruta es correcta

function CourseDetail() {
    const { id } = useParams();
    const course = courses.find(course => course.id === parseInt(id));

    if (!course) {
        return <div className="course-detail">Course not found!</div>;
    }

    return (
        <div className="course-detail">
            <h2>{course.title}</h2>
            <p>{course.type}</p>
            <p>{course.longDescription}</p>
            <p>Price: ${course.price.toFixed(2)}</p>
            <p>Duration: {course.duration}</p>
            <p>Level: {course.level}</p>
            <p>Rating:
                <span className="rating-stars">
                    {'★'.repeat(Math.floor(course.rating))}{'☆'.repeat(5 - Math.floor(course.rating))}
                </span>
                ({course.rating.toFixed(1)})
            </p>


            <button>Add to Cart</button>
        </div>
    );
}

export default CourseDetail;
