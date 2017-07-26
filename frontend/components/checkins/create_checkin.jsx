import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';
import SearchIndexContainer from '../search/search_index_container';

class CreateCheckin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkin: {
        beer_id: '',
        brewery_id: '',
        review: '',
        rating: '',
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
      this.setState({
        checkin:{
          beer_id: nextProps.selectedBeerId,
        },
        searchVal: nextProps.beers[nextProps.selectedBeerId].name
      });
    }
  }

  update(field) {
    return e => {
      if (field === 'beer') {
        this.setState({searchVal: e.target.value}, () => {
          this.props.requestSearchBeers(this.state.searchVal);
        });
      } else {
        this.setState({checkin: {
          [field]: e.target.value}});
      }
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createCheckin(this.state.checkin);
  }

  render() {
    return (
      <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        contentLabel="Create Checkin"
        >
        <div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <form onSubmit={this.handleSubmit}>
            <label>Beers:
              <input type="text" placeholder="beer"
                     value={this.state.searchVal}
                     onChange={this.update('beer')}/>
            </label>
            <label>Brewery:
              <input type="text" placeholder="brewery"
                     value={this.state.checkin.brewery_id}
                     onChange={this.update('brewery')}/>
            </label>
            <label>Rating:
              <input type="text" placeholder="rating"
                     value={this.state.checkin.rating}
                     onChange={this.update('rating')}/>
            </label>
            <label>Review:
              <input type="text" placeholder="review"
                     value={this.state.checkin.review}
                     onChange={this.update('review')}/>
            </label>
            <input type="submit" value="Checkin"/>
          </form>
        </div>
        <SearchIndexContainer />
      </Modal>
    );
  }
}

export default withRouter(CreateCheckin);
