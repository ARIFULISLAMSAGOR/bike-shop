import React, { useEffect, useState } from 'react';

const MyItem = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleUserDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete?')
        if (proceed) {
            console.log('deleting user with id', id);
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleted');
                        const remaining = products.filter(product => product._id !== id);
                        setProducts(remaining);
                    }
                })
        }
    }
    return (
        <div>
            <div className='products-container'>
                {
                    products.map(product => <li><div className='services'>
                        <img height='300px' width='300px' src={product.img} alt="" />
                        <h3>Name:{product.name}</h3>
                        <p>Price:{product.price}</p>
                        <p>Quantity:{product.quantity}</p>
                        <p>Supplier-name:{product.supplierName}</p>
                        <p>{product.description}</p>
                        <button onClick={() => handleUserDelete(product._id)} className='btn btn-primary text-center border-none'>Delete</button>
                    </div></li>)
                }
            </div>
        </div>
    );
};

export default MyItem;

