import React, { Component } from 'react';
import Section from '../components/Section'
import Scroll from 'react-scroll'
let Element = Scroll.Element;

class Intro extends Component {
    render() {
        return (
            <div>
                <Element name="red" id="red" className="element">
                <Section backgroundColor="red" height="100vh"/>
                </Element>
                <Element name="blue" id="blue" className="element">
                <Section backgroundColor="blue" height="100vh"/>
                </Element>
            </div>
        );
    }
}

export default Intro;