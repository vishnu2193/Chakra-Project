import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./Components/Home";
import { NewHomeProvider } from "./Context/NewHomeContext";

export default function App() {
  return (
    <NewHomeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </NewHomeProvider>
  );
}
