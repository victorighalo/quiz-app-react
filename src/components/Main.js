import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Body from './Body';
class Main extends Component {
  render() {
    return (
        <main className="main_content">
    <Sidebar/>
    <Body/>
    </main>
    );
  }
}

export default Main;
