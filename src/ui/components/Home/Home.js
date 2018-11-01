import React, {Component} from 'react';
import {getCategories} from './../../../api/requests';
import Spinner from './../Spinner/Spinner';
import CategoryList from './../CategoryList/CategoryList';
import Page from './../Page/Page';

class Home extends Component {
  state = {
    categories: null,
    isLoading: true,
  };

  componentDidMount() {
    getCategories().then(categories => this.setState({categories, isLoading: false}));
  }

  render() {
    if (this.state.isLoading) {
      return <Spinner />;
    }

    return (
      <Page>
        <CategoryList categories={this.state.categories} />
      </Page>
    );
  }
}

export default Home;
