/* eslint-disable no-unused-vars */
import React from 'react';



const Nav = () => {


 const routes = [
    {
        "name": "Route 1",
        "id": 1,
        "age": 25,
        "key":2

    },
    {
        "name": "Route 2",
        "id": 2,
        "age": 30,
        "key":2
    },
    {
        "name": "Route 3",
        "id": 3,
        "age": 28,
        "key":2
    },
    {
        "name": "Route 30",
        "id": 30,
        "age": 35,
        "key":2
    }
  ]
  return (
    
      <nav>
        <ul className='mb:flex'>
        {
          routes.map (route =>
          <li> {route.id} </li>)
        }
        </ul>
      </nav>
   
  );
};

export default Nav;