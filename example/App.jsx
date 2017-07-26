import ReactDOM from 'react-dom'
import React from 'react'
import {Component} from 'react'
import buildReducer from '../lib/buildReducer'
import WithState from '../lib/WithState'
import dispatcher from '../lib/dispatcher'

class MyCounter extends React.Component {
  constructor() {
    super()
    this.plusOne = this.plusOne.bind(this)
  }
  plusOne() {
    dispatcher.dispatch({type: 'PLUS_ONE', content: this.props.counter})
  }
  render() {
    return (
      <div>
        <div>Click count: {this.props.counter}</div>
        <button onClick={this.plusOne}>Add 1</button>
      </div>)
  }
}

const reducers = buildReducer({
  'PLUS_ONE': (state, action) => ({counter: state.counter + 1})
})

const INITIAL_STATE = { counter: 0 }

const App = WithState(MyCounter, [reducers], INITIAL_STATE)



ReactDOM.render(<App />, document.getElementById('app'))