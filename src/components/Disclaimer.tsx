import useRelativeTime from '../hooks/useRelativeTime';
import { MessageSquare } from 'lucide-react';

const Disclaimer = () => {
  const lastUpdated = useRelativeTime('2025-04-15');

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex items-center justify-center text-center py-4">
      <p className="text-sm text-gray-500 dark:text-gray-400 mr-4">
        Last updated {lastUpdated}, but I'm currently architecting my next big project. Want a piece of it?
      </p>
      <button 
        onClick={handleContactClick}
        className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <MessageSquare className="w-4 h-4 mr-2" />
        Contact Me
      </button>
    </div>
  );
};

export default Disclaimer;
