import React, { useEffect, useState } from 'react';
import SocialService from '../../Service/SocialService/SocialService';
import Banner from '../Banner/Banner';
import './Home.css';


const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <Banner></Banner>
            <h2 className='text-center text-primary mt-3 mb-3'> Our Bike wearhouse</h2>
            <div className='products-container'>
                {
                    products.slice(0, 6).map(product => <SocialService
                        product={product}
                        key={product._id}
                    ></SocialService>)
                }
            </div>

        </div>
    );
};

export default Home;