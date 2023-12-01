//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import Icons from Icons.js;
import PropTypes from 'prop-types';

// include your styles into the webpack bundle
import "../styles/index.css";

function SimlpeCounter(props) {
    return (<div className="bigCounter">
        <div className="clock">
        <i className="far fa-clock"></i>
        </div>
        <div className="four">{props.digitFour % 10}</div>
        <div className="three">{props.digitThree % 10}</div>
        <div className="two">{props.digitTwo % 10}</div>
        <div className="one">{props.digitOne % 10}</div>
    </div>);
}

SimlpeCounter.propTypes = {
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number,
};

let counter = 0;
setInterval(function(){
    const four = Math.floor(counter/10000);
    const three = Math.floor(counter/1000);
    const two = Math.floor(counter/100);
    const one = Math.floor(counter/10);
ReactDOM.render(<SimlpeCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four}/>, document.querySelector("#app"));
},1000)

