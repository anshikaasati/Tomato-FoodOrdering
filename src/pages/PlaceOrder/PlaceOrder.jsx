import React, { useContext } from 'react';
import "./PlaceOrder.css";
import { StoreContext } from '../../context/StoreContext';
import { toast } from 'react-hot-toast';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Check if all required fields are filled
    const form = e.target;
    const allFieldsFilled = [...form.querySelectorAll('input[required]')].every(input => input.value.trim() !== '');

    if (allFieldsFilled && getTotalCartAmount() > 0) {
      toast.success("Order Placed Successfully!");
      // You can also handle further actions here, like clearing the cart or redirecting the user
    } else {
      if (!allFieldsFilled) {
        toast.error("Please fill all required fields.");
      }
      if (getTotalCartAmount() <= 0) {
        toast.error("Your cart is empty. Add items to your cart before placing an order.");
      }
    }
  };

  return (
    <form className='place-order' onSubmit={handleSubmit}>
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className='multi-fields'>
          <input type="text" placeholder='First Name' required />
          <input type="text" placeholder='Last Name' required />
        </div>
        <input type="email" placeholder='Email Address' required />
        <input type="text" placeholder='Street' required />
        <div className='multi-fields'>
          <input type="text" placeholder='City' required />
          <input type="text" placeholder='State' required />
        </div>
        <div className='multi-fields'>
          <input type="text" placeholder='Zip-code' required />
          <input type="text" placeholder='Country' required />
        </div>
        <input type="text" placeholder='Phone' required />
      </div>
      <div className='place-order-right'>
        <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Delivery Fees</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button type="submit">CONFIRM YOUR ORDER</button>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;
