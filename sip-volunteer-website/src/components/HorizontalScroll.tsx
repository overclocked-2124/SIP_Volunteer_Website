"use client";
import { useRef, useEffect } from 'react';

const cards = [
    {
      title: "A Welcoming Experience",
      description: "Help new students transition smoothly into college life with fun and engaging activities that foster teamwork and creativity.",
      art: (
        <div className="w-full h-48 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-t-lg"></div>
      ),
    },
    {
      title: "Your Role as a Volunteer",
      description: "Be a mentor, a guide, and a friend. You'll organize and facilitate team-building exercises, workshops, and other events.",
      art: (
        <div className="w-full h-48 bg-gradient-to-br from-red-500 to-pink-500 rounded-t-lg"></div>
      ),
    },
    {
        title: "Build Connections",
        description: "Network with your peers, juniors, and faculty, building lasting relationships that will benefit you throughout your career.",
        art: (
            <div className="w-full h-48 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-t-lg"></div>
        )
    },
    {
        title: "Develop Leadership Skills",
        description: "Gain hands-on experience in leadership, communication, and event management—skills that are invaluable in any field.",
        art: (
            <div className="w-full h-48 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-t-lg"></div>
        )
    }
  ];

const HorizontalScroll = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const handleWheel = (evt: WheelEvent) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
      };
      scrollContainer.addEventListener('wheel', handleWheel);
      return () => {
        scrollContainer.removeEventListener('wheel', handleWheel);
      };
    }
  }, []);

  return (
    <section className="relative h-screen bg-black flex flex-col justify-center">
        <h2 className="text-5xl font-bold text-center text-white mb-12">What You'll Do</h2>
        <div ref={scrollContainerRef} className="flex overflow-x-auto p-12 space-x-8 no-scrollbar">
            {cards.map((card, index) => (
            <div key={index} className="flex-shrink-0 w-80 bg-gray-900 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                {card.art}
                <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
                <p className="text-gray-400">{card.description}</p>
                </div>
            </div>
            ))}
        </div>
    </section>
  );
};

export default HorizontalScroll;