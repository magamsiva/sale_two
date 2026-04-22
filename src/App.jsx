import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PlatformShowcase from "./components/PlatformShowcase";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Careers from "./components/Careers";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import DemoModal from "./components/DemoModal";
import AIChat from "./components/AIChat";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <Navbar openModal={() => setModalOpen(true)} />
      <Hero />
      <AIChat />
      <PlatformShowcase />
      <Features />
      <Pricing />
      <Careers />
      <Testimonials />
      <Footer />
      <DemoModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

export default App;
