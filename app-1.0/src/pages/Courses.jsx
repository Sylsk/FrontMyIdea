import React from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';

function Courses() {
    const courses = [
        { id: 1, title: 'React Basics', price: 49.99 },
        { id: 2, title: 'Advanced JavaScript', price: 69.99 },
        { id: 3, title: 'Node.js Fundamentals', price: 59.99 },
    ];

    return (
        <div className="courses">
            <h2>Our Courses</h2>
            <div className="course-list">
                {courses.map(course => (
                    <div key={course.id} className="course-item">
                        <h3>{course.title}</h3>
                        <p>Price: ${course.price}</p>
                        <Link to={`/courses/${course.id}`}>View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Courses;