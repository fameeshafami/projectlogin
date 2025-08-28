import { Routes, Route, Navigate } from "react-router-dom";
import  SignIn  from './components/SignIn';
import SignUp from './components/SignUp';
import ResetPassword from './components/ResetPassword';



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signin" />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/reset" element={<ResetPassword />} />
  
    </Routes>
  );
}

