import React from 'react';
import { Link } from 'react-router-dom'; // Importamos Link para la navegación
import './Home.css';

// Simulamos algunos datos de los cursos para Home
const coursesPreview = [
    { id: 1, title: 'React Basics', price: 49.99 },
    { id: 2, title: 'Advanced JavaScript', price: 69.99 },
    { id: 3, title: 'Node.js Fundamentals', price: 59.99 },
];

function Home() {
    return (
        <div className="home">
            <h1>Bienvenido a ένας</h1>
            <p>Siempre hay algo nuevo para aprender!</p>
            <div className="course-list">
                {coursesPreview.slice(0, 3).map(course => (
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

export default Home;
