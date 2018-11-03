import React, {Component} from 'react';
import CategoryCard from './../CategoryCard/CategoryCard';
import CategoryEvents from './../CategoryEvents/CategoryEvents';
import './Category.css';

class Category extends Component {
  render() {
    const {category, big, onClick, open} = this.props;

    return (
      <div className={`category${open ? ' category--open' : ''}`}>
        <CategoryCard big={big} category={category} selected={open} onClick={onClick} />
        {open && (
          <>
            <div style={{position: 'relative'}}>
              <div className="category__triangle" />
            </div>
            <div className="category__events">
              <CategoryEvents category={category} onClick={onClick} />
            </div>
          </>
        )}
      </div>
    );
  }
}

export default Category;
