import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/header.jsx";
import About from "./components/about.jsx";
import Contact from "./components/contact.jsx";
import Home from "./components/home.jsx";

import { ThemeProvider } from "./context/theme.jsx";

function App() {
  return (
    <>
      <ThemeProvider>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
