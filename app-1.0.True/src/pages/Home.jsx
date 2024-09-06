import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import coursesData from './CoursesData';  // Asegúrate de que esta es la ruta correcta
import FeaturedCoursesCarousel from './Carrusel/FeaturedCoursesCarousel';  // Asegúrate de que las rutas de importación son correctas
import TestimonialsCarousel from './Carrusel/TestimonialsCarousel';

function Home() {
    const previewCourses = coursesData.slice(0, 4);  // Selecciona solo los primeros 4 cursos

    return (
        <div className="home">
            <h1>Bienvenido a ένας</h1>
            <p>Explora nuestros cursos y comienza tu aprendizaje hoy!</p>
            <FeaturedCoursesCarousel courses={previewCourses} />
            <TestimonialsCarousel />
        </div>
    );
}

export default Home;

