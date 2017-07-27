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
    console.log(this.state.checkin);
    console.log(this.state);
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
              <form onSubmit={this.handleSubmit}>
                <ul>
                  <li className='login-form-list-items'>
                    <h2>Checkin</h2>
                  </li>
                  <li className='login-form-list-items'>
                    <label className='login-input-container'>
                      <input className="input-field"
                             type="text" placeholder="beer"
                             value={this.state.searchVal}
                             onChange={this.update('beer')}/>
                    </label>
                  </li>
                  <li className='login-form-list-items'>
                    <label className='login-input-container'>
                      <input className="input-field"
                             type="text" placeholder="location"
                             value={this.state.checkin.location}
                             onChange={this.update('location')}/>
                    </label>
                  </li>
                  <li className='login-form-list-items'>
                    <label className='login-input-container'>
                      <input className="input-field"
                             type="dropdown" placeholder="rating"
                             value={this.state.checkin.rating}
                             onChange={this.update('rating')}
                             />
                    </label>
                  </li>
                  <li className='login-form-list-items'>
                    <label className='login-input-container'>
                      <input className="input-field text"
                             type="textbox" placeholder="review"
                             value={this.state.checkin.review}
                             onChange={this.update('review')}/>
                    </label>
                  </li>
                  <li className='login-form-list-items'>
                    <input type="submit" value="Checkin" className="login-input-submit"/>
                  </li>
                </ul>
              </form>
              <div className="modal-scolling">
                <SearchIndexContainer />
              </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default withRouter(CreateCheckin);
