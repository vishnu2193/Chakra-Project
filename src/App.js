import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import { Home, About, Errorpage } from "./Components";
import Navbar from "./Components/Navbar";
import { NewHomeProvider } from "./Context/NewHomeContext";

export default function App() {
  return (
    <NewHomeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<Errorpage />}></Route>
        </Routes>
      </BrowserRouter>
    </NewHomeProvider>
  );
}
