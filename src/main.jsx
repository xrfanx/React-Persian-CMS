import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './Custom.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.querySelector('body')).render(
    <BrowserRouter>
    <App />
    </BrowserRouter>  
)
