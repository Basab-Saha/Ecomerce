import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';

const ProductList = ({ product }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState(''); // State to track the selected filter type

  // Function to handle changes in the search input
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter products based on the search query and selected filter type
  const filteredProducts = product.filter((item) => {
    const nameMatches = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const typeMatches = !filterType || item.type === filterType;
    return nameMatches && typeMatches;
  });

  // Function to handle filter button click
  const handleFilterClick = (type) => {
    setFilterType(type);
  };

  return (
    <div className='flex'>
      <h1 style={{ textAlign: 'center' }}>This is Product List</h1>

      <div className='search-container' style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}>
      <div className=''>
          <button onClick={() => handleFilterClick('Electronics')} style={{ marginRight: '10px' }}>Electronics</button>
          <button onClick={() => handleFilterClick('Accesories')} style={{ marginRight: '10px' }}>Accesories</button>
          <button onClick={() => handleFilterClick('Wearings')}>Wearings</button>
        </div>

        <div style={{ textAlign: 'center' , marginLeft:'360px' }}>
          <input
            className='search-box'
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <img
            className='search-icon'
            height="24"
            width="24"
            src='https://th.bing.com/th/id/R.34f3f3420bb165594ebd7a83dc769905?rik=IblMZKG7qdPC2g&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_588.png&ehk=AtPYPfnEvR%2fGMFfZ2RTWlKqLtTjS7CNEJmA3y8QMjyU%3d&risl=&pid=ImgRaw&r=0'
            alt="Search"
          />
        </div>
      </div>

      <div className='row'>
        {filteredProducts.map((item, index) => {
          return (
            <div className='col-md-4' key={index}>
              <Link to={`/item/${index}`}>
                <Item
                  img={item.imgii}
                  name={item.name}
                  price={item.Price}
                  style={{ maxWidth: '100%', maxHeight: '200px' }}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
