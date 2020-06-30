import React from 'react';

import '../assets/styles/styles.scss';

import Logo from '../assets/images/react-logo.png';

const App = ({ title }) => (
  <>
    <h1>{title}</h1>
    <img src={Logo} alt="React Logo" />
  </>
);

export default App;
