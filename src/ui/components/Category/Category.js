import React from 'react';
import Image from './../Image/Image';
import './Category.css';

export default ({category, isBig = false}) => (
  <div className={`category${isBig ? ' category--big' : ''}`}>
    <Image className="category__image" src={category.image} alt={category.name} />
    <div className="category__plane" />
    <div className="category__content">
      <div className="category__name">{category.name}</div>
      <hr className="category__separator" />
      <div className="category__date">{category.date}</div>
      <div className="category__location">{category.location}</div>
    </div>
  </div>
);
