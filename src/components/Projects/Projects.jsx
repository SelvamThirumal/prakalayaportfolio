// src/components/Projects/Projects.jsx

import { motion } from "framer-motion";
import { FaGithub, FaChartLine } from "react-icons/fa";

const projects = [
   
  {
    title: "Enterprise Sales Performance & Margin Analyzer",
    tools: ["Power BI", "Power Query", "Advanced Excel"],
    description:
      "Processed a complex multi-region retail sales dataset using Power Query to clean historical tracking anomalies and isolate underlying revenue channels. Built an interactive Power BI analytics suite featuring granular DAX calculations for running profit margins and regional performance tracking.",
    github: "https://github.com/prakalya10",
  },

  {
    title: "Algorithmic Customer Segmentation Suite",
    tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    description:
      "Conducted behavioral data science modeling on historical user transactions using Python to discover longitudinal consumer purchasing habits. Built statistical aggregation workflows using NumPy and Pandas to segment consumers by expenditure frequency.",
    github: "https://github.com/prakalya10",
  },

  {
    title: "High-Volume Retail Database Optimization Engine",
    tools: ["SQL", "Joins", "CTE", "Window Functions"],
    description:
      "Managed a large-scale retail database deployment using advanced SQL techniques including multi-table Joins, CTEs, and Window Functions. Implemented normalization strategies and generated business performance reports.",
    github: "https://github.com/prakalya10",
  },

  {
    title: "Retail Revenue Analytics Dashboard",
    tools: ["Power BI", "DAX", "Data Visualization"],
    description:
      "Created dynamic dashboards for tracking revenue channels, profit margins, and business growth trends. Delivered actionable insights through interactive visual reports.",
    github: "https://github.com/prakalya10",
  },

  {
    title: "Consumer Purchase Pattern Analysis",
    tools: ["Python", "Pandas", "Analytics"],
    description:
      "Analyzed customer purchase behavior and spending trends using Python. Built visual reports and segmentation models to support business decisions.",
    github: "https://github.com/prakalya10",
  },

  {
    title: "Retail Performance Reporting System",
    tools: ["SQL", "Database Design", "Reporting"],
    description:
      "Generated detailed cross-sectional business performance reports to identify low-performing product categories and improve revenue retention strategies.",
    github: "https://github.com/prakalya10",
  },
];
 

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-24 bg-slate-950 text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center text-5xl font-black mb-16"
        >
          Featured
          <span className="text-blue-500"> Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{ duration: 0.4 }}
              className="
                bg-slate-900/70
                backdrop-blur-xl
                border
                border-slate-800
                rounded-3xl
                p-6
                hover:border-blue-500
                duration-300
              "
            >
              <div className="flex items-center justify-between mb-6">
                <div
                  className="
                    w-14 h-14
                    rounded-2xl
                    bg-gradient-to-r
                    from-blue-500
                    to-purple-600
                    flex items-center
                    justify-center
                    text-2xl
                  "
                >
                  <FaChartLine />
                </div>

                <span className="text-xs text-slate-400">
                  Data Analytics Project
                </span>
              </div>

              <h3 className="text-xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-slate-400 leading-7 mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="
                      px-3 py-1
                      rounded-full
                      bg-blue-500/10
                      text-blue-400
                      text-sm
                    "
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-full
                  flex items-center
                  justify-center
                  gap-2
                  bg-gradient-to-r
                  from-blue-600
                  to-purple-600
                  py-3
                  rounded-xl
                  hover:opacity-90
                  transition
                "
              >
                <FaGithub />
                View Repository
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;