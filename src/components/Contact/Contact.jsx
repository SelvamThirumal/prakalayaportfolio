 

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-24 bg-slate-950 text-white overflow-hidden"
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

      {/* Animated Background Glow */}

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
          className="text-center text-5xl font-black mb-16"
        >
          Get In
          <span className="text-blue-500"> Touch</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}

          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
          >
            <h3 className="text-4xl font-bold mb-6">
              Let's Work Together 🚀
            </h3>

            <p className="text-slate-400 leading-8 mb-10">
              I'm always interested in discussing
              Data Analytics, Power BI Dashboards,
              SQL Reporting, Python Projects and
              Business Intelligence solutions.
            </p>

            {/* Contact Cards */}

            <div className="space-y-5">

              {/* Email */}

              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  borderColor: "#3B82F6",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
                className="
                bg-slate-900/60
                backdrop-blur-xl
                border
                border-slate-800
                rounded-2xl
                p-5
                flex
                items-center
                gap-4
                "
              >
                <motion.div
                  whileHover={{
                    rotate: 10,
                    scale: 1.15,
                  }}
                  className="
                  w-14
                  h-14
                  rounded-xl
                  bg-blue-500
                  flex
                  items-center
                  justify-center
                  "
                >
                  <FaEnvelope />
                </motion.div>

                <div>
                  <h4 className="font-semibold">
                    Email
                  </h4>
                  <p className="text-slate-400">
                    prakalyagayathri77@gmail.com
                  </p>
                </div>
              </motion.div>

              {/* Phone */}

              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  borderColor: "#22C55E",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
                className="
                bg-slate-900/60
                backdrop-blur-xl
                border
                border-slate-800
                rounded-2xl
                p-5
                flex
                items-center
                gap-4
                "
              >
                <motion.div
                  whileHover={{
                    rotate: 10,
                    scale: 1.15,
                  }}
                  className="
                  w-14
                  h-14
                  rounded-xl
                  bg-green-500
                  flex
                  items-center
                  justify-center
                  "
                >
                  <FaPhone />
                </motion.div>

                <div>
                  <h4 className="font-semibold">
                    Phone
                  </h4>
                  <p className="text-slate-400">
                    +91 89401 58941
                  </p>
                </div>
              </motion.div>

              {/* Location */}

              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  borderColor: "#A855F7",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
                className="
                bg-slate-900/60
                backdrop-blur-xl
                border
                border-slate-800
                rounded-2xl
                p-5
                flex
                items-center
                gap-4
                "
              >
                <motion.div
                  whileHover={{
                    rotate: 10,
                    scale: 1.15,
                  }}
                  className="
                  w-14
                  h-14
                  rounded-xl
                  bg-purple-500
                  flex
                  items-center
                  justify-center
                  "
                >
                  <FaMapMarkerAlt />
                </motion.div>

                <div>
                  <h4 className="font-semibold">
                    Location
                  </h4>
                  <p className="text-slate-400">
                    Coimbatore, Tamil Nadu
                  </p>
                </div>
              </motion.div>

            </div>

            {/* Social Icons */}

            <div className="flex gap-5 mt-10">

              <a
                href="https://github.com/prakalya10"
                target="_blank"
                rel="noreferrer"
                className="
                w-14
                h-14
                rounded-full
                bg-slate-900
                border
                border-slate-800
                flex
                items-center
                justify-center
                transition-all
                duration-300
                hover:-translate-y-2
                hover:scale-110
                hover:bg-blue-600
                "
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/prakalya-p-5924a436b"
                target="_blank"
                rel="noreferrer"
                className="
                w-14
                h-14
                rounded-full
                bg-slate-900
                border
                border-slate-800
                flex
                items-center
                justify-center
                transition-all
                duration-300
                hover:-translate-y-2
                hover:scale-110
                hover:bg-blue-600
                "
              >
                <FaLinkedin size={22} />
              </a>

            </div>

          </motion.div>

          {/* Right Side Form */}

          <motion.form
            initial={{
              opacity: 0,
              x: 100,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="
            bg-slate-900/60
            backdrop-blur-xl
            border
            border-slate-800
            p-8
            rounded-3xl
            "
          >
            <div className="mb-5">
              <input
                type="text"
                placeholder="Your Name"
                className="
                w-full
                p-4
                rounded-xl
                bg-slate-800
                border
                border-slate-700
                outline-none
                transition-all
                duration-300
                focus:border-blue-500
                focus:shadow-[0_0_25px_rgba(59,130,246,0.3)]
                "
              />
            </div>

            <div className="mb-5">
              <input
                type="email"
                placeholder="Your Email"
                className="
                w-full
                p-4
                rounded-xl
                bg-slate-800
                border
                border-slate-700
                outline-none
                transition-all
                duration-300
                focus:border-blue-500
                focus:shadow-[0_0_25px_rgba(59,130,246,0.3)]
                "
              />
            </div>

            <div className="mb-5">
              <textarea
                rows="6"
                placeholder="Write your message..."
                className="
                w-full
                p-4
                rounded-xl
                bg-slate-800
                border
                border-slate-700
                outline-none
                resize-none
                transition-all
                duration-300
                focus:border-blue-500
                focus:shadow-[0_0_25px_rgba(59,130,246,0.3)]
                "
              />
            </div>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0px 0px 30px rgba(59,130,246,0.5)",
              }}
              whileTap={{
                scale: 0.95,
              }}
              type="submit"
              className="
              w-full
              bg-gradient-to-r
              from-blue-600
              to-purple-600
              py-4
              rounded-xl
              font-semibold
              flex
              items-center
              justify-center
              gap-3
              "
            >
              <FaPaperPlane />
              Send Message
            </motion.button>

          </motion.form>

        </div>

      </div>
    </section>
  );
};

export default Contact;
 
