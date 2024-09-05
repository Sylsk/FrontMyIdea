import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import coursesData from './CoursesData';  // Asegúrate de que esta es la ruta correcta

function Home() {
    const previewCourses = coursesData.slice(0, 4);  // Selecciona solo los primeros 4 cursos
    return (
        <div className="home">
            <h1>Bienvenido a ένας</h1>
            <p>Explora nuestros cursos y comienza tu aprendizaje hoy!</p>
            <div className="course-list">
                {previewCourses.map(course => (
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
