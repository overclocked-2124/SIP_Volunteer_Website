import React from 'react';

const TeamBuildingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const MentorshipIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);


const EventsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg text-center flex flex-col items-center transform transition-transform duration-300 hover:-translate-y-2">
        <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            {icon}
        </div>
        <h3 className="text-xl font-bold mt-6 mb-2 text-base-text">
            {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
)


const AboutSipSection: React.FC = () => {
  return (
    <section id="what-is-sip" className="py-24 sm:py-32 bg-primary">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            What is the <span className="font-normal">Student Induction Programme?</span>
          </h2>
          <p className="mt-6 text-lg text-white/95 leading-8">
            SIP is designed to welcome and orient junior students to college life through a series of engaging and supportive activities.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<TeamBuildingIcon />}
            title="Team Building"
            description="Facilitate engaging activities that help juniors connect, collaborate, and form lasting friendships from day one."
          />
          <FeatureCard 
            icon={<MentorshipIcon />}
            title="Guidance & Mentorship"
            description="Be a friendly face and a reliable guide. Share your experiences, answer questions, and help new students navigate college life."
          />
          <FeatureCard 
            icon={<EventsIcon />}
            title="Fun & Creative Events"
            description="Help organize and run a variety of fun-filled events, from ice-breakers to creative challenges, ensuring a vibrant start for everyone."
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSipSection;
