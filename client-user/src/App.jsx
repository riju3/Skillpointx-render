import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Appbar from "./components/Appbar";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import LandingPage from "./components/LandingPage";
import ShowCourses from "./components/ShowCourses";
import CoursePage from "./components/CoursePage";
import PurchasedCourses from "./components/PurchasedCourses";
import PaymentForm from "./components/PaymentForm";
import AddCourse from "./components/AddCourse";
import { Toaster } from 'react-hot-toast';
import Home from "./pages/homepage/Home";
import About from "./pages/homepage/About";
import ClientLayout from "./layouts/ClientLayout";
import PublicLayout from "./layouts/PublicLayout";



function App() {
  return (
    <Router>

       <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />       {/* Homepage */}
          <Route path="/about" element={<About />} />       {/* About page */}

        </Route>
      
        <Route element={<ClientLayout />}>
        
        <Route path="/login" element={<LoginPage />} />  {/* Client Login */}
        <Route path="/client" element={<LandingPage />} /> {/* Client Landing */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/courses" element={<ShowCourses />} />
        <Route path="/courses/:id" element={<CoursePage />} />
        <Route path="/courses/purchased" element={<PurchasedCourses />} />
        <Route path="/courses/:id/payment" element={<PaymentForm />} />
        <Route path="/courses/:id/confirm-payment" element={<AddCourse />} />
        </Route>
      </Routes>
      <Routes>
        
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
