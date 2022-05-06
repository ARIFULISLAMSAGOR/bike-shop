import React from 'react';
import './SocialService.css';

const SocialService = ({ product }) => {
    const { name, description, img, price, supplierName, quantity } = product;
    return (
        <div className='services'>
            <img height='300px' width='300px' src={img} alt="" />
            <h3>Name:{name}</h3>
            <p>Price:{price}</p>
            <p>Quantity:{quantity}</p>
            <p>Supplier-name:{supplierName}</p>
            <p>{description}</p>
            <button className='btn btn-primary text-center border-none'>Update</button>
        </div>
    );
};

export default SocialService;