// Images.js
import React from 'react';

const Images = () => {
  return (
    <div className="images-container">
      <div className="image-container">
        <img src="./images/img1.jpg" alt="Disp 1" className="image" />
        <h4 className="image-caption">Image 1</h4>
        <p className="image-description">London Royal Palace.</p>
      </div>

      <div className="image-container">
        <img src="./images/img2.jpg" alt="Disp 2" className="image" />
        <h4 className="image-caption">Image 2</h4>
        <p className="image-description"> Paris Light.</p>
      </div>

      <div className="image-container">
        <img src="./images/img3.jpg" alt="Disp 3" className="image" />
        <h4 className="image-caption">Image 3</h4>
        <p className="image-description">Newyork Bridge.</p>
      </div>
    </div>
  );
};

export default Images;
