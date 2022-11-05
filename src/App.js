import Footer from "./components/Footer";
import Homepage from "./components/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Notfound from "./components/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route exact path="/contact" element={<ContactUs />}></Route>
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
};

export default App;
