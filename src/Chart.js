import React from "react";
import { VictoryBar, VictoryLabel, Bar } from "victory";
import "aos/dist/aos.css";
import AOS from "aos";

class Chart extends React.Component {
  handleClick(e) {
    console.log("clicked");
    alert("Why did you click that?");
  }

  render() {
    AOS.init();
    return (
      <div className="row featurette">
        <div className="col-md-7">
          <h2 data-aos="fade-right" className="featurette-heading">
            VictoryJS Example
            <span style={{ color: "#4CD4B0" }}> Static data</span>
          </h2>
          <p className="lead" data-aos="fade-right">
            Using VictoryJS, I built a sample bar chart. I was interested in
            using VictoryJS as a substitute for D3. It allows for a simple
            approach to displaying data.
          </p>
        </div>
        <div className="col-md-5" data-aos="fade-left">
          <VictoryBar
            data={[
              { x: 1, y: 10, label: "ReactJS" },
              { x: 2, y: 7, label: "JavaScript" },
              { x: 3, y: 6, label: "AngularJS" },
              { x: 4, y: 6, label: "SQL" },
              { x: 5, y: 4, label: "C#" }
            ]}
            style={{
              data: { fill: "#4CD4B0", strokeWidth: "10px" },
              parent: { height: "300px", width: "450px" }
            }}
            labelComponent={
              <VictoryLabel
                angle={90}
                verticalAnchor="middle"
                textAnchor="end"
              />
            }
            events={[
              {
                target: "data",
                eventHandlers: {
                  onMouseOver: () => {
                    return [
                      {
                        mutation: props => {
                          return {
                            style: Object.assign({}, props.style, {
                              fill: "black"
                            })
                          };
                        }
                      }
                    ];
                  },
                  onMouseOut: () => {
                    return [
                      {
                        mutation: () => {
                          return null;
                        }
                      }
                    ];
                  }
                }
              }
            ]}
            dataComponent={
              <Bar
                events={{
                  onClick: evt => {
                    this.handleClick(evt);
                  }
                }}
              />
            }
          />
        </div>
      </div>
    );
  }
}
export default Chart;
