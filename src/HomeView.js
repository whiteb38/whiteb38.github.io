import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Practice from './Practice';
import Blurb from './Blurb';
import 'bootstrap/dist/css/bootstrap.css';

class HomeView extends React.Component {
  render(){
    return(
      <div style={{backgroundColor: '#f4f7f6', maxWidth: "100%", overflowX:"hidden"}} >
        <Header/>
        <About />
        <div className="container" style={{padding: "20px"}}>
          <Experience />
        </div>
        <div style={{paddingTop:"20px"}}>
          <Projects />
        </div>
        <Practice />
      </div>
    );
  }
}
export default HomeView;
