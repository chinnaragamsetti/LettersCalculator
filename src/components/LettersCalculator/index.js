// Write your code here.

import {Component} from 'react'
import '.index.css'

class LettersCalculator extends Component {
  state = {counted: 0, searchInput: ''}

  onChange = event => {
    letters = event.target.value
    this.setState({count:letters.length,
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




''''''

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.mainbg {
  background-color: aqua;

  display: flex;
  flex-direction: column;
}
.headerbg {
  background-color: rgb(14, 6, 82);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.h1 {
  font-size: 20px;
  color: white;
}
.inputcontainer {
  display: flex;
  flex-direction: row;
  justify-content: start;
}
.icon {
  height: 50px;
  width: 50px;
}
.bottomcontainer {
  padding: 30px;
}
.bodybg {
  background-color: white;
}




const App = () => (
  <div className="mainbg">
    <div className="headerbg">
      <h1 className="h1">HISTORY</h1>
      <div className="inputcontainer">
        <div className="icon">
          <img src="https://assets.ccbp.in/frontend/react-js/search-img.png" />
        </div>
        <input type="text" placeholder="search history" />
      </div>
    </div>
    <div className="bottomcontainer">
        <div className='bodybg'>
            <ul>
                {initialHistoryList.map(eachList=>(
                    <ListProfile eachList={eachList}
                ))}
            </ul>
        </div>
    </div>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))

export default App


