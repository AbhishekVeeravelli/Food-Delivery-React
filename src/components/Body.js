import RestaurantCard from './RestaurantCard';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router';
import useOnlineStatus from '../utils/useOnlineStatus';
import { withPromotedLabel } from './RestaurantCard';

const Body = () => {
  //React super powered variable called 'Local  State Variable'
  const [Restaurantlist, setRestaurantlist] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  //Whenever state variables are updated react triggers a recoinciliation cycle(re-renders the component)
  const [searchText, setSearchText] = useState('');

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  console.log('Body Rendered', Restaurantlist);

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
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are Offline!! Please check your internet connection
      </h1>
    );

  //conditional rendering
  return Restaurantlist.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-200 m-4 rounded-lg"
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
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-200 rounded-lg"
            onClick={() => {
              //Add filter such that the list has to be filtered based on the rating of the restaurant
              const filteredlist = Restaurantlist.filter(
                (res) => res.info.avgRating > 4.2
              );
              //console.log('Top-rated restaurants' + Restaurantlist);
              setRestaurantlist(filteredlist);
            }}
          >
            Top-rated Restaurant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={'restaurants/' + restaurant.info.id}
          >
            {/*If a restaurant is promoted add a promoted label to it otherwise dont add */}
            {restaurant.data?.promoted ? (
              <RestaurantCardPromoted resData={restaurant.info} />
            ) : (
              <RestaurantCard resData={restaurant.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
