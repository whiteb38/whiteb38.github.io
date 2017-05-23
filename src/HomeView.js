import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import Header from './Header';
import About from './About';
import ProjectOne from './ProjectOne';
import ProjectTwo from './ProjectTwo';
import Experience from './Experience';
import Chart from './Chart';
import Blurb from './Blurb';
import 'bootstrap/dist/css/bootstrap.css';

class HomeView extends React.Component {
  render(){
    return(
      <div >
        <Header/>
              <About />

          <div className="container" style={{padding: "20px"}}>
            <Experience />
          </div>
          <div style={{paddingTop:"20px", backgroundColor: '#EFEFEF'}}>
            <div className="container" style={{padding:"20px",backgroundColor: '#EFEFEF', borderRadius:"5px"}}>
              <ProjectOne />
              <br />
              <hr/>
              <br />
              <ProjectTwo />
            </div>
          </div>
          <div style={{backgroundImage: "url(../extra/pexels-photo.jpg)", filter: "grayscale(100%)",padding:"20px", borderRadius:"15px", height:"600px", width:"100%", backgroundPosition:"center", backgroundRepeat:"no-repeat"}}>
            <div className="container" >
              <br /><br/>
              <Blurb />
            </div>
          </div>
          <div style={{padding:"20px"}}>
            <div className="container marketing" style={{padding:"20px", backgroundColor: 'white', borderRadius:"5px"}}>
              <Chart />
            </div>
        </div>
    </div>
    );
  }
}
export default HomeView;
