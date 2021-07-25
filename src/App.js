import React from 'react';
import ReactDOM from 'react-dom';
import style from './mystyle.module.css';

class Car extends React.Component {
    render() {
        return<h2 className = {style.bigblue}>I am a nice Car</h2>
    }
}

export default Car;