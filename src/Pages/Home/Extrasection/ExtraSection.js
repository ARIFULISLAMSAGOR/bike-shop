import React from 'react';
import { Link } from 'react-router-dom';
import biker from '../../../images/biker.jpg'
import './ExtraSection.css';

const ExtraSection = () => {
    return (
        <div>
            <div className='row mt-5 mb-5 mx-3'>
                <div className='col-md-6 col-sm-12'>
                    <h1> BIKER'S WAREHOUSE</h1>
                    <p>Biker’s Warehouse is one of Johannesburg’s top bike and accessory brand suppliers. Our brands are carefully selected to offer the widest product range to cater for the needs of any road, dual-sport or off-road enthusiast. Added to our emphasis on rigorous parts support, our service department is fully equipped to ensure that all servicing, repair and modification requirements are taken care of quickly and professionally. Biker’s Warehouse is proud dealers for Honda motorcycles, Husqvarna motorcycles and Suzuki Motorcycles. We also offer various quality imported motorcycles.</p>
                </div>
                <div className='col-md-6 col-sm-12'>
                    <img width='600px' height='400px' src={biker} alt="" />
                </div>
            </div>
            <div className='section'>
                <div className='container'>
                    <h1 className='display-2 text-white'>Bike Warehouse.See All Item</h1>
                    <Link to='/manage' className='btn btn-outline-light rounded-pill py-3 py-4'> All Item</Link>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;