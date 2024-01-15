import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import RoomPage from "./pages/RoomPage";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomId" element={<RoomPage />} />
      </Routes>
    </div>
  );
};

export default App;
