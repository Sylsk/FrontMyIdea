import React, { useState } from 'react';

function Buscador({ courses, updateFilteredCourses }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        const filtered = courses.filter(course => course.title.toLowerCase().includes(e.target.value.toLowerCase()));
        updateFilteredCourses(filtered);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={handleSearchChange}
            />
        </div>
    );
}

export default Buscador;
