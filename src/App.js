import React from 'react';
import Header from './Header';
import Images from './Images';

const App = () => {
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <Images />
      </div>
    </div>
  );
};

export default App;
