import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div className="py-16 px-4 md:px-20 bg-gray-100 dark:bg-gray-800" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg max-w-3xl mx-auto">
        I'm a passionate developer with experience in web development, UI/UX design, and animation. I love building beautiful and functional user experiences.
      </p>
    </motion.div>
  );
};

export default About;
