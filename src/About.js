import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles/global.css';

class About extends React.Component {
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
      <div style={{backgroundColor: "#008489", borderBottomRightRadius: "30px", height:"500px", backgroundRepeat: "no-repeat"}}>

          <div className="col-sm-12 hidden-xs" style={{marginTop:"150px"}}>

              <div style={{}}>
                <img id="about" data-src="holder.js/auto" src="../extra/work_pic.jpg" alt="Card image cap" style={{margin: "auto", display:"block",borderBottomRightRadius: "30px", width: "140px"}}/>
              </div>
              <div style={{fontSize:"45px", color: "white", textAlign:"center"}}>
                Brendon White
              </div>
              <div style={{fontSize: "20px", color: "white", textAlign:"center"}}>
                <p>
                  Front End Engineering / Web Development
                </p>
                <p>
                  Software Engineer at GE Digital<br/>
                  Indiana University / Michigan State University
                </p>
              </div>

    </div>
  </div>
  </div>
    );
  }
}
export default About;


// <div className="col-sm-6">
//   <div className="card" style={cardStyle}>
//     <div className="card-block" style={cardBlockStyle}>
//       <h4 className="card-title">Experience</h4>
//       <p className="card-text">Built admin web app to manage foreign language table from client – C#, ReactJS, SQL;
//                               Developed ‘banner tool’ for platform wide announcements – C#, ReactJS, SQL, HTML, CSS;
//                               Built portal using MEAN stack - MongoDB, Express.JS, Angular.JS, Node.JS;
//                               Daily: Building RESTful API’s, defect/bug fixer for admin tools & continually adding functionality based on end user requests </p>
//       <a href="#" className="btn btn-primary">Link if necessary</a>
//     </div>
//   </div>
// </div>
