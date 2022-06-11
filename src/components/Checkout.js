import React from 'react'
import Subtotal from './Subtotal';
import '../styles/Checkout.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {

  const [state,dispatch] = useStateValue();

  return (
    <div className="checkout">
        <div className='checkout__left'>
          <img className='checkout__ad'
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/0CC_Amazon1._CB423492668_.jpg"
            alt="Advertisement"
          />

          <div>
              <h3 className='checkout__email'> Hello, {state.user?.email} </h3>
              <h2 className='checkout__title'>
                Your Shopping Basket
              </h2>

              {
                state.basket.map((item) => (
                  <CheckoutProduct
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                  />
                ))
              }
          </div>
        </div>

        <div className='checkout__right'>
          <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout