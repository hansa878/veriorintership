import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 text-center bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-600">
      <p>&copy; {new Date().getFullYear()} Hansa Kumari. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
