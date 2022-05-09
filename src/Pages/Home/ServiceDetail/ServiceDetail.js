import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const restocRef = useRef(0);
    useEffect(() => {
        const url = `https://evening-dusk-98750.herokuapp.com/product/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productId])

    const handleDelivered = productId => {
        if (product.quantity > 0) {
            const { quantity, ...rest } = product;
            const newQuantity = parseInt(quantity) - 1;
            const newItem = { quantity: newQuantity, ...rest }
            setProduct(newItem)

            const url = `http://https://evening-dusk-98750.herokuapp.com/product/${productId}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newItem)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                });
        }

    };

    const handleRestok = productId => {
        const restocQuantity = restocRef.current.value;
        const { quantity, ...rest } = product;
        const newQuantity = parseInt(quantity) + parseInt(restocQuantity);
        const newItem = { quantity: newQuantity, ...rest }
        setProduct(newItem)

        const url = `http://https://evening-dusk-98750.herokuapp.com/product/${productId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });
        restocRef.current.value = '';
    }
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
                <button onClick={() => handleDelivered(product._id)} className='btn btn-primary mb-3'>Delivered</button>
                <button className='btn btn-primary mb-3 mx-3'>Sold</button>
            </div>
            <form className='w-50 mx-auto '>
                <input ref={restocRef} type="number" placeholder='add numbers' name="number" id="" />
                <input onClick={() => handleRestok(product._id)} type="button" value="restok the items" />
            </form>
            <Link to='/manage' className='w-50 mx-auto justify-content-center'><button className='btn btn-success text-center mx-5'>manage inventories</button></Link>
        </div>
    );
};

export default ServiceDetail;