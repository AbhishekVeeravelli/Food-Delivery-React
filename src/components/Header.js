import { useState } from 'react';
import { LOGO_URL } from '../utils/contsants';
import { Link } from 'react-router';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState('Login');
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-orange-100 shadow-lg sm:bg-yellow-200 lg:bg-green-200">
      <div className="logo-container">
        <img className="w-48" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? '✅' : '🔴'}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocerry">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === 'Login'
                ? setbtnNameReact('Logout')
                : setbtnNameReact('Login');
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
