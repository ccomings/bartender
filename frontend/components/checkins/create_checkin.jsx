import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';
import SearchIndexContainer from '../search/search_index_container';
import {merge} from 'lodash';

class CreateCheckin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkin: {
        beer_id: '',
        location: '',
        review: '',
        rating: undefined,
        user_id: this.props.currentUserId,
      },
      modalIsOpen: true,
      searchVal: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
    this.props.history.push('/');
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.selectedBeerId !== nextProps.selectedBeerId) {
      this.setState(merge(this.state, {
        checkin:{
          beer_id: nextProps.selectedBeerId,
        },
        searchVal: nextProps.beers[nextProps.selectedBeerId].name
      }));
    }
  }

  update(field) {
    return e => {
      if (field === 'beer') {
        this.setState({searchVal: e.target.value}, () => {
          this.props.requestSearchBeers(this.state.searchVal);
        });
      } else {
        this.setState(
          merge(this.state, {checkin: {
          [field]: e.target.value}})
        );
      }
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createCheckin(this.state.checkin);
    this.props.history.push('/');
  }

  render() {
    return (
      <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        contentLabel="Create Checkin"
        className="create-checkin-modal"
        >
        <div className='checkin-form-container'>
          <div className='checkin-form-box'>
            <h2>Check-in!</h2>
            <form onSubmit={this.handleSubmit} className='checkin-form'>
              <div className='checkin-form-left'>
                <label className='login-input-container ma'>
                  <input className="input-field"
                    type="text" placeholder="start typing a beer name"
                    value={this.state.searchVal}
                    onChange={this.update('beer')}/>
                </label>
                <div className="modal-scolling ma">
                  <SearchIndexContainer />
                </div>
              </div>
              <div className='checkin-form-right'>
                <label className='login-input-container maYX2'>
                  <input className="input-field"
                    type="text" placeholder="where are you drinking"
                    value={this.state.checkin.location}
                    onChange={this.update('location')}/>
                </label>
                <label className='login-input-container ma2'>
                  <input className="input-field"
                    type="number" placeholder="rating (1..5)"
                    value={this.state.checkin.rating}
                    onChange={this.update('rating')}
                    min='1' max='5'/>
                </label>
                <label className='login-input-container ma2'>
                  <input className="input-field text"
                    type="textbox" placeholder="how was the beer"
                    value={this.state.checkin.review}
                    onChange={this.update('review')}/>
                </label>
                <input type="submit" value="Checkin" className="maC login-input-submit"/>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    );
  }
}

export default withRouter(CreateCheckin);
