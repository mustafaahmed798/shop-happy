import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarLogin from "./component/Utility/NavBarLogin";
import Footer from "./component/Utility/Footer";
import LoginPage from "./pages/Auth/LoginPage";
import RigesterPage from "./pages/Auth/RegisterPage";
import AllCategory from "./pages/Category/AllCategory";

function App() {
  return (
    <div className="font">
      <NavBarLogin/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RigesterPage />} />
          <Route path="/allcategory" element={<AllCategory />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
