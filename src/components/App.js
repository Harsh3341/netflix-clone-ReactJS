import { Route, Routes } from "react-router-dom";
import Browse from "./Browse";
import Home from "./Home";
import Login from "./login";
import Main from "./Main";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
