import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {initSecurityBootstrap} from './utils/security';

// Initialize OWASP, CSRF, and JWT session security bootstrap before mounting UI
initSecurityBootstrap();

createRoot(document.getElementById('root')!).render(<App />);
