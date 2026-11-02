import React from 'react';
import ReactDOM from 'react-dom/client';
import { LanguageProvider } from './context/LanguageContext';
import { AppProvider } from './context/AppContext';
import { MainApp } from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <AppProvider>
        <MainApp />
      </AppProvider>
    </LanguageProvider>
  </React.StrictMode>
);
