import store from './redux/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App dispatch={store.dispatch.bind(store)} store={store} />
    </React.StrictMode>, 
    document.getElementById('root'));
}

rerenderEntireTree();
store.subscribe(rerenderEntireTree);


