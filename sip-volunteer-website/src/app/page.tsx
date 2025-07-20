
import Image from 'next/image';
import AnimatedCounter from '../components/AnimatedCounter';
import HorizontalScroll from '../components/HorizontalScroll';
import GenerativeArt from '../components/GenerativeArt';

export default function Home() {
  return (
    <div className="bg-background text-text">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/logos/RVCE_Logo.png" alt="RVCE Logo" width={60} height={60} />
            <Image src="/logos/CCLogo_BG_Removed.png" alt="Coding Club Logo" width={60} height={60} className="ml-4" />
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
          <h1 className="text-7xl md:text-9xl font-bold text-white mix-blend-screen bg-black p-4">
            GUIDE. CONNECT. INSPIRE.
          </h1>
          <div className="mt-8 space-x-4">
            <a href="/register" className="bg-primary hover:bg-primary_dark text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105">Register Now</a>
            <a href="#about" className="border-2 border-white text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-white hover:text-black transition-colors">Learn More</a>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <AnimatedCounter target={50} className="text-7xl font-bold text-primary" />
              <p className="text-2xl text-gray-600 mt-2">Activities</p>
            </div>
            <div className="text-center">
              <AnimatedCounter target={200} className="text-7xl font-bold text-primary" />
              <p className="text-2xl text-gray-600 mt-2">Volunteers</p>
            </div>
            <div className="text-center">
              <AnimatedCounter target={1000} className="text-7xl font-bold text-primary" />
              <p className="text-2xl text-gray-600 mt-2">Incoming Students</p>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Scroll Section */}
      <HorizontalScroll />

      {/* CTA Section */}
      <section className="bg-primary py-20 relative overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-center"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100%\' height=\'100%\' viewBox=\'0 0 1440 300\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0,150 C200,250 400,50 600,150 C800,250 1000,50 1200,150 C1400,250 1440,150 1440,150 L1440,300 L0,300 Z\' fill=\'%23E64A19\'/%3E%3C/svg%3E")' }}
        ></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl font-bold text-white mb-8">BECOME A VOLUNTEER</h2>
          <div className="max-w-md mx-auto">
            <div className="flex items-center bg-white rounded-full overflow-hidden p-2">
              <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 text-text focus:outline-none" />
              <button className="bg-text text-white font-bold py-2 px-6 rounded-full hover:bg-gray-800 transition-colors">Register Interest</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-text py-12">
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
