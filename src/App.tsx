import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { LegalModal, ModalKind } from './components/common/LegalModal';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { MobileStickyCta } from './components/layout/MobileStickyCta';
import { ToastProvider } from './components/ui/FormFields';
import { AboutPage } from './pages/AboutPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { MembershipsPage } from './pages/MembershipsPage';
import { TrainersPage } from './pages/TrainersPage';
import { VirtualTourPage } from './pages/VirtualTourPage';

const ScrollHandler: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.replace('#', ''));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
};

const AppShell: React.FC = () => {
  const [modalKind, setModalKind] = useState<ModalKind>(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0C10] text-slate-100">
      <ScrollHandler />
      <Header onOpenPortal={() => setModalKind('portal')} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/memberships" element={<MembershipsPage />} />
        <Route path="/trainers" element={<TrainersPage />} />
        <Route path="/virtual-tour" element={<VirtualTourPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>

      <Footer onOpenLegal={(doc) => setModalKind(doc)} />
      <MobileStickyCta />
      <LegalModal openKind={modalKind} onClose={() => setModalKind(null)} />
    </div>
  );
};

export function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <AppShell />
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
