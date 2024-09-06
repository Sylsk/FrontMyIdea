import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';
import coursesData from './CoursesData';
import Filters from './Filters';

function Courses() {
    const [filteredCourses, setFilteredCourses] = useState(coursesData);

    useEffect(() => {
        setFilteredCourses(coursesData); // Resetea a todos los cursos cuando el componente se carga
    }, []);

    const handleTypeChange = (type) => {
        filterCourses({ type });
    };

    const handleLevelChange = (level) => {
        filterCourses({ level });
    };

    const handlePriceOrderChange = (order) => {
        let sortedCourses = [...filteredCourses];
        if (order === 'asc') {
            sortedCourses.sort((a, b) => a.price - b.price);
        } else if (order === 'desc') {
            sortedCourses.sort((a, b) => b.price - a.price);
        }
        setFilteredCourses(sortedCourses);
    };

    const filterCourses = (filters) => {
        let updatedCourses = coursesData.filter(course => {
            return (filters.type ? course.type === filters.type : true) &&
                (filters.level ? course.level === filters.level : true);
        });
        setFilteredCourses(updatedCourses);
    };

    return (
        <div className="courses">
            <h2>Our Courses</h2>
            <Filters
                onTypeChange={handleTypeChange}
                onLevelChange={handleLevelChange}
                onPriceOrderChange={handlePriceOrderChange}
            />
            <div className="course-list">
                {filteredCourses.map(course => (
                    <div key={course.id} className="course-item">

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
                        <Link to={`/courses/${course.id}`} className="details-link">View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Courses;
