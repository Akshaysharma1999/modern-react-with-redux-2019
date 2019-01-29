import './Error.css'
import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'
import useLocation from './useLocation'

const App = () => {
  const [lat, errorMessage] = useLocation()

  let content
  if (errorMessage) {
    content = (
      <div className="error ui negative message">
        <i className="icon-left massive meh icon" />
        <div className="header">
          <h1>Ser Ilynn, bring me his head!!</h1>
          <p>{errorMessage}</p>
        </div>
        <i className="icon-right massive cut icon" />
      </div>
    )
  } else if (lat) {
    content = <SeasonDisplay lat={lat} />
  } else {
    content = <Spinner message="Please accept location request" />
  }

  return <div className="border red">{content}</div>
}

ReactDOM.render(<App />, document.querySelector('#root'))
