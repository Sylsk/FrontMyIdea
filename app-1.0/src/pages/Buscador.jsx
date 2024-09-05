import React, { useState } from 'react';
import courses from './CoursesData'; // Asume que tienes este archivo importado correctamente

function Courses() {
    const [filteredCourses, setFilteredCourses] = useState(courses);
    const [level, setLevel] = useState('');
    const [price, setPrice] = useState({ min: 0, max: 100 });

    const handleLevelChange = (e) => {
        setLevel(e.target.value);
        filterCourses(e.target.value, price);
    };

    const handlePriceChange = (range) => {
        setPrice(range);
        filterCourses(level, range);
    };

    const filterCourses = (level, price) => {
        const filtered = courses.filter(course => 
            (course.level === level || level === '') && 
            course.price >= price.min && 
            course.price <= price.max
        );
        setFilteredCourses(filtered);
    };

    return (
        <div>
            <h2>Our Courses</h2>
            <div>
                <label>
                    Level:
                    <select value={level} onChange={handleLevelChange}>
                        <option value="">All Levels</option>
                        <option value="Principiante">Principiante</option>
                        <option value="Intermedio">Intermedio</option>
                        <option value="Avanzado">Avanzado</option>
                    </select>
                </label>
                <label>
                    Price Range:
                    <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={price.max} 
                        onChange={(e) => handlePriceChange({ ...price, max: Number(e.target.value) })}
                    />
                    Up to ${price.max}
                </label>
            </div>
            <div>
                {filteredCourses.map(course => (
                    <div key={course.id}>
                        <h3>{course.title}</h3>
                        <p>${course.price} - {course.level}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Courses;
