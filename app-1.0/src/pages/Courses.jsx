import React from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';
import courses from './CoursesData';  // Importa los datos de los cursos

function Courses() {
    return (
        <div className="courses">
            <h2>Our Courses</h2>
            <div className="course-list">
                {courses.map(course => (
                    <div key={course.id} className="course-item">
                        <h3>{course.title}</h3>
                        <p>Price: ${course.price.toFixed(2)}</p>  
                        <p>Duration: {course.duration}</p>
                        <p>Level: {course.level}</p>
                        <p>Rating: 
                            <span className="rating-stars">
                                {'★'.repeat(Math.floor(course.rating))}{'☆'.repeat(5 - Math.floor(course.rating))}
                            </span>
                            ({course.rating.toFixed(1)})
                        </p>
                        <p>{course.description}</p>
                        {/* Asegúrate de que la clase details-link esté aplicada aquí */}
                        <Link to={`/courses/${course.id}`} className="details-link">View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Courses;
