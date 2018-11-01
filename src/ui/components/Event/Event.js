import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Event extends Component {
  render() {
    return (
      <>
        <div>This is the event page of {this.props.match.params.eventSlug}</div>
        <Link to="/">Back to the home</Link>
      </>
    );
  }
}

export default Event;
