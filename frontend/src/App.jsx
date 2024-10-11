import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Navbar from "./components/Navbar.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";

function App() {

  return (
    <div className="min-h-screen relative overflow-hidden">

      <div className="relative z-50 pt-20">
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
