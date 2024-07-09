import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Book1 from './pages/Book1/Book1';
import Auth from './pages/Auth/Auth';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignUp from './pages/SignUp/SignUp'
import NotFound from './pages/NotFound/NotFound';
const App = () => {
  return (
    <>
    <ToastContainer/>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/"  element={<Auth />}>
      <Route index element={<Book1 />} />
      </Route>
      <Route path="*" element={<NotFound />} />
     
    </Routes>
    </>
  );
}

export default App;
