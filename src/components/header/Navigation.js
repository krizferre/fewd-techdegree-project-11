import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = props => (
  // for every NavLink, add onClick even to perform the search for every category
  <nav className="main-nav">
    <ul>
      <li>
        <NavLink 
          to='/cats' 
          activeStyle={{ background: 'tomato' }} 
          onClick={ () => props.performSearch('cats', true) }>
          Cats
        </NavLink>
      </li>
      <li>
        <NavLink 
          to='/dogs' 
          activeStyle={{ background: 'tomato' }} 
          onClick={ () => props.performSearch('dogs', true) }>
          Dogs
        </NavLink>
      </li>
      <li>
        <NavLink 
          to='/birds' 
          activeStyle={{ background: 'tomato' }} 
          onClick={ () => props.performSearch('birds', true) }>
          Birds
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;