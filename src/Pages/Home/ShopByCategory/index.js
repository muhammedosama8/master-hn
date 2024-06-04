import React from 'react';
import categoryImg from '../../../assets/category.png'
import './style.css'
import { Link } from 'react-router-dom';

const ShopByCategory = () => {
  return (<div className='container custom-div shop-by-category'>
    <section className="mb-5 d-flex justify-content-between" style={{alignItems: 'center'}}>
        <div className='position-relative'>
            <h1>Shop By Category</h1>
        </div>
        <div className="categories">
            <img src={categoryImg} alt='category' />
            <img src={categoryImg} alt='category' />
        </div>
    </section>
    <div className='text-center mt-3'>
        <Link to='/'>View All</Link>
      </div>
    </div>
  );
};

export default ShopByCategory;
