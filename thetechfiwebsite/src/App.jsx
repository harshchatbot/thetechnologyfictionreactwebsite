import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import SalesforceCoachingAjmer from "./pages/SalesforceCoachingAjmer.jsx";

export default function App() {
  return (
    <Routes>
      {/* 1. Main Authority Dashboard */}
      <Route path="/" element={<HomePage />} />
      
      {/* 2. Hidden SEO Landing Page (Keep this, but don't link in main menu) */}
      <Route path="/salesforce-coaching-ajmer" element={<SalesforceCoachingAjmer />} />
      
      {/* 3. Future Routes (Placeholder for when you build them) */}
      {/* <Route path="/mentorship" element={<MentorshipPage />} /> */}
      {/* <Route path="/blog" element={<BlogPage />} /> */}
    </Routes>
  );
}