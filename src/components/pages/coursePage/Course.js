import React, { useState } from 'react';
import SingleCourse from '../../singleCourse/SingleCourse';
import course from '../../../asset/fakeData/fakeData';
import './Course.css';
import AddedCourse from '../../addedCourse/AddedCourse';

const Course = () => {
    const [cart, setCart] = useState([]);
    const handleAdd = (newAdded) => {
        const newCart = [...cart,newAdded];
        setCart(newCart);
    }
    return (
        <div className="container">
            <div className="course-container">
                {
                    course.map(course => <SingleCourse key={course.id} handleAdd={handleAdd} course={course}></SingleCourse>)
                }
            </div>
            <div className="added-course">
                <h4>Course summary:</h4>
                <AddedCourse cart={cart}></AddedCourse>
            </div>
        </div>
    );
};

export default Course;