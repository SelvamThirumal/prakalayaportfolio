 

import { motion } from "framer-motion";
import { FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";

const experiences = [
  {
    company: "Vinsup Infotech",
    role: "Data Analyst",
    location: "Chennai, India",
    color: "from-blue-500 to-cyan-500",
    points: [
      "Executed comprehensive data mining operations and exploratory data analysis (EDA) on transactional datasets.",
      "Architected automated ETL pipelines for reporting environments, reducing stakeholder reporting timelines by 25%.",
      "Optimized SQL queries and indexing strategies, improving report generation performance by 20%.",
      "Analyzed operational metrics and identified process anomalies, helping reduce reporting discrepancies by 18%.",
    ],
  },
  {
    company: "Ron Skill",
    role: "Data Analyst Intern",
    location: "Coimbatore (Remote)",
    color: "from-purple-500 to-pink-500",
    points: [
      "Automated data cleaning workflows across Excel and SQL environments, reducing manual processing effort by 30%.",
      "Developed Power BI dashboards tracking 10+ business KPIs, improving decision-making efficiency by 40%.",
      "Created complex SQL queries for financial and operational reporting requirements.",
      "Used Python (Pandas) to clean, transform, and prepare datasets for business intelligence reporting.",
    ],
  },
  {
    company: "Vinsup Infotech",
    role: "Data Analyst Intern",
    location: "Chennai (Remote)",
    color: "from-green-500 to-emerald-500",
    points: [
      "Performed exploratory data analysis on transactional datasets to identify trends and patterns.",
      "Designed and implemented automated ETL workflows for recurring business reports.",
      "Enhanced SQL query performance and streamlined reporting processes.",
      "Generated analytical reports and insights to support strategic business decisions.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-24 bg-slate-950 text-white overflow-hidden"
    >
      {/* Rotating Background Ring */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
        absolute
        w-[700px]
        h-[700px]
        border
        border-blue-500/10
        rounded-full
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        "
      />

      {/* Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
        absolute
        top-20
        left-10
        w-72
        h-72
        bg-blue-500
        blur-[120px]
        rounded-full
        "
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="
        absolute
        bottom-20
        right-10
        w-72
        h-72
        bg-purple-500
        blur-[120px]
        rounded-full
        "
      />

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
          className="text-center text-5xl font-black mb-20"
        >
          Work
          <span className="text-blue-500">
            {" "}Experience
          </span>
        </motion.h2>

        <div className="relative">

          {/* Timeline */}

          <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
              }}
              className={`
                relative mb-16
                md:w-1/2
                ${
                  index % 2 === 0
                    ? "md:pr-10"
                    : "md:ml-auto md:pl-10"
                }
              `}
            >
              {/* Timeline Dot */}

              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="
                hidden md:block
                absolute top-10
                w-6 h-6
                rounded-full
                bg-blue-500
                border-4 border-slate-950
                left-full -translate-x-1/2
                "
              />

              {/* Card */}

              <motion.div
                whileHover={{
                  scale: 1.04,
                  y: -12,
                  boxShadow:
                    "0px 20px 40px rgba(59,130,246,0.3)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
                className="
                bg-slate-900/70
                backdrop-blur-xl
                border border-slate-800
                rounded-3xl
                p-8
                shadow-xl
                cursor-pointer
                "
              >
                {/* Header */}

                <div className="flex items-center gap-4 mb-5">

                  <motion.div
                    whileHover={{
                      rotate: 10,
                      scale: 1.15,
                    }}
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className={`
                    w-14 h-14
                    rounded-2xl
                    bg-gradient-to-r
                    ${exp.color}
                    flex items-center
                    justify-center
                    text-2xl
                    `}
                  >
                    <FaBriefcase />
                  </motion.div>

                  <div>
                    <h3 className="text-2xl font-bold">
                      {exp.role}
                    </h3>

                    <p className="text-blue-400">
                      {exp.company}
                    </p>
                  </div>

                </div>

                {/* Location */}

                <div className="flex items-center gap-2 text-slate-400 mb-6">
                  <FaMapMarkerAlt />
                  <span>{exp.location}</span>
                </div>

                {/* Responsibilities */}

                <ul className="space-y-3">

                  {exp.points.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: i * 0.1,
                      }}
                      className="
                      text-slate-300
                      flex gap-3
                      "
                    >
                      <span className="text-blue-500">
                        ▹
                      </span>

                      <span>
                        {point}
                      </span>
                    </motion.li>
                  ))}

                </ul>

              </motion.div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;
 
