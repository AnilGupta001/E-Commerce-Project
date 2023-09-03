import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import { Header } from './Header';
import { BottomPart } from './BottomPart';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Header></Header>
<App></App> 

  </React.StrictMode>,
)
