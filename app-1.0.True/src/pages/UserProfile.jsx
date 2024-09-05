import React from 'react';
import './UserProfile.css';

function UserProfile() {
    // En una aplicación real, estos datos vendrían de un estado global o de una API
    const user = {
        name: 'John Doe',
        email: 'john@example.com',
        enrolledCourses: ['React Basics', 'Advanced JavaScript'],
    };

    return (
        <div className="user-profile">
            <h2>User Profile</h2>
            <div>
                <strong>Name:</strong> {user.name}
            </div>
            <div>
                <strong>Email:</strong> {user.email}
            </div>
            <div>
                <strong>Enrolled Courses:</strong>
                <ul>
                    {user.enrolledCourses.map((course, index) => (
                        <li key={index}>{course}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default UserProfile;