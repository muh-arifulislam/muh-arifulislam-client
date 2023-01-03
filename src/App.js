import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Resume from "./pages/Home/Resume";
import Profile from "./pages/Home/Profile";
import Contact from "./pages/Home/Contact";
import Portfolio from "./pages/Home/Portfolio";
import Default from "./pages/Home/Default";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}>
          <Route index element={<Default></Default>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="/resume" element={<Resume></Resume>}></Route>
          <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
