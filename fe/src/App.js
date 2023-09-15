import "./App.css";
import { Routes, Route } from "react-router-dom";
import Store from "./pages/Store";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="admin" element={<Admin />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
