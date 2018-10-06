import 'bootstrap/dist/css/bootstrap.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import HomeView from './HomeView';


document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(
    <HomeView />,
    document.getElementById('mount')
  );
});
