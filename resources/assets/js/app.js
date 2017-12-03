// require('./bootstrap');
import React from 'react';
import ReactDOM from 'react-dom';
// import hamburger from './components/Navbar/hamburger';
import Slider from './components/slider';
// import detail from './components/detail';
// import detailswiper from './components/detailswiper';
// import tab from './components/tab';
import Sun from './components/sun';
import Cloud from './components/cloud';
// import gmapmap from './components/gmapmap';
import Vuefooter from './components/vuefooter';
// import sidebar from './components/Navbar/sidebar';
import Tree from './components/tree';


ReactDOM.render(<Cloud />, document.querySelector('.cloud'));
ReactDOM.render(<Sun />, document.querySelector('.sun'));
ReactDOM.render(<Slider />, document.querySelector('.slider'));
ReactDOM.render(<Tree />, document.querySelector('.tree'));
ReactDOM.render(<Vuefooter />, document.querySelector('.vuefooter'));