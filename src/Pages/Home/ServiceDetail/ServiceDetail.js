import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div>
            <div className='w-50 mx-auto'>
                <h2 className='text-primary'>Product Detail</h2>
                <h3> name:{product.name}</h3>
                <img width='350px' src={product.img} alt="" />
                <h6>{product.suplierName}</h6>
                <p>{product.description}</p>
                <h3>Price:{product.price}</h3>
                <h3>Quantity:{product.quantity}</h3>

            </div>

        </div>
    );
};

export default ServiceDetail;