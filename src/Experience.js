import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Experience extends React.Component {
  constructor() {
    super();
    this.state= {
    };
  }
  render(){
    var cardStyle={ borderBottomRightRadius:"30px", margin:"auto",width:"400px", height:"520px", backgroundColor: "white"};
    var cardBlockStyle={padding:"15px"};
    return(
<div>
<div className="row">
  <div className="col-sm-6" style={{paddingRight:"0px", paddingLeft:"70px"}}>
    <div className="card"  style={cardStyle}>
      <div style={{backgroundColor: "#004D51", minHeight:"100px"}}>
        <h4 style={{fontSize:"40px", color: "white",textAlign:"center", verticalAlign:"middle", lineHeight:"100px", margin:"auto"}}>Skills</h4>
      </div>
      <div className="container" style={cardBlockStyle}>
          <p className="card-text" style={{fontSize:"25px"}}><strong>Programming Languages</strong>:</p>
          <p className="card-text" style={{fontSize:"15px"}}>JavaScript, SQL, C#, Python</p>
          <p className="card-text" style={{fontSize:"25px"}}><strong>Frameworks & Libraries</strong>:</p>
          <p className="card-text" style={{fontSize:"15px"}}> ReactJS, jQuery, Node.js, AngularJS </p>
          <p className="card-text" style={{fontSize:"25px"}}><strong>Database</strong>:</p>
          <p className="card-text" style={{fontSize:"15px"}}>MySQL</p>
          <p className="card-text" style={{fontSize:"25px"}}><strong>Software</strong>:</p>
          <p className="card-text" style={{fontSize:"15px"}}>Microsoft SQL Server, Visual Studio.Net, <br/>Atom, Postman, SOAPUI</p>
          <p className="card-text" style={{fontSize:"25px"}}><strong>Version Control</strong>:</p>
          <p className="card-text" style={{fontSize:"15px"}}>Github</p>
      </div>
    </div>
  </div>
  <div className="col-sm-6" style={{paddingLeft:"-40px", paddingRight:"70px"}}>
    <div className="card" style={cardStyle}>
      <div style={{backgroundColor: "#00696E", minHeight:"100px"}}>
        <h4 style={{fontSize:"40px", color: "white",textAlign:"center", verticalAlign:"middle", lineHeight:"100px", margin:"auto"}}>Experience</h4>
      </div>
      <div className="container" style={cardBlockStyle}>
          <p className="card-text" style={{fontSize:"25px"}}><strong>Programming Languages</strong>:</p>
          <p className="card-text" style={{fontSize:"15px"}}>JavaScript, SQL, C#, Python</p>
          <p className="card-text" style={{fontSize:"25px"}}><strong>Frameworks & Libraries</strong>:</p>
          <p className="card-text" style={{fontSize:"15px"}}> ReactJS, jQuery, Node.js, AngularJS </p>
          <p className="card-text" style={{fontSize:"25px"}}><strong>Database</strong>:</p>
          <p className="card-text" style={{fontSize:"15px"}}>MySQL</p>
          <p className="card-text" style={{fontSize:"25px"}}><strong>Software</strong>:</p>
          <p className="card-text" style={{fontSize:"15px"}}>Microsoft SQL Server, Visual Studio.Net, <br/>Atom, Postman, SOAPUI</p>
          <p className="card-text" style={{fontSize:"25px"}}><strong>Version Control</strong>:</p>
          <p className="card-text" style={{fontSize:"15px"}}>Github</p>
      </div>
    </div>
  </div>
</div>
<br/>
<div className="row">
  <div className="col-sm-6" style={{paddingRight:"0px", paddingLeft:"70px"}}>
    <div className="card"  style={cardStyle}>
      <div style={{backgroundColor: "#3498ab", minHeight:"100px"}}>
        <h4 style={{fontSize:"40px", color: "white",textAlign:"center", verticalAlign:"middle", lineHeight:"100px", margin:"auto"}}>Experience</h4>
      </div>
      <div className="container" style={cardBlockStyle}>
          <p className="card-text" style={{fontSize:"25px"}}><strong>Programming Languages</strong>:</p>
          <p className="card-text" style={{fontSize:"15px"}}>JavaScript, SQL, C#, Python</p>
          <p className="card-text" style={{fontSize:"25px"}}><strong>Frameworks & Libraries</strong>:</p>
          <p className="card-text" style={{fontSize:"15px"}}> ReactJS, jQuery, Node.js, AngularJS </p>
          <p className="card-text" style={{fontSize:"25px"}}><strong>Database</strong>:</p>
          <p className="card-text" style={{fontSize:"15px"}}>MySQL</p>
          <p className="card-text" style={{fontSize:"25px"}}><strong>Software</strong>:</p>
          <p className="card-text" style={{fontSize:"15px"}}>Microsoft SQL Server, Visual Studio.Net, <br/>Atom, Postman, SOAPUI</p>
          <p className="card-text" style={{fontSize:"25px"}}><strong>Version Control</strong>:</p>
          <p className="card-text" style={{fontSize:"15px"}}>Github</p>
      </div>
    </div>
  </div>
  <div className="col-sm-6" style={{paddingLeft:"-40px", paddingRight:"70px"}}>
    <div className="card" style={cardStyle}>
      <div style={{backgroundColor: "#00B0B8", minHeight:"100px"}}>
        <h4 style={{fontSize:"40px", color: "white",textAlign:"center", verticalAlign:"middle", lineHeight:"100px", margin:"auto"}}>Experience</h4>
      </div>
      <div className="container" style={cardBlockStyle}>
          <p className="card-text" style={{fontSize:"25px"}}><strong>Programming Languages</strong>:</p>
          <p className="card-text" style={{fontSize:"15px"}}>JavaScript, SQL, C#, Python</p>
          <p className="card-text" style={{fontSize:"25px"}}><strong>Frameworks & Libraries</strong>:</p>
          <p className="card-text" style={{fontSize:"15px"}}> ReactJS, jQuery, Node.js, AngularJS </p>
          <p className="card-text" style={{fontSize:"25px"}}><strong>Database</strong>:</p>
          <p className="card-text" style={{fontSize:"15px"}}>MySQL</p>
          <p className="card-text" style={{fontSize:"25px"}}><strong>Software</strong>:</p>
          <p className="card-text" style={{fontSize:"15px"}}>Microsoft SQL Server, Visual Studio.Net, <br/>Atom, Postman, SOAPUI</p>
          <p className="card-text" style={{fontSize:"25px"}}><strong>Version Control</strong>:</p>
          <p className="card-text" style={{fontSize:"15px"}}>Github</p>
      </div>
    </div>
  </div>
</div>
</div>
);
}
}
export default Experience;
