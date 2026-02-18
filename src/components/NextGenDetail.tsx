import { motion } from 'motion/react';
import { FileText } from 'lucide-react';
import { useInView } from './hooks/useInView';

export function NextGenDetail() {
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
            University Enrollment System
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            A java based system that streamlines the enrollment process for university students.
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
                  A java based system that streamlines the enrollment process for university students. The system allows students to easily register for courses, view their schedules, and manage their academic information through a user-friendly interface. It also provides administrative features for university staff to efficiently handle enrollment tasks and maintain student records.
                </p>
              </div>

              <div className="rounded-2xl border border-blue-400/40 bg-[#0a0118]/60 p-6">
                <h4 className="text-lg font-semibold text-white mb-2">Objective</h4>
                <ul className="mt-3 grid gap-2 text-gray-100 text-[15px] sm:text-base list-disc list-inside marker:text-blue-300">
                  <li>Design a system that simplifies course registration and schedule management for students.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-blue-400/40 bg-[#0a0118]/60 p-6">
                <h4 className="text-lg font-semibold text-white mb-2">Design Approach</h4>
                <ul className="mt-3 grid gap-2 text-gray-100 text-[15px] sm:text-base list-disc list-inside marker:text-blue-300">
                  
                </ul>
                <div className="mt-5 border-t border-blue-400/40 pt-4">
                  <h5 className="text-sm font-semibold text-blue-200 uppercase tracking-wider">Techstack Used</h5>
                  <p className="text-gray-100 text-[15px] sm:text-base mt-2">Java</p>
                </div>
              </div>

              <div className="relative rounded-2xl border border-blue-400/40 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-6">
                <div className="mb-4">
                  <a
                    href="https://github.com/OmeshFernando/UniversityEnrollmentSystem"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 font-semibold"
                    style={{ textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '4px' }}
                  >
                    <FileText size={18} />
                    View Project on GitHub
                  </a>
                </div>
                {/* <h4 className="text-lg font-semibold text-white mb-2">Mood Board</h4>
                <div className="overflow-hidden rounded-xl border border-blue-400/40">
                  <img
                    src={`${assetBase}images/nextgen.wireframe.png`}
                    alt="Next Gen mood board"
                    className="w-full h-auto block"
                  />
                </div> */}
                {/* <div className="mt-8 space-y-6">
                  {['images/Hero%20section.png', 'images/Body%20section.png', 'images/Footer%20section.png'].map((src, index) => (
                    <div
                      key={src}
                      className="overflow-hidden rounded-xl border border-blue-400/40 bg-[#0a0118]/70"
                    >
                      <img
                        src={`${assetBase}${src}`}
                        alt={`Next Gen section ${index + 1}`}
                        className="w-full h-auto block"
                      />
                    </div>
                  ))}
                </div> */}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



