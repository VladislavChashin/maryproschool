import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './source/fonts/stylesheet.css';
import './source/styles/index.scss';
import './source/styles/normalize.min.css';
import { Provider } from 'react-redux'
import store from './components/store/store';
// import * as ymaps3 from 'ymaps3';
// const ymaps3Reactify = await ymaps3.import('@yandex/ymaps3-reactify');
// const reactify = ymaps3Reactify.reactify.bindTo(React, ReactDOM);
// const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = reactify.module(ymaps3);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
