import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'; // Assuming email is stored in Redux
import axios from "axios";
import CartBox from  '../pages/CartBox';
import { addToCart, deleteItem } from '../reduxSlices/cartSlice';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
   // Get logged-in user email
  const { isAuthenticated, email } = useSelector(state => state.user.user);
  const userEmail = email || JSON.parse(sessionStorage.getItem("user"))?.email;
  const dispatch = useDispatch();
 
  useEffect(() => {
    if (isAuthenticated && userEmail) {
      fetchCartItems();
    }
  }, [isAuthenticated && userEmail]);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get(`https://tastynestbackend-5.onrender.com/cart?email=${userEmail}`);

      setCartItems(response.data);
      dispatch(addToCart(response.data.length));

    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };
  
  const handleRemove = async (id) => {
    try {
      await axios.delete(`https://tastynestbackend-5.onrender.com/cart`, { data: { _id: id } });
      setCartItems(prevItems => prevItems.filter(item => item._id !== id)); // Remove item from UI
      dispatch(addToCart(cartItems.length - 1));

    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {cartItems.length === 0 ? (
        <p className="text-gray-600">No items in the cart.</p>
      ) : (
        cartItems.map((item) => (
          <CartBox
            key={item._id}
            id={item._id}
            name={item.name}
            price={item.price}
            img={item.img}
            quantity={item.quantity}
            onRemove={() => handleRemove(item._id)}

          />
        ))
      )}
    </div>
  );
};

export default Cart;
