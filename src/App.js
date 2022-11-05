import Footer from "./components/Footer";
import Homepage from "./components/HomePage";
import { HashRouter, Route, Routes } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Notfound from "./components/NotFound";

const App = () => {
  return (
    <HashRouter>
      <>
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route exact path="/contact" element={<ContactUs />}></Route>
          <Route exact path="*" element={<Notfound />}></Route>
        </Routes>
        <Footer />
      </>
    </HashRouter>
  );
};

export default App;
