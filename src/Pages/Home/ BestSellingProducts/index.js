import React, { useState } from 'react';
import categoryImg from '../../../assets/category.png'
import './style.css'
import { Link } from 'react-router-dom';

const  BestSellingProducts = () => {
  const [products, setProducts] = useState([
    {id: 1, img: categoryImg, title: 'product'},
    {id: 2, img: categoryImg, title: 'product'},
    {id: 3, img: categoryImg, title: 'product'},
    {id: 4, img: categoryImg, title: 'product'},
    {id: 5, img: categoryImg, title: 'product'},
    {id: 6, img: categoryImg, title: 'product'},
    {id: 7, img: categoryImg, title: 'product'},
    {id: 8, img: categoryImg, title: 'product'},
  ])
  return (<div className='container custom-div feature-products'>
    <h1> Best Selling Products</h1>
    <section className="mb-5 row products">
      {products?.map((product, index)=>{
        return <div className='col-md-3 mb-4'>
          <div className='card product'>
            <img src={product.img} alt={product.title} />
            <h4 className='mt-3 mb-3'>{product.title}</h4>
          </div>
        </div>
      })}
    </section>
    <div className='text-center mt-3'>
        <Link to='/' className='viewAll'>View All</Link>
      </div>
    </div>
  );
};

export default  BestSellingProducts;
