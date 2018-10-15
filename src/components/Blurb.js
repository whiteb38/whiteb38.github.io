import React from 'react';
import './assets/styles/global.css';

class Blurb extends React.Component {
  constructor() {
    super();
    this.state= {
    };
  }
  render(){
    var cardStyle={ borderRadius:"15px", position: "relative", display:"flex", flexDirection:"column", backgroundColor: "white", border:"1px solid", padding: "0px"};
    var cardBlockStyle={padding:"10px"};
    return(
      <div style={{textAlign: "center", verticalAlign: "middle"}}>
        <h3 style={{fontSize:"50px", fontWeight:"bold", color:"white"}}>Practice with Libraries, Frameworks, and Add-ons</h3>
      </div>
    );
  }
}
export default Blurb;
