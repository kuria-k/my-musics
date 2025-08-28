import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Inputs from './Inputs.jsx'
import Home from './Home.jsx'
import Data from './Data.jsx'
import Counter from './Counter.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Inputs />  */}
    {/* <Home/> */}
    {/* <Data/> */}
    {/* <Counter/> */}

  </StrictMode>,
)
