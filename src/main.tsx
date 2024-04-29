import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@material-tailwind/react';
import App from './App.tsx';
import './index.css';
import NewsProvider from './Provider/NewsProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(

  <ThemeProvider>
    <NewsProvider>
      <App />
    </NewsProvider>
  </ThemeProvider>,

);
