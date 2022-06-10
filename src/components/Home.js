import React from 'react';
import "../styles/Home.css";
import Product from './Product';

function Home() {
  return (
    <div className="home">
        <div className="home__container">
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt="Amazon Prime Video"
            />

            <div className="home__row">
                <Product 
                    id="1"
                    title="Product 1"
                    image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                    price={29.9}
                    rating={3}
                />
                <Product
                    id="2"
                    title="Product 2"
                    image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                    price={29.9}
                    rating={3}
                />
            </div>

            <div className="home__row">
                <Product
                    id="2"
                    title="Product 2"
                    image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                    price={29.9}
                    rating={3}
                />
                <Product
                    id="2"
                    title="Product 2"
                    image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                    price={29.9}
                    rating={3}
                />
                <Product
                    id="2"
                    title="Product 2"
                    image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                    price={29.9}
                    rating={3}
                />
            </div>

            <div className="home__row">
                <Product
                    id="2"
                    title="Product 2"
                    image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                    price={29.9}
                    rating={3}
                />
            </div>

        </div> 
    </div>
  )
}

export default Home