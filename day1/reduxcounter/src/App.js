import React from 'react' 
import './App.css';
import AddSubtractCounter from './components/AddSubtractCounter';
// import Counter from './components/Counter';
import DisplayCounter from './components/DisplayCounter';
import IncrementDecrementCounter from './components/IncrementDecrementCounter';
import { connect } from 'react-redux'


function App(props) {
  return (
    <div>

      <div>
        <h1>App</h1>
        <h2>{props.ctr}</h2>
      </div>
      <div>

        {/* <Counter /> */}
        <DisplayCounter />
        <IncrementDecrementCounter />
        <AddSubtractCounter />
      </div>

    </div>

  );
}

const mapStateToProps = (state) => {
  return {
      ctr: state.counter
  }
}

export default connect(mapStateToProps)(App)
