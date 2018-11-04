import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import CategoryCard from './../CategoryCard/CategoryCard';
import CategoryEvents from './../CategoryEvents/CategoryEvents';
import './Category.css';

class Category extends Component {
  render() {
    const {category, big, onClick, open} = this.props;

    return (
      <div className={`category${open ? ' category--open' : ''}`}>
        <CategoryCard big={big} category={category} selected={open} onClick={onClick} />
        <CSSTransition classNames="category__triangle-transition" in={open} timeout={400} unmountOnExit>
          <div className="category__triangle-area">
            <div className="category__triangle" />
          </div>
        </CSSTransition>
        <CSSTransition classNames="category__events-transition" in={open} timeout={400} unmountOnExit>
          <div className="category__events">
            <CategoryEvents category={category} onClick={onClick} />
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default Category;
