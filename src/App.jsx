import Home from "./pages/Home";
import Login from "./pages/Login";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Pic from "./pages/Home/components/Pic";
import Video from "./pages/Home/components/Video";
import ChartCom from "./pages/Home/components/Chart";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />}>
          <Route path="/home/pic" element={<Pic />}></Route>
          <Route path="/home/user" element={<Video />}></Route>
          <Route path="/home/chart" element={<ChartCom />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
