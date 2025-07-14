import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '../src/common/components/ThemeContext';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
