import React from 'react';
import { withRouter } from 'react-router';

class CreateBeer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createBeer(this.state);
    this.setState({

    });
  }
}
