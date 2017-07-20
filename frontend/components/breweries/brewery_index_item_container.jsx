import { connect } from 'react-redux';
import BreweryIndexItem from './brewery_index_item';
import { requestAllBreweries } from '../../actions/breweries_actions';

const mapStateToProps = ({breweries}) => ({
  breweries
});

const mapDispatchToProps = dispatch => ({
  requestAllBreweries: () => dispatch(requestAllBreweries())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BreweryIndexItem);
