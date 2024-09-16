import React from 'react';
import './Popular.css';
import data_product from '../Assets/data';
import Item from '../item/item'; // Correctly imported Item component

const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((product) => {  // Renamed the variable to 'product'
          return (
            <Item
              key={product.id} // Make sure you use a unique key for each item
              id={product.id}
              name={product.name}
              image={product.image}
              new_price={product.new_price}
              old_price={product.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
