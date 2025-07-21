
import React from 'react';

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  accentColor?: 'cyan' | 'teal';
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description, accentColor = 'cyan' }) => {
    const accentClasses = {
        cyan: 'border-cyan-500/30 group-hover:border-cyan-500',
        teal: 'border-teal-500/30 group-hover:border-teal-500',
    }
  return (
    <div className={`group bg-slate-800/50 p-8 rounded-xl border-t-4 ${accentClasses[accentColor]} transition-all duration-300 hover:bg-slate-800 hover:shadow-2xl hover:shadow-slate-900/50`}>
      <div className="flex items-center justify-center h-16 w-16 bg-slate-900 rounded-lg mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-100 mb-2">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </div>
  );
};

export default InfoCard;
