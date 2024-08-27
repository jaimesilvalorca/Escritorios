import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MiniDrawer from './layouts/MiniDrawer.jsx';
import Escritorio from './views/Escritorio.jsx';
import Login from './views/Login.jsx';
import useStore from './store/store.js';
import Prueba from './views/Prueba.jsx';
 

function App() {
  const { user } = useStore((state) => ({ user: state.user })); 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route element={user ? <MiniDrawer /> : <Navigate to="/login" />}>
          <Route path='/' element={user ? <Escritorio /> : <Navigate to="/login" />} />
          <Route path='/prueba' element={user ? <Prueba /> : <Navigate to="/login" />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
