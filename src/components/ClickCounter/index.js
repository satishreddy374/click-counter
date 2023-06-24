// Write your code here

import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}
  onIncrease = () => {
    this.setState(previousState => ({count: previousState.count + 1}))
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked{' '}
          <span className="count-value">{count} </span>
          times
        </h1>
        <p className="text">Click the button to increase the count!</p>
        <button
          className="click-button"
          type="button"
          onClick={this.onIncrease}
        >
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
