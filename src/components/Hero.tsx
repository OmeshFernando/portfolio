import { ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './ui/button';

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    window.location.href = '/Omesh-Fernando.pdf';
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="inline-block px-2 text-white drop-shadow-[0_0_20px_rgba(147,197,253,0.75)]"
              >
                Omesh Fernando
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl sm:text-2xl text-gray-100"
            >
              Computer Science Undergraduate 
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-3 justify-center items-center max-w-4xl mx-auto text-center"
            >
              <span className="text-xl sm:text-2xl font-bold text-blue-100 drop-shadow-[0_0_12px_rgba(125,211,252,0.55)]">
                Build
              </span>
              <span className="text-blue-300">|</span>
              <span className="text-xl sm:text-2xl font-bold text-cyan-100 drop-shadow-[0_0_12px_rgba(125,211,252,0.55)]">
                Design
              </span>
              <span className="text-blue-300">|</span>
              <span className="text-xl sm:text-2xl font-bold text-blue-100 drop-shadow-[0_0_12px_rgba(125,211,252,0.55)]">
                Analyze
              </span>
              <span className="text-blue-300">|</span>
              <span className="text-xl sm:text-2xl font-bold text-cyan-100 drop-shadow-[0_0_12px_rgba(125,211,252,0.55)]">
                Deploy
              </span>
              <span className="text-blue-300">|</span>
              <span className="text-xl sm:text-2xl font-bold text-blue-100 drop-shadow-[0_0_12px_rgba(125,211,252,0.55)]">
                Improve
              </span>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed"
          >
            A second-year Computer Science student building modern software products
            with strong focus on engineering quality and user-centered design.
          </motion.p>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {['Web Development', 'Full-Stack Development', 'UI/UX Design', 'Critical Thinking', 'Problem Solving'].map((skill) => (
              <span
                key={skill}
                className="px-5 py-2 rounded-full border-2 border-blue-300 bg-transparent text-base font-semibold text-white shadow-[0_0_10px_rgba(59,130,246,0.35)] hover:border-cyan-200 hover:shadow-[0_0_14px_rgba(34,211,238,0.45)] transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="relative bg-gradient-to-r from-blue-500 to-white hover:from-blue-400 hover:to-blue-100 text-blue-950 px-8 py-6 text-lg border-0 overflow-hidden shadow-[0_0_22px_rgba(59,130,246,0.45)] group"
              >
                <span className="relative z-10">View Projects</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-100"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                onClick={downloadResume}
                className="px-8 py-6 text-lg border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400"
              >
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{
              opacity: { delay: 1 },
              y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="pt-12"
          >
            <ArrowDown className="mx-auto text-blue-400" size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}







