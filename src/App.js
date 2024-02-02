import "./App.css";
import { Routes , Route } from 'react-router-dom';


import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import HireFromUs from "./HireFromUs/HireFromUs";
import JobSeekers from "./JobSeekers/JobSeekers";
import YuktiAi from "./YuktiAi/YuktiAi";
import Footer from "./Footer/Footer";
import AboutUs from "./AboutUs/AboutUs";
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "./TermsConditions/TermsConditions";
import RefundPolicy from "./RefundPolicyDebug/RefundPolicyDebug";
import DataScienceCourse from "./CourseDetails/DataScienceCourse";
import MernStackCourse from "./CourseDetails/MernStackCourse";
import JavaFullStackCourse from "./CourseDetails/JavaFullStackCourse";
import Figma from "./figma.js";
import Form from "./Form/Form.js";

import ScrollToTop from './ScrollToTop.js';
import ReactRedux from "./ReactRedux/ReactRedux.js";


function App() {

  return (
    
    <div className="gradient_background">
    <ScrollToTop />
      <Navbar />
      <div className="main_wrapper">
      <Routes>
      
      <Route path="/" element={<Home />}></Route>
      <Route path="/about-us" element={<AboutUs />}></Route>
      <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
      <Route path="/terms-conditions" element={<TermsConditions />}></Route>
      <Route path="/refund-policy" element={<RefundPolicy />}></Route>
      <Route path="/data-science-course" element={<DataScienceCourse />}></Route>
      <Route path="/mern-stack-course" element={<MernStackCourse/>}></Route>
      <Route path="/java-full-stack-course" element={<JavaFullStackCourse/>}></Route>
      <Route path="/figma" element={<Figma />}></Route>
      <Route path="/form" element={<Form/>}></Route>
      <Route path="/reactredux" element={<ReactRedux/>}></Route>
      </Routes>
        {/*<AnimatedCard/> */}
      </div>
      <Footer />
      <HireFromUs />
      <JobSeekers />
      <YuktiAi />
    </div>
  );
}

export default App;
