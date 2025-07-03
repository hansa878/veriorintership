
import React from 'react';

const projects = [
  {
    title: 'Food Website',
    description: 'A sleek, animated portfolio built with React and Tailwind CSS.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnXfZO3obE15TS3kuUeF7pv6XkNSOVJeihyQ&s',
  },
  {
    title: 'E-commerce UI',
    description: 'Designed a responsive e-commerce front end with shopping cart functionality.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAvBiaEkEQ3s3ZMJAXn1C_8Qz1NtmglEfVFg&s',
  },
  {
    title: 'Blog Platform',
    description: 'Created a blog app with markdown support and smooth animations.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGG8UD4u650G9LFSXrF4GtHKt47mHZEsREDA&s',
  },
];

const Projects = () => {
  return (
    <div className="py-16 px-4 md:px-20 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
  key={index}
  className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
>
  <div className="w-full h-[200px] overflow-hidden rounded-lg mb-4">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover object-center"
    />
  </div>
  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
  <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
</div>

        ))}
      </div>
    </div>
  );
};

export default Projects;