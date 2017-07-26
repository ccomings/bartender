import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import CheckinIndexItem from './checkin_index_item';

class CheckinsIndex extends React.Component {
  // constructor(props){
  //   super(props);
  // }

  componentDidMount(){
    this.props.requestAllCheckins();
  }
  // componentWillMount() {
  //   this.props.requestAllCheckins();
  // }

  render() {
    console.log("the props", this.props);
    const { checkins } = this.props;
    console.log(checkins);
    return (
      <section className='index-section'>
        <h1>All of the Checkins</h1>
        <ul className="index-list">{checkins.map(checkin =>
          <CheckinIndexItem
            key={checkin.id}
            id={checkin.id}
            checkin={checkin}/>)}
        </ul>
      </section>
    );
  }
}

export default withRouter(CheckinsIndex);
