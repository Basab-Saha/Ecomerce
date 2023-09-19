import React from 'react';
import ReactDOM from 'react-dom';

//components imports
import '../index.css'
import Item from './Item';

function Header() {
    return (
      <div className='head'>

        <div>
          <h1>V-Shop💖</h1>
        </div>
        
        
        <div>
          <input  className='search-box' type="text" placeholder="Search..." />
          <img className='search-box pt-5'src='https://th.bing.com/th/id/R.34f3f3420bb165594ebd7a83dc769905?rik=IblMZKG7qdPC2g&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_588.png&ehk=AtPYPfnEvR%2fGMFfZ2RTWlKqLtTjS7CNEJmA3y8QMjyU%3d&risl=&pid=ImgRaw&r=0'></img>
        </div>
        
        <div>
          <h3>Cart <sup>{3}</sup></h3>
        </div>




      </div>
    )
  }
  
  export default Header;
  
  
  
  
  