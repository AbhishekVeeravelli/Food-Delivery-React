import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
  [resInfo, setresInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=986926&catalog_qa=undefined&submitAction=ENTER'
    );
    const json = await data.json();
    console.log(json);
    setresInfo(json.data);
  };

  return resinfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>Name of the Restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Pizza</li>
        <li>Coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
