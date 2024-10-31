import React,{ useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Pages/register_page';
import Login from './Pages/login_page';
import ForgotPassword from './Pages/forgot_password';
import ResetPassword from './Pages/reset_password';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const [token ,setToken] = useState('')
  return (
    <div>
     
     <div>
      <ToastContainer />
     </div>

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login  setToken={setToken}/>} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:id/:token/:rString" element={<ResetPassword />} />
        
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
