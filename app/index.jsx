'use strict'
import React from 'react'
import {render} from 'react-dom'
import ReactDOM from 'react-dom'

var App = React.createClass({
  render: function(){
    return (
      <p>Hello world!!!!!!!</p>
    )
  }
})
ReactDOM.render(<App />, document.getElementById('app'));
