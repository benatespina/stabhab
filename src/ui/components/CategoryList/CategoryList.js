import React from 'react';
import Category from './../Category/Category';
import './CategoryList.css';

const isBigCategory = index => (index + 1) % 4 === 0 || (index + 1) % 5 === 0;

export default ({categories}) => (
  <section className="category-list">
    {categories.map((category, index) => (
      <div className="category-list__element" key={category.id}>
        <Category category={category} isBig={isBigCategory(index)} />
      </div>
    ))}
  </section>
);
