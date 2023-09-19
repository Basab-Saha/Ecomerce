import React from 'react';
import { useParams } from 'react-router-dom';

function ItemDetail({ product }) {
  // Use the useParams hook to access the itemId from the URL
  const { itemId } = useParams();

  // Convert itemId to a number since it's coming from the URL as a string
  const itemIndex = parseInt(itemId, 10);

  // Use itemIndex to access the specific item from the product array
  const item = product[itemIndex];

  if (!item) {
    // Handle the case where the item with the given itemId doesn't exist
    return (
      <div>
        <h2>Item not found</h2>
      </div>
    );
  }

  return (
    <div>
      <h2>This is Item Detail Page</h2>
      <img
        src={item.imgii}
        alt={item.name}
        style={{ maxWidth: '100%', maxHeight: '400px' }} // Adjust the max width and max height as needed
      />
      <h3>{item.name}</h3>
      <p>Price: {item.Price}</p>
    </div>
  );
}

export default ItemDetail;
