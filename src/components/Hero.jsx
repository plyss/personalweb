import { motion } from "framer-motion";
import { ArrowDown, Mail, CheckCircle2 } from "lucide-react";

const techStack = [
  "Playwright",
  "WebdriverIO",
  "Postman",
  "SQL",
  "Jira",
  "k6",
  "Bash",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 flex items-center overflow-hidden"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-pass-500/5 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1.5s" }} />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="section-container w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Status badge
            <motion.div variants={itemVariants} className="mb-6">
              <span className="pass-badge">
                <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
                Available for opportunities
              </span>
            </motion.div> */}

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
            >
              Software{" "}
              <span className="text-gradient">Quality Assurance</span>{" "}
              Engineer
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl lg:max-w-none"
            >
              Focused on functional reliability, API validation, and test
              automation. Experienced across the full testing lifecycle — from
              BR/SRS requirements analysis to manual execution, automation
              frameworks, and database integrity verification.
            </motion.p>

            {/* Tech stack chips */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 justify-center lg:justify-start mb-10"
            >
              {techStack.map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => scrollTo("#projects")}
                className="btn-primary"
                id="cta-view-projects"
              >
                View QA Projects
                <ArrowDown className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollTo("#contact")}
                className="btn-secondary"
                id="cta-contact"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </button>
            </motion.div>
          </motion.div>

          {/* Profile photo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-3 bg-gradient-to-br from-accent-500/20 to-pass-500/20 rounded-2xl blur-xl" />
              <img
                src="/avatar.jpg"
                alt="Faisal — SQA Engineer"
                className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-cover rounded-2xl ring-1 ring-slate-200 shadow-xl"
              />
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 glass-card px-4 py-2 shadow-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-pass-500 animate-pulse" />
                  <span className="text-xs font-medium text-slate-700">
                    QA Engineer
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
