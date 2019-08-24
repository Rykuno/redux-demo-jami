import React from 'react';
import App from './App';
import { ADD, SUBTRACT } from '../actions/counterActions';
import { connect } from 'react-redux';

const AppContainer = props => <App {...props} />;

const mapStateToProps = state => ({
  counter: state.counterReducer.counter
});

const mapDispatchToProps = dispatch => ({
  add: amount => dispatch(ADD(amount)),
  subtract: amount => dispatch(SUBTRACT(amount))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
