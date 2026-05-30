import { useEffect } from 'react';
import AOS from 'aos';
import { usePortfolio } from './hooks/usePortfolio';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Research from './components/Research';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import GitHubSection from './components/GitHubSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import NeuralNetworkBackground from './components/NeuralNetworkBackground';
import CursorGlow from './components/CursorGlow';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const { data, loading } = usePortfolio();

  useEffect(() => {
    if (!loading) {
      AOS.init({ duration: 600, once: true, offset: 50 });
      AOS.refresh();
    }
  }, [loading]);

  if (loading) {
    return (
      <div className="relative min-h-screen">
        <NeuralNetworkBackground />
        <LoadingScreen />
      </div>
    );
  }

  return (
    <div className="relative text-slate-200 min-h-screen">
      <NeuralNetworkBackground />
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">
        <Hero profile={data.profile} />
        <About profile={data.profile} />
        <Skills skills={data.skills} />
        <Projects projects={data.projects} />
        <Research items={data.research} />
        <Experience items={data.experience} />
        <Certifications items={data.certifications} />
        <GitHubSection profile={data.profile} />
        <Contact profile={data.profile} />
      </main>
      <Footer profile={data.profile} />
      <Chatbot />
    </div>
  );
}
