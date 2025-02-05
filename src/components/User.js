import { useEffect, useState } from 'react';
const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(1);

  useEffect(() => {
    //Api Calls are made here in functional components
  }, []);

  return (
    <div className="user-card m-4 p-4 bg-gray-100 rounded-lg">
      <h1>count={count}</h1>
      <h1>count2={count2}</h1>
      <h2>Name: {name}</h2>
      <h2>Location: Texas</h2>
      <h2>contact: veeravelliabhishek083@gmail.com</h2>
    </div>
  );
};
 
export default User;
