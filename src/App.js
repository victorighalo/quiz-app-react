import React, { Component } from 'react';
import logo from './logo.svg';
import jQuery from 'jquery';
import Navigation from './shared/layouts/Navigation';
import Intro from './sections/Intro'

class App extends Component {
  componentDidMount(){
    console.log(jQuery);
  }
  render() {
    return (
      <div>
<Navigation/>
<Intro/>
</div>
    );
  }
}

export default App;
