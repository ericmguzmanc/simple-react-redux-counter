import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/counter.actions';

class Counter extends Component {
  
  componentDidMount() {
    this.forceUpdate();
  }
  
  render() {

    const { increment, decrement, count } = this.props;

    return(
      <div className="counter-app">
      <span>
        <h5>Counter value: {count} </h5>
      </span>
        <div>
          <button onClick={(e) => increment()} className="btn btn-primary">Increment</button>
          <button onClick={(e) => decrement()} className="btn btn-secondary">Decrement</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);