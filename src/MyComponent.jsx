
import React,  {useState} from 'react';

function MyComponent() {
  
    const [name, setName] = useState("Geust");
    const [quantity, setQuantity] = useState(1);
    const [comments, setComments] = useState("Write your comments here");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");   

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentsChange(event) {
        setComments(event.target.value);
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }

    function handleShippingChange(event) {
        setShipping(event.target.value);
    }

    return (
        <div >
            <input value={name} onChange={handleNameChange} />
            <p>Hello, {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type='number' />
            <p>Quantity: {quantity}</p>

            <textarea value={comments} onChange={handleCommentsChange} 
            placeholder="Write your comments here" />
            <p>Comments: {comments}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select Payment Method</option>
                <option value="credit">Credit Card</option>
                <option value="debit">Debit Card</option>
                <option value="netbanking">Net Banking</option>
            </select>
            <p>Payment: {payment}</p>

            <input type="radio" value="standard" checked={shipping === "standard"}
            onChange={handleShippingChange} />
            <label>Standard Shipping</label>
            <input type="radio" value="express" checked={shipping === "express"}
            onChange={handleShippingChange} />
            <label>Express Shipping</label>
            <p>Shipping: {shipping}</p>
            
        </div>
    );
}

export default MyComponent;