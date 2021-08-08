import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

const NotFound = (props) => {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <p> oops...404 NOT FOUND </p>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
