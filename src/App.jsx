import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Prizes from './components/Prizes';
import Rules from './components/Rules';
import Timeline from './components/Timeline';
import Submission from './components/Submission';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Features />
      <Prizes />
      <Rules />
      <Timeline />
      <Submission />
      <Footer />
    </div>
  );
}

export default App;
