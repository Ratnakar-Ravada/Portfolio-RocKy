import { useState, useEffect } from 'react';

const useRelativeTime = (date: string) => {
  const [relativeTime, setRelativeTime] = useState('');

  useEffect(() => {
    const calculateRelativeTime = () => {
      const startDate = new Date(date);
      const now = new Date();

      let years = now.getFullYear() - startDate.getFullYear();
      let months = now.getMonth() - startDate.getMonth();
      let days = now.getDate() - startDate.getDate();

      if (days < 0) {
        months -= 1;
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
      }

      if (months < 0) {
        years -= 1;
        months += 12;
      }

      let result = '';
      if (months > 0) {
        result += `${months} month${months > 1 ? 's' : ''}`;
      }
      if (days > 0) {
        if (result) result += ' and ';
        result += `${days} day${days > 1 ? 's' : ''}`;
      }

      setRelativeTime(result ? `${result} ago` : 'today');
    };

    calculateRelativeTime();
    const interval = setInterval(calculateRelativeTime, 1000 * 60 * 60 * 24); // Update once a day

    return () => clearInterval(interval);
  }, [date]);

  return relativeTime;
};

export default useRelativeTime;
