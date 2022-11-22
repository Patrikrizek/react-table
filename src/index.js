import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import Api from './Api'
import './index.css'

const container = document.getElementById('root');
const root = createRoot(container)
root.render(
    <React.StrictMode>
        <h1>Table</h1>
        <App />
        <h1>Pulling in API Data</h1>
        <Api />
    </React.StrictMode>
);