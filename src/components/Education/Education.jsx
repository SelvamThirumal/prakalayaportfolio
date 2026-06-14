 

import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    degree: "M.Com CA",
    college: "Sakthi College of Arts and Science for Women",
    year: "2021 - 2023",
    percentage: "82%",
    location: "Oddanchatram",
    color: "from-blue-500 to-cyan-500",
  },
  {
    degree: "B.Com CA",
    college: "Sakthi College of Arts and Science for Women",
    year: "2019 - 2021",
    percentage: "78%",
    location: "Oddanchatram",
    color: "from-purple-500 to-pink-500",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-24 bg-slate-900 text-white overflow-hidden"
    >
      {/* Rotating Background Ring */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 50,
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

      <div className="max-w-6xl mx-auto px-6">

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
          My
          <span className="text-blue-500">
            {" "}Education
          </span>
        </motion.h2>

        <div className="relative">

          {/* Timeline */}

          <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"></div>

          {education.map((item, index) => (
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
                absolute
                top-10
                w-6
                h-6
                rounded-full
                bg-blue-500
                border-4
                border-slate-900
                left-full
                -translate-x-1/2
                "
              />

              {/* Card */}

              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -12,
                  boxShadow:
                    "0px 20px 40px rgba(59,130,246,0.3)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
                className="
                bg-slate-800/60
                backdrop-blur-xl
                border
                border-slate-700
                rounded-3xl
                p-8
                shadow-xl
                cursor-pointer
                "
              >
                {/* Icon */}

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
                  w-16 h-16
                  rounded-2xl
                  bg-gradient-to-r
                  ${item.color}
                  flex
                  items-center
                  justify-center
                  text-3xl
                  mb-6
                  `}
                >
                  <FaGraduationCap />
                </motion.div>

                <h3 className="text-3xl font-bold mb-3">
                  {item.degree}
                </h3>

                <p className="text-blue-400 text-lg mb-4">
                  {item.college}
                </p>

                <div className="flex flex-wrap gap-3">

                  <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400">
                    📅 {item.year}
                  </span>

                  <span className="px-4 py-2 rounded-full bg-green-500/10 text-green-400">
                    🎓 {item.percentage}
                  </span>

                  <span className="px-4 py-2 rounded-full bg-purple-500/10 text-purple-400">
                    📍 {item.location}
                  </span>

                </div>

              </motion.div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Education;
 
