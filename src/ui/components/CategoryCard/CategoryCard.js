import React from 'react';
import Image from './../Image/Image';
import Underline from './../Underline/Underline';
import './CategoryCard.css';

export default ({big = false, category, onClick}) => (
  <div className={`category-card${big ? ' category-card--big' : ''}`} onClick={onClick}>
    <Image className="category-card__image" src={category.image} alt={category.name} />
    <div className="category-card__plane" />
    <div className="category-card__content">
      <div className="category-card__name">{category.name}</div>
      <Underline />
      <div className="category-card__date">{category.date}</div>
      <div className="category-card__location">{category.location}</div>
    </div>
  </div>
);
