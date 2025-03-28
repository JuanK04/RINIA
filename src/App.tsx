import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './auth/login/login';
import SignIn from './auth/sign-in/signIn';
import Home from './pages/home/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;