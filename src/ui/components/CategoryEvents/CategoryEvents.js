import React, {Component} from 'react';
import {animateScroll as scroll} from 'react-scroll';
import {Link} from 'react-router-dom';
import {getEvents} from './../../../api/requests';
import Spinner from './../Spinner/Spinner';
import Underline from './../Underline/Underline';
import './CategoryEvents.css';

class CategoryEvents extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  state = {
    events: [],
    isLoading: true,
  };

  componentDidMount() {
    scroll.scrollTo(this.ref.current.offsetTop);
    getEvents(this.props.category.slug).then(events => this.setState({events, isLoading: false}));
  }

  renderEvents = () => {
    const {events} = this.state;
    const {category} = this.props;

    return (
      <div className="category-events__events">
        {events.slice(0, 3).map(event => (
          <div className="category-events__event" key={event.id}>
            <div className="category-events__date">{event.date}</div>
            <Underline />
            <div className="category-events__name">{event.name}</div>
            <div className="category-events__location">{category.location}</div>
          </div>
        ))}
      </div>
    );
  };

  renderContent = () => {
    const {category} = this.props;

    return this.state.isLoading ? (
      <Spinner small={true} />
    ) : (
      <>
        {this.renderEvents()}
        <Link to={`/categories/${category.slug}/events`} className="category-events__all-events">
          See all events
        </Link>
      </>
    );
  };

  render() {
    return (
      <div className="category-events" ref={this.ref}>
        <div className="category-events__close" onClick={this.props.onClick} />
        <div className="category-events__content">{this.renderContent()}</div>
      </div>
    );
  }
}

export default CategoryEvents;
