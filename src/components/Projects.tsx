import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useInView } from './hooks/useInView';

const projects = [
  {
    id: 1,
    title: 'Kuddles',
    summary:
      'A mobile app that connects working parents with trusted nannies and provides real-time updates on their child’s daily activities.',
    image: 'images/kuddles.logo.jpg',
    tags: ['Full-Stack', 'In Progress'],
    gradient: 'from-cyan-500 to-orange-600',
    detailPath: '/projects/kuddles',
  },
  {
    id: 2,
    title: 'Trust Home',
    summary:
      'A client-side web app that helps users find and compare properties with an intuitive, responsive interface.',
    image: 'images/estate.logo.png',
    tags: ['Frontend', 'Filtering Logic', 'Testing'],
    gradient: 'from-blue-500 to-blue-600',
    detailPath: '/projects/estate',
  },
  {
    id: 3,
    title: 'University Enrollment System',
    summary:
      'A java based system that streamlines the enrollment process for university students.',
    image: 'images/enrollment.logo.png',
    tags: ['Java', 'OOP'],
    gradient: 'from-green-500 to-teal-600',
    detailPath: '/projects/next-gen',
  },
  {
    id: 4,
    title: 'UN SDG Goals',
    summary:
      'A website that visualizes the United Nations Sustainable Development Goals (SDGs).',
    image: 'images/un.logo.png',
    tags: ['Visualization', 'Web App'],
    gradient: 'from-emerald-500 to-lime-600',
    detailPath: '/projects/un-sdg',
  },
];

export function Projects() {
  const { ref, isInView } = useInView();

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Case Studies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Structured projects that highlight my thinking, process, and outcomes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const isLogoCard = true;
            const imageClassName = isLogoCard
              ? 'w-full h-56 object-contain bg-[#0a0118]/70 p-6'
              : 'w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500';
            const card = (
              <div className="relative group h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                <div className="relative h-full bg-[#0a0118]/90 backdrop-blur-xl border border-blue-400/40 rounded-2xl overflow-hidden hover:border-blue-300/70 transition-all duration-300 flex flex-col">
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className={imageClassName}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0118] to-transparent opacity-60" />
                  </div>

                  <div className="p-6 space-y-4 flex-1 flex flex-col">
                    <div>
                      <h3 className="text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-200 leading-relaxed">
                        {project.summary}
                      </p>
                    </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        className="bg-blue-500/20 text-blue-300 border border-blue-400/50 hover:bg-blue-500/30"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  </div>
                </div>
              </div>
            );

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="relative h-full"
              >
                {project.detailPath ? (
                  <Link
                    to={project.detailPath}
                    aria-label={`Open ${project.title} project details`}
                    className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-2xl"
                  >
                    {card}
                  </Link>
                ) : (
                  card
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}



