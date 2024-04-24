import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from '@material-tailwind/react'
import NewsProvider from './Provider/NewsProvider.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <NewsProvider>
        <App />
      </NewsProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
