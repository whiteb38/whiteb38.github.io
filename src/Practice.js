import React from 'react';
import Chart from './Chart';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles/global.css';

class Practice extends React.Component {
  constructor() {
    super();
    this.state= {
    };
  }
  render(){
    var cardStyle={ borderRadius:"15px", position: "relative", display:"flex", flexDirection:"column", backgroundColor: "white", border:"1px solid", padding: "0px"};
    var cardBlockStyle={padding:"10px"};
    return(
      <div>
        <div style={{backgroundColor: "#27ae60", borderBottomRightRadius: "30px", height:"500px", backgroundRepeat: "no-repeat"}}>
          <div className="container hidden-xs" style={{overflow:"hidden"}}>
            <div className="row" style={{marginTop:"150px"}}>
              <div className="col-sm-12" style={{float: "right"}}>
                <div className="card" id="headerDiv" style={{textAlign: "center", verticalAlign: "middle"}}>
                  <div className="card-block hidden-xs" style={cardBlockStyle}>
                    <p className="card-text" style={{fontFamily:"ubuntu",fontSize: "18px", color: "white", fontWeight:"700"}}></p><br/>
                                          <p style={{fontFamily:"ubuntu",fontWeight: "bold", fontSize: "calc(50px + -.60vw)", color: "white"}}>Frameworks, Libraries, & Add-ons</p>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      <div style={{padding:"20px"}}>
        <div className="container marketing" style={{padding:"20px", borderRadius:"5px"}}>
          <Chart />
        </div>
      </div>
    </div>
  )}
}
export default Practice;
