import React from 'react';
import ReactDOM from 'react-dom';
import {VictoryChart, VictoryLine, VictoryStack, VictoryBar, VictoryPortal, VictoryLabel, VictoryAxis, VictoryVoronoiContainer, VictoryTooltip, Bar} from 'victory';

class Chart extends React.Component {

  handleClick(e){
    console.log("clicked");
    alert('Why did you click that?')
  }

    render(){

    return(
      <div className="row featurette">
      <div className="col-md-7">
      <VictoryBar
        data={[
          {x: 1, y: 10, label: "ReactJS"},
          {x: 2, y: 7, label: "JavaScript"},
          {x: 3, y: 6, label: "AngularJS"},
          {x: 4, y: 6, label: "SQL"},
          {x: 5, y: 4, label: "C#"},
        ]}
        style={{
          data:{fill:"tomato", strokeWidth: "10px"}, parent: {height:"300px", width:"450px"} }}
        labelComponent={
          <VictoryLabel angle={90} verticalAnchor="middle" textAnchor="end"/>
        }
        events={[
          {
            target:"data",
            eventHandlers: {
              onMouseOver: () => {
                return [{
                  mutation: (props)=> {
                    return {
                      style: Object.assign({}, props.style, {fill:"black"})
                    };
                  }
                }];
              },
              onMouseOut: ()=> {
                return[{
                  mutation:()=> {
                    return null;
                  }
                }]
              }
            }
          }
        ]}
        dataComponent={
          <Bar
            events={{
                onClick: (evt) => {this.handleClick(evt)}
            }} />
        }

      />
        </div>
      </div>
);
}
}
export default Chart;
