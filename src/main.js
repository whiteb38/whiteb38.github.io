console.log('Hello World!');
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import HomeView from './HomeView';
import 'bootstrap/dist/css/bootstrap.css';



document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(
    <HomeView />,
    document.getElementById('mount')
  );
});
