import React, { Component } from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import CounterApp from './reducers/counter.reducer';
import Counter from './containers/counter';

const store = createStore(CounterApp);

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }

}


export default App;
