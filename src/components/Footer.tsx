import React from 'react';

const Footer: React.FC = () => {
  return (
      <footer className="bg-gray-100 border-t border-gray-200">
        <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center space-x-6">
                    <a href="#" className="opacity-70 hover:opacity-100 transition-opacity duration-300">
                        <div className="h-10 w-10 bg-gray-300 rounded-full"/>
                    </a>
                     <a href="#" className="opacity-70 hover:opacity-100 transition-opacity duration-300">
                        <div className="h-10 w-24 bg-gray-300 rounded-md"/>
                    </a>
                </div>
                <div className="flex flex-col items-center sm:items-end gap-4">
                    <div className="text-center sm:text-right">
                        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} RVCE Volunteer Initiative. All Rights Reserved.</p>
                        <p className="text-xs text-gray-500 mt-1">Designed by Students for Students.</p>
                    </div>
                </div>
            </div>
        </div>
      </footer>
  );
};

export default Footer;
