import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import S3List from './Components/S3List';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <S3List />
  </React.StrictMode>
);
