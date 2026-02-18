import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

export function VirtualRealityDetail() {
  const { ref, isInView } = useInView();

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
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4"></div>
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
              <div className="rounded-2xl border border-blue-400/40 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-6">
                <h3 className="text-2xl font-semibold text-white">Overview</h3>
                <p className="text-gray-100 mt-2 leading-relaxed text-[15px] sm:text-base">
                  The **Sustainable Development Goals (SDGs)** are 17 global goals adopted in 2015 by the United Nations as part of the 2030 Agenda for Sustainable Development. They aim to end poverty, reduce inequality, protect the environment, and promote peace and prosperity worldwide. The SDGs provide a shared framework for countries and organizations to work together toward a more sustainable and inclusive future by 2030.

                </p>
              </div>

              <div className="rounded-2xl border border-blue-400/40 bg-[#0a0118]/60 p-6">
                <h4 className="text-lg font-semibold text-white mb-2">Objective</h4>
                <p className="text-gray-100 leading-relaxed text-[15px] sm:text-base">
                  The objective of this project was to create an engaging and informative website that visualizes the United Nations Sustainable Development Goals (SDGs). The website aims to raise awareness about the SDGs, educate users on their importance, and inspire action towards achieving these global goals by 2030.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


