import React, { Component } from 'react';
import logo from './logo.svg';
import $ from 'jquery';
import Navigation from './shared/layouts/Navigation';
import Intro from './sections/Intro'

class App extends Component {
  componentDidMount(){
    let scrollLink = $('.scroll');
    //Scroll Animation Effect
    scrollLink.on('click', function(e){
      e.preventDefault()
      $('body, html').animate( {scrollTop: $(this.hash).offset().top
      }, 500)
    })

    //Activate link on scroll 
    $(window).scroll(function(){
      let scrollBarLocation = $(this).scrollTop()

      scrollLink.each( function(){
        let sectionOffsset = $(this.hash).offset().top
        if(sectionOffsset <= scrollBarLocation){
          $(this).parent().addClass('active');
          $(this).parent().siblings().removeClass('active');
        }
      })
    })
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
