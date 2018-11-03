import React, {Component} from 'react';
import Category from './../Category/Category';
import './CategoryList.css';

class CategoryList extends Component {
  state = {
    selectedCategory: null,
  };

  isBigCategory = index => (index + 1) % 4 === 0 || (index + 1) % 5 === 0;

  isSelectedCategory = category => this.state.selectedCategory === category.id;

  selectCategory = category => {
    this.setState(state => ({
      selectedCategory: state.selectedCategory === category.id ? null : category.id,
    }));
  };

  render() {
    return (
      <section className="category-list">
        {this.props.categories.map((category, index) => (
          <div className="category-list__element" key={category.id}>
            <Category
              category={category}
              big={this.isBigCategory(index)}
              onClick={() => this.selectCategory(category)}
              open={this.isSelectedCategory(category)}
            />
          </div>
        ))}
      </section>
    );
  }
}

export default CategoryList;
