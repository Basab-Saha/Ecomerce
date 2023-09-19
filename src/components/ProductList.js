import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';

//components imports
import '../index.css'
import Item from './Item';


const ProductList = ({ product }) => {
    
    return (
      <div className='flex'>
        <h1 style={{ textAlign: 'center' }}>This is Product List</h1>
        <div className='row'>
          {product.map((item, index) => {
            return (
              <div className='col-md-4' key={index}>
                {/* Wrap the Item component with Link */}
                <Link to={`/item/${index}`}>
                  <Item img={item.imgii} name={item.name} price={item.Price} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  
  export default ProductList;