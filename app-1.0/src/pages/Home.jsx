import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const coursesPreview = [
    { id: 1, title: 'React Basics', price: 49.99 },
    { id: 2, title: 'Advanced JavaScript', price: 69.99 },
    { id: 3, title: 'Node.js Fundamentals', price: 59.99 },
];

function Home() {
    return (
        <div className="home">
            <h1>Bienvenido a ένας</h1>
            <p>Explora nuestros cursos y comienza tu aprendizaje hoy!</p>
            <div className="course-list">
                {coursesPreview.map(course => (
                    <div key={course.id} className="course-item">
                        <h3>{course.title}</h3>
                        <p className="price">Price: ${course.price.toFixed(2)}</p>
                        <Link to={`/courses/${course.id}`} className="details-link">View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
