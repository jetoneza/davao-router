import React, {Component} from 'react'

class HomeView extends Component {
  handleClick = () => {
    window.alert('Hello World!');
  }

  render() {
    return (
        <div>
          <button className="btn btn-success" onClick={::this.handleClick}>Welcome</button>
        </div>
    )
  }
}

export default HomeView
