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
                        <p>Price: ${course.price}</p>
                        <p>Duration: {course.duration}</p>
                        <p>Level: {course.level}</p>
                        <p>Rating: <div className="rating">
                             {'★'.repeat(Math.floor(course.rating)) + (course.rating % 1 ? '' : '')}
                            ({course.rating.toFixed(1)})
                        </div>
                        </p>
                        <p>{course.description}</p>
                        <Link to={`/courses/${course.id}`}>View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Courses;
