import React from 'react';
import { useParams } from 'react-router-dom';
import './CourseDetail.css';

function CourseDetail() {
    const { id } = useParams();

    // En una aplicación real, aquí cargarías los detalles del curso desde una API
    const course = {
        id: id,
        title: `Course ${id}`,
        description: 'This is a detailed description of the course.',
        price: 59.99,
    };

    return (
        <div className="course-detail">
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <p>Price: ${course.price}</p>
            <button>Add to Cart</button>
        </div>
    );
}

export default CourseDetail;