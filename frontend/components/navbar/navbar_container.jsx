import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { logout } from '../../actions/session_actions';
import Navbar from './navbar';
import { requestAllBeers } from '../../actions/beers_actions';
import { requestAllBreweries } from '../../actions/breweries_actions';



const mapStateToProps = ({ session }) => ({
    currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  // fetchBeers: () => dispatch(requestAllBeers()),
  // fetchBreweries: () => dispatch(requestAllBreweries()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar));
