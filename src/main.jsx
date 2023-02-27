import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';
import './movieCardModule.css';
import './movieCardGridModule.css';
import './AppModule.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App title = {'Search Movie'} />
  </React.StrictMode>,
)
