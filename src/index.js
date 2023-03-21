import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const param = new URLSearchParams(window.location.search)
const temp = window.location.pathname.split('/')
if(param.has('APP')){
  if(param.get('APP') === '5f12f3d2c555b026c55ae500' || temp[temp.length()-1] === 'ISL81801-V4'){
    const domElement = document.createElement('div');
    domElement.id = 'hover-widget'
    document.body.appendChild(domElement)
    const root = ReactDOM.createRoot(domElement);
    root.render(
      <React.StrictMode>
        <App product="ISL81801"/>
      </React.StrictMode>
    );
  }else if(param.get('APP') === '62de8457c555b03020ab5ddb' || temp[temp.length()-1] === 'SiT9501'){
    const domElement = document.createElement('div');
    domElement.id = 'hover-widget'
    document.body.appendChild(domElement)
    const root = ReactDOM.createRoot(domElement);
    root.render(
      <React.StrictMode>
        <App product="SiT9501"/>
      </React.StrictMode>
    );
  }
  
}
