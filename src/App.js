import Footer from "./components/Footer";
import Homepage from "./components/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Notfound from "./components/NotFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>

      <Footer />
    </>
  );
};

export default App;
