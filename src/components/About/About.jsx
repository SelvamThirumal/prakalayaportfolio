// src/components/About/About.jsx

import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 bg-slate-900 text-white overflow-hidden"
    >
      {/* Animated Background Circle */}

      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
        absolute
        w-[600px]
        h-[600px]
        border
        border-blue-500/10
        rounded-full
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        "
      />

      {/* Background Blur */}

      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 opacity-10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 opacity-10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="text-center text-5xl font-black mb-16"
        >
          About
          <span className="text-blue-500"> Me</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE SECTION */}

          <motion.div
            initial={{
              opacity: 0,
              x: -100,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
            className="flex justify-center"
          >
            <div className="relative">

              {/* Animated Glow */}

              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="
                absolute
                -inset-4
                bg-gradient-to-r
                from-blue-500
                via-purple-500
                to-pink-500
                blur-3xl
                rounded-3xl
                "
              />

              <motion.img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                alt="Data Analyst"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 2, 0, -2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                relative
                w-full
                max-w-md
                rounded-3xl
                shadow-2xl
                border
                border-slate-700
                "
              />
            </div>
          </motion.div>

          {/* CONTENT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
          >
            <span className="text-blue-500 uppercase tracking-widest">
              Data Analyst
            </span>

            <h3 className="text-4xl font-bold mt-4 leading-tight">
              Transforming Data Into
              <span className="text-blue-500">
                {" "}Business Insights
              </span>
            </h3>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.3,
                duration: 0.8,
              }}
              className="text-slate-400 mt-6 leading-8"
            >
              Detail-oriented Data Analyst with
              expertise in SQL, Power BI, Excel,
              Python and Data Visualization.
              Passionate about converting raw data
              into meaningful dashboards and
              actionable insights.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5,
                duration: 0.8,
              }}
              className="text-slate-400 mt-6 leading-8"
            >
              Experienced in KPI tracking,
              reporting automation, ETL workflows,
              business intelligence and dashboard
              development to support data-driven
              decision making.
            </motion.p>

            {/* Stats */}

            <div className="grid grid-cols-2 gap-5 mt-10">

              {/* Card 1 */}

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileHover={{
                  scale: 1.08,
                  y: -10,
                  boxShadow:
                    "0px 20px 40px rgba(59,130,246,0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="
                bg-slate-800/60
                backdrop-blur-lg
                p-6
                rounded-2xl
                border
                border-slate-700
                cursor-pointer
                "
              >
                <h4 className="text-4xl font-bold text-blue-500">
                  2+
                </h4>

                <p className="text-slate-400">
                  Internships
                </p>
              </motion.div>

              {/* Card 2 */}

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                }}
                whileHover={{
                  scale: 1.08,
                  y: -10,
                  boxShadow:
                    "0px 20px 40px rgba(168,85,247,0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="
                bg-slate-800/60
                backdrop-blur-lg
                p-6
                rounded-2xl
                border
                border-slate-700
                cursor-pointer
                "
              >
                <h4 className="text-4xl font-bold text-purple-500">
                  3+
                </h4>

                <p className="text-slate-400">
                  Projects
                </p>
              </motion.div>

              {/* Card 3 */}

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                }}
                whileHover={{
                  scale: 1.08,
                  y: -10,
                  boxShadow:
                    "0px 20px 40px rgba(236,72,153,0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="
                bg-slate-800/60
                backdrop-blur-lg
                p-6
                rounded-2xl
                border
                border-slate-700
                cursor-pointer
                "
              >
                <h4 className="text-4xl font-bold text-pink-500">
                  SQL
                </h4>

                <p className="text-slate-400">
                  Advanced Queries
                </p>
              </motion.div>

              {/* Card 4 */}

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                }}
                whileHover={{
                  scale: 1.08,
                  y: -10,
                  boxShadow:
                    "0px 20px 40px rgba(34,197,94,0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="
                bg-slate-800/60
                backdrop-blur-lg
                p-6
                rounded-2xl
                border
                border-slate-700
                cursor-pointer
                "
              >
                <h4 className="text-4xl font-bold text-green-500">
                  Power BI
                </h4>

                <p className="text-slate-400">
                  Dashboard Expert
                </p>
              </motion.div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;