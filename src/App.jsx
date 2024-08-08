import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MiniDrawer from "./layouts/MiniDrawer.jsx"
import Escritorio from './views/Escritorio.jsx'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route element={<MiniDrawer />}>
            <Route path='/' element={<Escritorio/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
