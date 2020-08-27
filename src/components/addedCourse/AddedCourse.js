import React from 'react';
import ShowAdded from '../showAdded/ShowAdded';

const AddedCourse = (props) => {
    const carts = props.cart;
    const cartStyle = {
        textAlign:'left'
    }
    const total = carts.reduce((total, cart) => total + cart.price, 0)
    const tax = (total / 10).toFixed(2);
    const grandTotal = Number(total) + Number(tax);
    return (
        <div>
            <div style={cartStyle}>
                <table>
                    <tbody>
                        <tr><td>Total added: </td><td>{carts.length}</td></tr>
                        <tr><td>Product price: </td><td>${total.toFixed(2)}</td></tr>
                        <tr><td>Tax: </td><td>${tax}</td></tr>
                        <tr><td colSpan="2"><b><hr></hr></b></td></tr>
                        <tr><td>Total price: </td><td>${grandTotal.toFixed(2)}</td></tr>
                    </tbody>
                </table>
            </div>
            <div>
                <br></br><br></br>
                <h4>Your added course:</h4>
                 {
                     carts.map(cartElement => <ShowAdded key={cartElement.id} cartElement={cartElement} ></ShowAdded>)
                 }
            </div>
        </div>
    );
};

export default AddedCourse;