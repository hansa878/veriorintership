import React from 'react';

const Contact = () => {
  return (
    <div className="py-16 px-4 md:px-20 bg-blue-100 dark:bg-blue-900 text-center">
      <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
      <p className="mb-6 text-lg">Feel free to reach out for collaborations or just a friendly hello 👋</p>
      <a href="mailto:hansa@example.com" className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition duration-300">
        Contact Me
      </a>
    </div>
  );
};

export default Contact;
