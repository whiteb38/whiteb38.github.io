"use strict";

import React from "react";
import Chart from "chart.js";
var myChart;

class LyricsChart extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    let lyrics;
    let wordCount;

    if (this.props.lyrics) {
      lyrics = this.props.lyrics.replace(/\n/g, " ");
      lyrics = lyrics.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, " ");
      lyrics = lyrics.replace(/\s{2,}/g, " ");
      wordCount = words(lyrics.toLowerCase());

      if (myChart) {
        myChart.destroy();
      }
      var ctx = document.getElementById("myChart").getContext("2d");
      var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
      gradientStroke.addColorStop(0, "#80b6f4");
      gradientStroke.addColorStop(1, "#f49080");
      var gradientFill = ctx.createLinearGradient(500, 0, 100, 0);
      gradientFill.addColorStop(0, "rgba(128, 182, 244, 0.6)");
      gradientFill.addColorStop(1, "rgba(244, 144, 128, 0.6)");
      let data = {
        datasets: [
          {
            data: wordCount.map(word => {
              return word.count;
            }),
            borderColor: gradientStroke,
            pointBorderColor: gradientStroke,
            pointBackgroundColor: gradientStroke,
            pointHoverBackgroundColor: gradientStroke,
            pointHoverBorderColor: gradientStroke,
            backgroundColor: gradientFill
          }
        ],
        labels: wordCount.map(word => {
          return word.word;
        })
      };
      myChart = new Chart(ctx, {
        type: "doughnut",
        data: data,
        options: {
          legend: {
            position: "left"
          }
        }
      });
    }

    let noDataMessage;
    let chartHeight = "40vh";
    let chartWidth = "80vw";
    if (!wordCount) {
      chartHeight = "50px";
      chartWidth = "50px";
      noDataMessage = (
        <p className="col-md-7 offset-md-5">Please search for lyrics above</p>
      );
    }
    return (
      <div>
        {noDataMessage}
        <div
          className="chart-container"
          style={{
            position: "relative",
            height: chartHeight,
            width: chartWidth
          }}
        >
          <canvas id="myChart" />
        </div>
      </div>
    );
  }
}

export default LyricsChart;

function words(str) {
  var words = [];

  //check if words list is empty if so then insert the first word into the array

  if (!words.length) {
    var word = str.split(" ")[0];
    words.push({ word: word, count: 1 });
  }

  //convert string to array so you can iterate through it
  str = str.split(" ");

  //iterate through the array starting from the first position because word at the position 0 is already in the array
  for (var i = 1; i < str.length; i++) {
    //iterate through the words list to the see if the word has appeared yet
    var wordExists = false;

    for (var j = 0; j < words.length; j++) {
      if (str[i] == words[j].word) {
        //word exists in word so count one up
        words[j].count += 1;

        //used to prevent the word from being inserted twice
        wordExists = true;
        break;
      }
    }

    //insert new word in words if it
    if (!wordExists) {
      words.push({ word: str[i], count: 1 });
    }
  }

  words.sort((a, b) => (a.count < b.count ? 1 : b.count < a.count ? -1 : 0));
  let wordsSliced = words.slice(0, 15);

  return wordsSliced;
}
