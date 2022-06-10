import React from 'react';
import "../styles/CheckoutProduct.css";
import { useStateValue } from './StateProvider';

function CheckoutProduct({id,image,title,price,rating}) {

  const [state,dispatch] = useStateValue();  

  const removeFromBasket = () => {
      //Remove The Item From Basket
      dispatch({
          type : 'REMOVE_FROM_BAKSET',
          id : id,
      })
  }  

  return (
    <div className='checkoutProduct'>
        <img className="checkoutProduct__image" src={image} alt="Product"/>

        <div className='checkoutProduct__info'>
            <p className='checkoutProduct__title'>{title}</p>
            <p className='checkoutProduct__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='checkoutProduct__rating'>
                {Array(rating).fill().map(()=> (
                    <p>*</p>
                ))}
            </div>
            <button onClick={removeFromBasket}>Remove From Basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct