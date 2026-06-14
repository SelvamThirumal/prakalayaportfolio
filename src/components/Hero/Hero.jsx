// src/components/Hero/Hero.jsx

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaEnvelope,
  FaCode,
  FaDatabase,
  FaChartLine,
} from "react-icons/fa";
import resume from "../../assets/Resume.pdf";
import profile from "../../assets/images/img.png"

// Custom typing animation component (no external dependencies)
const TypingAnimation = ({ texts, className }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentTextIndex((currentTextIndex + 1) % texts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts]);

  return (
    <h2 className={className}>
      {currentText}
      <span className="animate-pulse text-blue-500">|</span>
    </h2>
  );
};

// Floating particles component
const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            opacity: 0.3,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
};

// Animated gradient orb
const AnimatedOrb = ({ color, size, position, delay }) => {
  return (
    <motion.div
      className={`absolute rounded-full blur-[140px] opacity-20 ${color}`}
      style={{
        width: size,
        height: size,
        left: position.x,
        top: position.y,
      }}
      animate={{
        scale: [1, 1.2, 1],
        x: [0, 30, -30, 0],
        y: [0, -20, 20, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
    />
  );
};

// Stat card component with animation
const StatCard = ({ number, label, color, delay }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(number);
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, number]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, scale: 1.05 }}
      className="bg-gradient-to-br from-slate-900/80 to-slate-900/50 backdrop-blur-sm border border-slate-800 p-5 rounded-2xl text-center hover:border-blue-500 transition-all duration-300 group"
    >
      <motion.h3
        className={`text-4xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}
        animate={{ scale: isInView ? [0.5, 1] : 1 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
      >
        {count}+
      </motion.h3>
      <p className="text-slate-400 text-sm mt-2 group-hover:text-slate-300 transition-colors">
        {label}
      </p>
    </motion.div>
  );
};

// Skill tag component
const SkillTag = ({ skill, index }) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.1, y: -2 }}
      className="
        px-4 py-2
        rounded-full
        bg-gradient-to-r
        from-blue-500/10
        to-purple-500/10
        text-blue-400
        text-sm
        font-medium
        border
        border-blue-500/20
        hover:border-blue-500
        transition-all
        cursor-default
        backdrop-blur-sm
      "
    >
      {skill}
    </motion.span>
  );
};

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const skills = ["SQL", "Power BI", "Python", "Excel", "Tableau", "Data Visualization"];
  const typingTexts = ["SQL Expert", "Power BI Developer", "Python Analyst", "Excel Master"];

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 text-white overflow-hidden flex items-center"
    >
      {/* Animated Background Elements */}
      <AnimatedOrb 
        color="bg-blue-500" 
        size="300px" 
        position={{ x: "10%", y: "20%" }}
        delay={0}
      />
      <AnimatedOrb 
        color="bg-purple-500" 
        size="350px" 
        position={{ x: "80%", y: "60%" }}
        delay={2}
      />
      <AnimatedOrb 
        color="bg-pink-500" 
        size="250px" 
        position={{ x: "30%", y: "80%" }}
        delay={4}
      />
      <AnimatedOrb 
        color="bg-cyan-500" 
        size="280px" 
        position={{ x: "70%", y: "10%" }}
        delay={1}
      />

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={isLoaded ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 mb-6 backdrop-blur-sm"
          >
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              📊
            </motion.span>
            <span className="text-blue-400 font-semibold">Data Analyst</span>
          </motion.div>

          {/* Name with gradient animation */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-8xl font-black leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
              Prakalya P
            </span>
          </motion.h1>

          {/* Animated role text - Custom typing animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-6"
          >
            <TypingAnimation 
              texts={typingTexts}
              className="text-2xl md:text-3xl text-slate-300"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
            className="text-slate-400 text-lg leading-8 mt-6 max-w-xl"
          >
            Passionate Data Analyst with expertise in
            SQL, Power BI, Python and Excel.
            Transforming raw data into actionable
            business insights through dashboards,
            reporting automation and interactive
            visualizations.
          </motion.p>

          {/* Skills Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-3 mt-6"
          >
            {skills.map((skill, index) => (
              <SkillTag key={skill} skill={skill} index={index} />
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.1 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <motion.a
              href={resume}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-blue-600/30 relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <FaDownload className="relative z-10 group-hover:animate-bounce" />
              <span className="relative z-10 font-semibold">Download Resume</span>
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-6 py-4 rounded-xl border border-slate-700 hover:border-blue-500 hover:bg-slate-900/50 transition-all duration-300 group"
            >
              <span>View Projects</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ delay: 1.3 }}
            className="flex gap-5 mt-10"
          >
            {[
              { icon: FaGithub, href: "https://github.com/prakalya10", label: "GitHub" },
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/prakalya-p-5924a436b", label: "LinkedIn" },
              { icon: FaEnvelope, href: "mailto:prakalya@example.com", label: "Email" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group"
              >
                <social.icon 
                  size={22} 
                  className="group-hover:text-blue-400 transition-colors" 
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-12">
            <StatCard number="3" label="Projects" color="from-blue-500 to-cyan-500" delay={0.2} />
            <StatCard number="2" label="Internships" color="from-purple-500 to-pink-500" delay={0.3} />
            <StatCard number="5" label="Certifications" color="from-pink-500 to-orange-500" delay={0.4} />
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2, type: "spring" }}
          className="flex justify-center relative"
        >
          <div className="relative group">
            {/* Animated Rings */}
            <motion.div
              className="absolute -inset-8 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-40 blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Rotating Border Ring 1 */}
            <motion.div
              className="absolute -inset-4 rounded-full border-4 border-transparent"
              style={{
                background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6) border-box",
                WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />

            {/* Rotating Border Ring 2 */}
            <motion.div
              className="absolute -inset-8 rounded-full border border-dashed border-blue-500/50"
              animate={{ rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />

            {/* Profile Image Container */}
            <div className="relative">
              {/* Floating particles around profile */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-500 rounded-full"
                  style={{
                    left: "50%",
                    top: "50%",
                  }}
                  animate={{
                    x: [0, Math.cos(i * 45 * Math.PI / 180) * 120],
                    y: [0, Math.sin(i * 45 * Math.PI / 180) * 120],
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut",
                  }}
                />
              ))}

              <motion.img
  src={profile}
  alt="Prakalya P - Data Analyst"
  animate={{
    y: [0, -6, 0],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  whileHover={{ scale: 1.03 }}
  className="
    relative
    w-[400px]
    h-[350px]
    md:w-[400px]
    md:h-[400px]
    object-cover
    rounded-full
    border-4
    border-blue-500
    shadow-2xl
    cursor-pointer
  "
  style={{
    boxShadow: "0 0 40px rgba(59,130,246,0.4)",
  }}
/>

              {/* Tech stack icons floating around */}
              <motion.div
                className="absolute -top-8 -right-8 bg-slate-900 p-3 rounded-full border border-blue-500"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <FaDatabase className="text-blue-500 text-xl" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-8 -left-8 bg-slate-900 p-3 rounded-full border border-purple-500"
                animate={{ rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <FaChartLine className="text-purple-500 text-xl" />
              </motion.div>
              
              <motion.div
                className="absolute top-1/2 -right-12 bg-slate-900 p-3 rounded-full border border-pink-500"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaCode className="text-pink-500 text-xl" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-blue-500 rounded-full mt-2"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Add custom CSS for gradient animation */}
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;