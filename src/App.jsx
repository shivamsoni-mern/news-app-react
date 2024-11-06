import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import Sports from "./pages/Sports";
import Politics from "./pages/Politics";
import Business from "./pages/Business";
import Entertainment from "./pages/Entertainment";
import International from "./pages/International";
import ThemeBtn from "./components/ThemeBtn";
import { useContext } from "react";
import ThemeContext from "./providers/theme/ThemeProvider";

const App = () => {
  const { dark } = useContext(ThemeContext);
  return (
    <>
      <Navbar />
      <div
        className={
          dark ? "container-fluid p-3 bg-secondary" : "container-fluid p-3"
        }
        style={{ minHeight: "100vh" }}
      >
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/sports-news" element={<Sports />} />
          <Route path="/politics-news" element={<Politics />} />
          <Route path="/business-news" element={<Business />} />
          <Route path="/entertainment-news" element={<Entertainment />} />
          <Route path="/international-news" element={<International />} />
        </Routes>
      </div>
      <ThemeBtn />
    </>
  );
};

export default App;
