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
      <div className="container" style={{overflow:"hidden"}}>
        <div className="row">
          <div className="col-sm-2 col-xs-12" style={{float: "left"}}>
            <div className="card">
              <div className="card-block">
                <img className="card-img-top img-responsive hidden-xs" data-src="holder.js/auto" src="../extra/work_pic.jpg" alt="Card image cap" style={{backgroundSize: "contain", borderRadius: "15px", MaxWidth: "80%", height: "auto"}}/>
              </div>
            </div>
          </div>
          <br />
          <div className="col-sm-10" style={{float: "right"}}>
            <div className="card" style={{textAlign: "center", verticalAlign: "middle"}}>
              <div className="card-block hidden-xs" style={cardBlockStyle}>
                <p className="card-text" style={{fontFamily:"ubuntu",fontSize: "18px", color: "white", textShadow: "3px 3px 0px #000", fontWeight:"700"}}>I am passionate, a quick learner, and a self-starter looking to leverage my technical and leadership skills on an agile development team.
                                        Skilled in full stack JS, HTML/CSS, SQL. Experienced in working on a scrum team, developing business plans, functional testing & requirements gathering.
                                        Interested in a challenging technical career in a development environment with learning opportunities.</p><br/>
                                      <p style={{fontFamily:"ubuntu",fontWeight: "bold", fontSize: "27px", color: "white", textShadow: "3px 3px 0px #000"}}>Looking for Front End Engineering / Web Development opportunities </p>
              </div>
            </div>
          </div>
        </div>
        <br />
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
