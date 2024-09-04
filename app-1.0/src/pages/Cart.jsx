import React from 'react';
import './Cart.css';

function Cart() {
    // En una aplicación real, estos datos vendrían de un estado global o de una API
    const cartItems = [
        { id: 1, title: 'React Basics', price: 49.99 },
        { id: 2, title: 'Advanced JavaScript', price: 69.99 },
    ];

    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                    <span>{item.title}</span>
                    <span>${item.price.toFixed(2)}</span>
                </div>
            ))}
            <div className="cart-total">
                <strong>Total: ${total.toFixed(2)}</strong>
            </div>
            <button>Checkout</button>
        </div>
    );
}

export default Cart;