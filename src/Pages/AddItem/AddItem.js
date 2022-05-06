import React from 'react';
import { useForm } from "react-hook-form";

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    }
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center text-primary mt-4'>Add new Item</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Photo Url' type="text" {...register("img")} />
                <input className='mb-2' placeholder='price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='quantitty' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='supplier-name' {...register("supplierName")} />
                <textarea className='mb-2' placeholder='description' {...register("description")} />
                <input type="Submit" value='Add new Item' />
            </form>
        </div>
    );
};

export default AddItem;