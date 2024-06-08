

import React, { useState, useEffect } from 'react';

const User = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch('http://backend.restapi.co.za/items/products')
      .then(response => response.json())
      .then(data => setUser(data));
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Password: {user.password}</p>
      <p>Address: {user.address}</p>
      <p>TelephoneNumber: {user.telephonenumber}</p>
      
    </div>
  );
};

export default User;
