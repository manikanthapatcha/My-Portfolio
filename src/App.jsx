import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BackgroundLattice from './components/BackgroundLattice';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen relative flex flex-col font-sans selection:bg-lime-400/30 selection:text-lime-300">
        
        {/* Accessible Skip to Content */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-lime-400 text-black font-bold rounded-lg shadow-lg text-xs"
        >
          Skip to main content
        </a>

        {/* Dynamic Lattice Background */}
        <BackgroundLattice />

        {/* Global Navigation Header */}
        <Navbar onOpenResume={() => setResumeOpen(true)} />

        {/* Route Outlets */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onOpenResume={() => setResumeOpen(true)} />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>

        {/* Verified Resume Modal */}
        <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

        {/* Global Footer */}
        <Footer />

      </div>
    </Router>
  );
}
