// src/components/Skills/Skills.jsx

import { motion } from "framer-motion";
import {
  FaDatabase,
  FaChartBar,
  FaPython,
  FaFileExcel,
  FaRobot,
  FaChartLine,
} from "react-icons/fa";

const skillsData = [
  {
    title: "SQL",
    icon: <FaDatabase />,
    color: "text-blue-500",
    percentage: "95%",
  },
  {
    title: "Power BI",
    icon: <FaChartBar />,
    color: "text-yellow-500",
    percentage: "90%",
  },
  {
    title: "Python",
    icon: <FaPython />,
    color: "text-green-500",
    percentage: "85%",
  },
  {
    title: "Excel",
    icon: <FaFileExcel />,
    color: "text-emerald-500",
    percentage: "95%",
  },
  {
    title: "Automation",
    icon: <FaRobot />,
    color: "text-pink-500",
    percentage: "80%",
  },
  {
    title: "Analytics",
    icon: <FaChartLine />,
    color: "text-purple-500",
    percentage: "92%",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-24 bg-slate-950 text-white overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 opacity-10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 opacity-10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-5xl font-black mb-16"
        >
          My
          <span className="text-blue-500"> Skills</span>
        </motion.h2>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
              bg-slate-900/60
              backdrop-blur-xl
              border
              border-slate-700
              p-8
              rounded-3xl
              hover:border-blue-500
              "
            >
              <div
                className={`text-5xl ${skill.color} mb-6`}
              >
                {skill.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {skill.title}
              </h3>

              <div className="flex justify-between mb-2">
                <span className="text-slate-400">
                  Proficiency
                </span>

                <span className="text-blue-500">
                  {skill.percentage}
                </span>
              </div>

              {/* Progress Bar */}

              <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: skill.percentage,
                  }}
                  transition={{
                    duration: 1.5,
                  }}
                  className="
                  h-full
                  bg-gradient-to-r
                  from-blue-500
                  via-purple-500
                  to-pink-500
                  "
                />

              </div>
            </motion.div>
          ))}

        </div>

        {/* Bottom Stats */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">

          <div className="bg-slate-900 p-6 rounded-2xl text-center">
            <h3 className="text-4xl font-bold text-blue-500">
              6+
            </h3>
            <p className="text-slate-400">
              Technologies
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl text-center">
            <h3 className="text-4xl font-bold text-purple-500">
              3+
            </h3>
            <p className="text-slate-400">
              Projects
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl text-center">
            <h3 className="text-4xl font-bold text-pink-500">
              2
            </h3>
            <p className="text-slate-400">
              Internships
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl text-center">
            <h3 className="text-4xl font-bold text-green-500">
              5+
            </h3>
            <p className="text-slate-400">
              Certifications
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;