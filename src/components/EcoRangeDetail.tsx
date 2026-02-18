import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

export function EcoRangeDetail() {
  const { ref, isInView } = useInView();
  const assetBase = import.meta.env.BASE_URL;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold leading-[1.2] mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            UN SDG Goals
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4" />
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            A website that visualizes the United Nations Sustainable Development Goals (SDGs).
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative bg-[#0a0118]/92 backdrop-blur-xl border border-blue-400/40 rounded-3xl p-6 sm:p-10 hover:border-blue-300/70 transition-all duration-300">
            <div className="space-y-8">
              {/* Overview */}
              <div className="rounded-2xl border border-blue-400/40 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-6">
                <h3 className="text-2xl font-semibold text-white">Overview</h3>
                <p className="text-gray-100 mt-2 leading-relaxed text-[15px] sm:text-base">
                  The Sustainable Development Goals (SDGs) are 17 global goals adopted in 2015 by the United Nations as part of the 2030 Agenda for Sustainable Development. They aim to end poverty, reduce inequality, protect the environment, and promote peace and prosperity worldwide. The SDGs provide a shared framework for countries and organizations to work together toward a more sustainable and inclusive future by 2030.
                </p>
              </div>

              {/* Process */}
              <div className="rounded-2xl border border-blue-400/40 bg-[#0a0118]/60 p-6">
                <h4 className="text-lg font-semibold text-white mb-2">Techstack used</h4>
                <ul className="mt-3 grid gap-2 text-gray-100 text-[15px] sm:text-base list-disc list-inside marker:text-blue-300">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
              </div>

              

              {/* Wireframe + Screens */}
              <div className="rounded-2xl border border-blue-400/40 bg-[#0a0118]/60 p-6">
                <div className="mb-4">
                  <a
                    href="https://www.figma.com/make/fNH2qzkKeJEasouBXt7iQN/Agriculture-Website?p=f&t=kGQvhbW2BSJZKgcQ-0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 font-semibold"
                    style={{
                      textDecoration: 'underline',
                      textDecorationThickness: '2px',
                      textUnderlineOffset: '4px',
                    }}
                  >
                    View Project
                  </a>
                </div>

                
                {/* 🔥 Increased gap HERE */}
                <div className="h-20 sm:h-28" />
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    'images/un.header.png',
                    'images/un.home.png',
                    'images/un.profile.png',
                    'images/un.volunteer.png',
                    'images/un.team.png',
                    'images/un.feedback.png',
                  ].map((src) => (
                    <div
                      key={src}
                      className="overflow-hidden rounded-xl border border-blue-400/40 bg-[#0a0118]/70"
                    >
                      <img
                        src={`${assetBase}${src}`}
                        alt="EcoRange section"
                        className="w-full h-auto block"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



