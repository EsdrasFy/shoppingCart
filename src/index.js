import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AllProvider } from './contexts/AllContexts/AllContexts';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AllProvider>
      <App />
    </AllProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals();
