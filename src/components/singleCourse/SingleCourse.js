import React from 'react';
import Button from 'react-bootstrap/Button';

const SingleCourse = (props) => {
    const course = props.course;
    const {img, title, instructor, email, price} = course;
    const handleAdd = props.handleAdd;
    const courseStyle = {
        width:'60%',
        height:'480px',
        textAlign:'center',
        border: '1px solid gray',
        marginBottom: '20px',
        marginLeft: '40px',
        boxShadow:'5px 5px 10px rgba(0,0,0,.2)'
    }
    const imgStyle = {
        width:'100%'
    }
    return (
        <div style={courseStyle}>
            <img style={imgStyle} src={img} alt="" ></img>
            <h4>{title}</h4>
            <p>instructor: {instructor}</p>
            <p><small>conact us: {email}</small></p>
            <h5>Price: ${price}</h5>
            <Button onClick={() => handleAdd(course)} variant="primary">Enroll now</Button>
        </div>
    );
};

export default SingleCourse;