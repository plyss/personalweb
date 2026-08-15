import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Award,
  MapPin,
  Calendar,
  ChevronRight,
  User,
  BookOpen,
  ExternalLink,
} from "lucide-react";
import { experience, education, publications } from "../data/experience";
import { certifications, skills } from "../data/certifications";

const skillCategoryColors = {
  "Test Automation": "accent",
  "API Testing": "pass",
  Database: "amber",
  "Tools & Processes": "slate",
  Other: "slate",
};

export default function About() {
  return (
    <section id="about" className="section-padding bg-slate-50/50 dark:bg-slate-900/30">
      <div className="section-container">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 accent-badge mb-4">
            <User className="w-3.5 h-3.5" />
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Background & Expertise
          </h2>
        </motion.div>

        {/* Professional Summary */}
        <motion.div
          className="max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="glass-card p-8">
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base sm:text-lg">
              I'm a QA Engineer with experience in both manual testing and test
              automation, with a strong focus on ensuring software quality,
              reliability, and a smooth user experience. I take a detail-oriented
              and analytical approach to testing, focusing on understanding how
              systems work, identifying potential risks and edge cases, and
              creating thorough test strategies that cover functional,
              integration, and performance aspects of the application.
            </p>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-8 text-center">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-5"
              >
                <h4 className="text-sm font-semibold text-accent-600 dark:text-accent-400 mb-3 uppercase tracking-wider">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((skill) => (
                    <span key={skill} className="tech-badge text-[11px]">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Work Experience */}
        <div className="mb-20">
          <motion.div
            className="flex items-center gap-3 mb-10 justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="p-2 rounded-xl bg-accent-50 dark:bg-accent-900/20">
              <Briefcase className="w-5 h-5 text-accent-600 dark:text-accent-400" />
            </div>
            <h3 className="text-xl font-semibold">Work Experience</h3>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {experience.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="glass-card p-6 sm:p-8 relative overflow-hidden group">
                  {/* Accent line */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-500 to-pass-500 rounded-l-2xl" />

                  {/* Header */}
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-1">{job.role}</h4>
                    <p className="text-accent-600 dark:text-accent-400 font-medium text-sm">
                      {job.company}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {job.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {job.location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                    {job.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-5">
                    {job.highlights.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-accent-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {job.technologies.map((tech) => (
                      <span key={tech} className="tech-badge text-[11px]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div>
          <motion.div
            className="flex items-center gap-3 mb-10 justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="p-2 rounded-xl bg-pass-50 dark:bg-pass-900/20">
              <GraduationCap className="w-5 h-5 text-pass-600 dark:text-pass-400" />
            </div>
            <h3 className="text-xl font-semibold">Education & Certifications</h3>
          </motion.div>

          {/* Education card */}
          <motion.div
            className="max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card p-6 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-accent-50 dark:bg-accent-900/20 flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-accent-600 dark:text-accent-400" />
              </div>
              <div>
                <h4 className="font-semibold">{education.degree}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {education.institution}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                  {education.period}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Publications card */}
          {publications && publications.map((pub, index) => (
            <motion.div
              key={pub.id}
              className="max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="glass-card p-6 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="p-3 rounded-xl bg-accent-50 dark:bg-accent-900/20 flex-shrink-0 self-start sm:self-center">
                  <BookOpen className="w-6 h-6 text-accent-600 dark:text-accent-400" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm leading-snug mb-1">{pub.title}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {pub.publisher} &middot; {pub.date}
                  </p>
                </div>
                <div className="flex-shrink-0 mt-3 sm:mt-0 self-start sm:self-center">
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-accent-50 text-accent-700 dark:bg-accent-900/30 dark:text-accent-300 hover:bg-accent-100 dark:hover:bg-accent-900/50 transition-colors"
                  >
                    View Publication
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Certifications grid */}
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="glass-card p-4 flex items-start gap-3 h-full hover:shadow-md hover:border-accent-200 dark:hover:border-accent-700/50 transition-all duration-200 group">
                    <div className="p-1.5 rounded-lg bg-pass-50 dark:bg-pass-900/20 flex-shrink-0 mt-0.5 group-hover:bg-accent-50 dark:group-hover:bg-accent-900/20 transition-colors">
                      <Award className="w-4 h-4 text-pass-600 dark:text-pass-400 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium leading-snug group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                        {cert.name}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        {cert.issuer}
                      </p>
                    </div>
                    <div className="flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-3.5 h-3.5 text-accent-500" />
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
