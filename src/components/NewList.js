import React from 'react';
import RestaurantCard from './RestaurantCard';
import Body from './Body';

const NewList = (props) => {
  const filteredRestaurant = props.data.filter((restro) => {
    return restro.name.toLowerCase().includes(props.input.toLowerCase());
  });

  return (
    <ul>
      {filteredRestaurant.map((reslist) => (
        <RestaurantCard resData={reslist} />
      ))}
    </ul>
  );
};

export default NewList;
