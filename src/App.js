import Footer from "./components/Footer";
import Homepage from "./components/HomePage";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Notfound from "./components/NotFound";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
