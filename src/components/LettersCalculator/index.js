// Write your code here.

import {Component} from 'react'
import '.index.css'

class LettersCalculator extends Component {
  state = {counted: 0, searchInput: ''}

  onChange = event => {
    letters = event.target.value
    this.setState(prevState => ({
      count: prevState.count + letters.length,
      searchInput: letters,
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="mainbg">
        <div className="textcontainer">
          <h1 className="h1">Calculate the letters you enter</h1>
          <div className="searchcontianer">
            <p className="p">Enter the phrase</p>
            <input
              type="search"
              value={searchInput}
              onChangeInput={this.onChange}
            />
          </div>
          <div className="countcontainer">
            <h1 className="h2">No of Letter:{counted}</h1>
          </div>
        </div>
        <div className="imagecontainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letter-claculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
