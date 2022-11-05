import Homepage from "./components/HomePage";
import { HashRouter, Route, Routes } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Notfound from "./components/NotFound";

const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
