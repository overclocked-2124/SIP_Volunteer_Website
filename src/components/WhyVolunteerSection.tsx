import React from 'react';

const LeadershipIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const CertificateIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const NetworkIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const GiveBackIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>

const benefits = [
    {
        id: 1,
        title: "Own Real Responsibility",
        description: "Take charge of a domain — tech, events, or design — and deliver something the entire batch experiences.",
        icon: <LeadershipIcon />,
        color: '#ef4444',
    },
    {
        id: 2,
        title: "Grow as a Leader",
        description: "Step into a real organisational role — manage people, solve problems under pressure, and walk away with experience that no classroom can replicate.",
        icon: <CertificateIcon />,
        color: '#f59e0b',
    },
    {
        id: 3,
        title: "Build Lasting Connections",
        description: "Work closely with faculty, the Coding Club, and your co-organisers — relationships that go beyond SIP.",
        icon: <NetworkIcon />,
        color: '#14b8a6',
    },
    {
        id: 4,
        title: "Leave a Legacy",
        description: "The systems and experiences you build will set the benchmark for every SIP that comes after yours.",
        icon: <GiveBackIcon />,
        color: '#6366f1',
    },
];

const BenefitCard = ({ benefit }: { benefit: typeof benefits[0] }) => (
    <div 
        className="group relative flex-shrink-0 w-10/12 sm:w-[320px] h-80 rounded-3xl p-6 flex flex-col justify-between overflow-hidden transition-all duration-500 ease-in-out hover:-translate-y-2 shadow-lg snap-center"
        style={{ backgroundColor: benefit.color }}
    >
        <div className="absolute -bottom-10 -right-10 text-white/20 transition-transform duration-500 ease-in-out group-hover:scale-125 group-hover:-rotate-12">
            {React.cloneElement(benefit.icon, { className: 'w-44 h-44' })}
        </div>
        
        <div className="relative z-10 text-white/80">
            {benefit.icon}
        </div>
        <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white">{benefit.title}</h3>
            <p className="mt-2 text-white/95 leading-relaxed text-base">{benefit.description}</p>
        </div>
        <div className="absolute top-6 right-6 w-10 h-10 border-2 border-white/30 rounded-full flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-300 z-10">
            <span className="text-white text-2xl font-light">+</span>
        </div>
    </div>
);


const WhyVolunteerSection: React.FC = () => {
  return (
    <section id="why-volunteer" className="py-24 sm:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Why Should You <span className="text-primary">Apply?</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-8">
            This isn't a volunteer role. You'll be an organiser — owning a piece of SIP 2026 from planning to execution.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-6 py-8">
          {benefits.map(benefit => <BenefitCard key={benefit.id} benefit={benefit} />)}
        </div>
      </div>
    </section>
  );
};

export default WhyVolunteerSection;