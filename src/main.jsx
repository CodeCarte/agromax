import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TesteDeConhecimento from './routes/testedeconhecimento/TesteDeConhecimento'
import Home from './routes/home/Home.jsx';


const router = createBrowserRouter([
  {path: "/",
   element: <App/>,
   children: [
    {
      path: "/",
      element: <Home/>
    },

    {
      path: "/testedeconhecimento",
      element: <TesteDeConhecimento/>

    }
   ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
