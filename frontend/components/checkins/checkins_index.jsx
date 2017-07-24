import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import CheckinIndexItem from './checkin_index_item';

class CheckinsIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestAllCheckins();
  }

  render() {
    const { checkins } = this.props;
    return (
      <section>
        <h1>All of the Checkins</h1>

        <ul>{checkins.length > 0 ? checkins.map(checkin =>
          <CheckinIndexItem key={checkin.id} id={checkin.id} checkin={checkin}/>) : ""}
        </ul>
      </section>
    );
  }
}

export default withRouter(CheckinsIndex);
