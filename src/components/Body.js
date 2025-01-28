import RestaurantCard from './RestaurantCard';
import { useEffect, useState } from 'react';
import NewList from './NewList';
import Shimmer from './Shimmer';
import { Link } from 'react-router';
const Body = () => {
  //React super powered variable called 'Local  State Variable'
  const [Restaurantlist, setRestaurantlist] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  //Whenever state variables are updated react triggers a recoinciliation cycle(re-renders the component)
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      'https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();
    console.log(json);
    setRestaurantlist(
      //Optional chaining
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //conditional rendering
  return Restaurantlist.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //filter the restaurants and update the UI
              console.log(searchText);
              const filtereRestaurant = Restaurantlist.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurant(filtereRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            //Add filter such that the list has to be filtered based on the rating of the restaurant
            const filteredlist = Restaurantlist.filter(
              (res) => res.info.avgRating > 4.5
            );
            //console.log('Top-rated restaurants' + Restaurantlist);
            setRestaurantlist(filteredlist);
          }}
        >
          Top-rated Restaurant
        </button>
      </div>
      <div className="rest-container">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={'restaurants/' + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
