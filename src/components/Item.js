import React from 'react';
import ReactDOM from 'react-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Item({img,name,price}) {
  return (
    <Card style={{ width: '18rem' ,margin:'20px' }} className='bg-dark text-white '>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {price}
        </Card.Text>
        

        <Button  className="bg-light text-dark">Add to Cart</Button>
        
       
       
      </Card.Body>
    </Card>
  );
}

export default Item;