import Footer from "./components/Footer";
import Homepage from "./components/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactUs from "./components/ContactUs";

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
};

export default App;
