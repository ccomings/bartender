import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import CheckinIndexItem from './checkin_index_item';

class CheckinsIndex extends React.Component {

  componentDidMount(){
    this.props.requestAllCheckins();
  }

  render() {
    const { checkins } = this.props;
    return (
      <section className='index-section'>
        <div className='page-header-container'>
          <h1 className="page-header">Checkins</h1>
        </div>
        <ul className="index-list" id='checkin-list'>{checkins.map(checkin =>
          <li key={checkin.id}>
            <CheckinIndexItem
              id={checkin.id}
              time={checkin.created_at}
              checkin={checkin}/>
          </li>)}
        </ul>
      </section>
    );
  }
}

export default withRouter(CheckinsIndex);
