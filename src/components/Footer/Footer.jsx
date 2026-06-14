 

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden">

      {/* Rotating Ring */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 60,
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

      {/* Animated Glow */}

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
        top-0
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
        bottom-0
        right-10
        w-72
        h-72
        bg-purple-500
        blur-[120px]
        rounded-full
        "
      />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">

        {/* Top Section */}

        <div className="grid md:grid-cols-3 gap-12 pb-12 border-b border-slate-800">

          {/* Brand */}

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
            }}
          >
            <motion.h2
              whileHover={{
                scale: 1.05,
              }}
              className="text-4xl font-black"
            >
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Prakalya
              </span>
            </motion.h2>

            <p className="text-slate-400 mt-5 leading-8">
              Data Analyst passionate about
              SQL, Power BI, Python, Excel
              and Business Intelligence.
              Turning complex datasets into
              meaningful business insights.
            </p>
          </motion.div>

          {/* Quick Links */}

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
          >
            <h3 className="text-2xl font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-slate-400">

              {[
                "Home",
                "About",
                "Skills",
                "Experience",
                "Projects",
                "Contact",
              ].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{
                    x: 10,
                    color: "#3B82F6",
                  }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="duration-300"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}

            </ul>
          </motion.div>

          {/* Connect */}

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.4,
            }}
          >
            <h3 className="text-2xl font-bold mb-6">
              Connect
            </h3>

            <p className="text-slate-400 mb-6">
              Let's build something amazing together 🚀
            </p>

            <div className="flex gap-4">

              <motion.a
                whileHover={{
                  scale: 1.15,
                  y: -8,
                  rotate: 8,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                href="https://github.com/prakalya10"
                target="_blank"
                rel="noreferrer"
                className="
                w-12
                h-12
                rounded-full
                bg-slate-900
                border
                border-slate-700
                flex
                items-center
                justify-center
                hover:bg-blue-600
                transition
                "
              >
                <FaGithub />
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.15,
                  y: -8,
                  rotate: 8,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                href="https://www.linkedin.com/in/prakalya-p-5924a436b"
                target="_blank"
                rel="noreferrer"
                className="
                w-12
                h-12
                rounded-full
                bg-slate-900
                border
                border-slate-700
                flex
                items-center
                justify-center
                hover:bg-blue-600
                transition
                "
              >
                <FaLinkedin />
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.15,
                  y: -8,
                  rotate: 8,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                href="mailto:prakalyagayathri77@gmail.com"
                className="
                w-12
                h-12
                rounded-full
                bg-slate-900
                border
                border-slate-700
                flex
                items-center
                justify-center
                hover:bg-blue-600
                transition
                "
              >
                <FaEnvelope />
              </motion.a>

            </div>

          </motion.div>

        </div>

        {/* Bottom */}

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">

          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{ once: true }}
            className="text-slate-500 text-center"
          >
            © 2026 Prakalya Gayathri.
            All Rights Reserved.
          </motion.p>

          <motion.a
            whileHover={{
              y: -8,
              scale: 1.1,
              boxShadow:
                "0px 0px 25px rgba(59,130,246,0.5)",
            }}
            whileTap={{
              scale: 0.95,
            }}
            href="#home"
            className="
            mt-6
            md:mt-0
            w-14
            h-14
            rounded-full
            bg-gradient-to-r
            from-blue-600
            to-purple-600
            flex
            items-center
            justify-center
            "
          >
            <FaArrowUp />
          </motion.a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
 
