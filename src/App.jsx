import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// كنجيبو المكونات ديالنا
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import JoinWaitlist from './pages/JoinWaitlist';
import LessonViewer from './features/lessons/LessonViewer';
import ModulePage from './pages/ModulePage';
import ScrollToTop from './components/ScrollToTop';
import Login from './pages/Login';

//صفحة الادمين متعددة المكونات 
import AdminLayout from './components/Admin/AdminLayout';
import ModulesManager from './components/Admin/pages/ModulesManager';
import LessonStudio from './components/Admin/pages/LessonStudio';
import Dashboard from './components/Admin/pages/Dashboard';
import UsersManager from './components/Admin/UsersManager';
import InstaBioDevGenerator from './components/Admin/pages/BioDevPreneurCard';

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
            <Route path="*" element={<NotFound />} />
            <Route path="join-waitlist" element={<JoinWaitlist />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/admin" element={<AdminLayout />}>
                {/* هادو هما لي كيبانو وسط الـ Outlet */}
                <Route path="modules" element={<ModulesManager />} />
                <Route path="lesson-studio" element={<LessonStudio />} />
                <Route path="users" element={<UsersManager />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="instaBioDevGenerator" element={<InstaBioDevGenerator />} />
            </Route>            
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