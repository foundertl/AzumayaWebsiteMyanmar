import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from 'react-router-dom';
import FontProvider from './FontProvider';
import DisableArrowScroll from './DisableScroll';
const root = ReactDOM.createRoot(document.getElementById('root'));
import i18n from'./i18n'
import { I18nextProvider } from 'react-i18next';
import DisableTouchPadHorizontalScroll from './DisableTouchPadScroll';

root.render(
  // <React.StrictMode>
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
            <FontProvider>
              <DisableArrowScroll>
                <DisableTouchPadHorizontalScroll>
                <App />
                </DisableTouchPadHorizontalScroll>
              </DisableArrowScroll>
            </FontProvider>
        </I18nextProvider>
      </BrowserRouter>
  // </React.StrictMode>
  
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
