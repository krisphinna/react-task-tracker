import React, { Component } from 'react'

class Counter extends Component {
    render() {
        return <h1>Hello World</h1>;
    }
}

export default Counter;


import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './components/counter';

ReactDom.render(<Counter/>, document.getElementById("root"));
registerServiceWorker();