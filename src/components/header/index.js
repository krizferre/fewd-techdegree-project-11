import React from 'react';

import Form from './Form';
import Navigation from './Navigation';

const Header = props => (
  <header>
    <Form onSearch={props.performSearch} />
    <Navigation performSearch={props.performSearch} />
  </header>
);

export default Header;