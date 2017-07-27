import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import CheckinIndexItem from './checkin_index_item';

class CheckinsIndex extends React.Component {

  componentDidMount(){
    this.props.requestAllCheckins();
  }

  render() {
    console.log("the props", this.props);
    const { checkins } = this.props;
    console.log(checkins);
    return (
      <section className='index-section'>
        <div className='page-header-container'>
          <h1 className="page-header">All of the Checkins</h1>
        </div>
        <ul className="index-list">{checkins.map(checkin =>
          <CheckinIndexItem
            key={checkin.id}
            id={checkin.id}
            time={checkin.created_at}
            checkin={checkin}/>)}
        </ul>
      </section>
    );
  }
}

export default withRouter(CheckinsIndex);
