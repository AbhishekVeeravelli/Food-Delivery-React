import RestaurantCard from './RestaurantCard';
import reslist from '../utils/mockdata';
import { useEffect, useState } from 'react';
import NewList from './NewList';
const Body = () => {
  //React super powered variable called 'Local  State Variable'
  const [Restaurantlist, setRestaurantlist] = useState(reslist);
  //const [SearchInput, setSearchInput] = useState('');
  useEffect(() => {
    fetchData();
  }, []);

  //   let inputHandler = (e) => {
  //     var lowerCase = e.target.value.toLowerCase();
  //     setSearchInput(lowerCase);
  //   };

  const fetchData = async () => {
    const data = await fetch(
      'https://img.cdn4dd.com/s/managed/consumer/discovery/ten_year_cuisines_7_26/Indian-Final.json'
    );
    const json = await data.json();
    console.log(json);
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //Add filter such that the list has to be filtered based on the rating of the restaurant
            const filteredlist = Restaurantlist.filter((res) => res.rating > 4);
            console.log('Top-rated restaurants' + Restaurantlist);
            setRestaurantlist(filteredlist);
          }}
        >
          Top-rated Restaurant
        </button>
      </div>
      <div className="rest-container">
        {Restaurantlist.map((restaurantId) => (
          <RestaurantCard key={restaurantId} resData={restaurantId} />
        ))}
      </div>

      {/* <div className="searchbar">
        <input
          type="text"
          id="outlined-basic"
          onChange={inputHandler}
          label="Search"
        />
      </div>
      <div>
        <NewList input={SearchInput} data={Restaurantlist} />
      </div> */}
    </div>
  );
};
export default Body;
