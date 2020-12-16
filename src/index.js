import React from 'react';
import ReactDOM from 'react-dom';
import "semantic-ui-css/semantic.min.css"

import './index.css';
import App from './App';

const rootElement = document.getElementById('root');

function render() {
  ReactDOM.render(<App/>,rootElement)
}

if (module.hot) {
  module.hot.accept('./App',function() {
    setTimeout(render)
  })
}

// ReactDOM.render(
//     <App />,
//   document.getElementById('root')
// );

render()

