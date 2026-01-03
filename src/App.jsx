import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// كنجيبو المكونات ديالنا
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import LessonViewer from './features/lessons/LessonViewer';
import ModulePage from './pages/ModulePage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* زدنا font-tajawal هنا باش يورثوه كاع المكونات */}
      <div dir="rtl" className="font-tajawal min-h-screen bg-[#FCFCFC] flex flex-col">
        <Navbar />
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lesson/:id" element={<LessonViewer />} />
            <Route path="/module/:moduleId" element={<ModulePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;