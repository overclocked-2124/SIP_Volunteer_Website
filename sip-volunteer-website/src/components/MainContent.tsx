"use client"; // This directive is crucial

import Image from 'next/image';
import dynamic from 'next/dynamic';
import AnimatedCounter from './AnimatedCounter';
import HorizontalScroll from './HorizontalScroll';

// This is now allowed because it's inside a Client Component
const GenerativeArt = dynamic(() => import('./GenerativeArt'), {
  ssr: false,
});

export default function MainContent() {
  return (
    <div className="bg-background text-text">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/logos/RVCE_Logo.png" alt="RVCE Logo" width={50} height={50} />
            <Image src="/logos/CCLogo_BG_Removed.png" alt="Coding Club Logo" width={50} height={50} className="ml-4" />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-lg font-medium hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-lg font-medium hover:text-primary transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <GenerativeArt />
        <div className="relative z-20 text-center">
          <h1 className="text-7xl md:text-9xl font-bold text-white">
            GUIDE. CONNECT. INSPIRE.
          </h1>
          <p className="text-white text-xl mt-4 max-w-2xl mx-auto">
            Join us to welcome the next generation of engineers. Make a difference in the RVCE community.
          </p>
          <div className="mt-8 space-x-4">
            <a href="/register" className="bg-primary hover:bg-primary_dark text-white font-bold py-4 px-8 rounded-full text-lg transition-transform transform hover:scale-105 inline-block">Register Now</a>
            <a href="#about" className="border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white hover:text-black transition-colors inline-block">Learn More</a>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="about" className="py-24 bg-white text-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-16">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-16">
            <div className="text-center">
              <AnimatedCounter target={50} className="text-7xl font-bold text-primary" />
              <p className="text-2xl text-gray-700 mt-4">Activities</p>
            </div>
            <div className="text-center">
              <AnimatedCounter target={200} className="text-7xl font-bold text-primary" />
              <p className="text-2xl text-gray-700 mt-4">Volunteers</p>
            </div>
            <div className="text-center">
              <AnimatedCounter target={1000} className="text-7xl font-bold text-primary" />
              <p className="text-2xl text-gray-700 mt-4">Incoming Students</p>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Scroll Section */}
      <HorizontalScroll />

      {/* CTA Section */}
      <section className="bg-primary py-24">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl font-bold text-white mb-8">BECOME A VOLUNTEER</h2>
          <div className="max-w-md mx-auto">
            <div className="flex items-center bg-white rounded-full overflow-hidden p-2 shadow-lg">
              <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 text-black focus:outline-none" />
              <button className="bg-gray-800 text-white font-bold py-3 px-6 rounded-full hover:bg-black transition-colors flex-shrink-0">Register Interest</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black py-12">
        <div className="container mx-auto px-6 text-center text-white">
          <p>&copy; 2025 RVCE Coding Club. All Rights Reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}