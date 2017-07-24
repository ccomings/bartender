import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';

class CreateCheckin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: '',
      brewery: '',
      review: '',
      rating: '',
      modalIsOpen: false,
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

  update(field) {
    return e => this.setState({
      [field]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      user_id: this.props.session.currentUser.username,
    }, () => {
      this.props.createCheckin(this.state);
    });
  }

  render() {
    return (
      <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        contentLabel="Create Checkin">
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>Beers:
              <input type="text" placeholder="beer" value={this.state.beer} onChange={this.update('beer')}/>
            </label>
            <label>Brewery:
              <input type="text" placeholder="brewery" value={this.state.brewery} onChange={this.update('brewery')}/>
            </label>
            <label>Rating:
              <input type="text" placeholder="rating" value={this.state.rating} onChange={this.update('rating')}/>
            </label>
            <label>Review:
              <input type="text" placeholder="review" value={this.state.review} onChange={this.update('review')}/>
            </label>
            <input type="submit" value="Checkin"/>
          </form>
        </div>
      </Modal>
    );
  }
}

export default withRouter(CreateCheckin);
