import React, { Component } from 'react';
import Section from '../components/Section'
import Scroll from 'react-scroll'
let Element = Scroll.Element;

class Intro extends Component {
    render() {
        return (
            <div>
                {/* <Element name="red" id="red" className="element">
               
                </Element> */}
                 <Section backgroundColor="red" id="red" height="100vh"/>
                 <Section backgroundColor="blue" id="blue" height="100vh"/>
                {/* <Element name="blue" id="blue" className="element">
               
                </Element> */}
            </div>
        );
    }
}

export default Intro;