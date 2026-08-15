import { motion } from "framer-motion";
import { ExternalLink, CheckCircle, FlaskConical } from "lucide-react";
import { projects } from "../data/projects";

const categoryIcons = {
  "Performance Testing": "🔍",
  "Test Automation": "⚙️",
  "Performance & Database Testing": "📊",
};

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
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
            <FlaskConical className="w-3.5 h-3.5" />
            QA Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Testing Case Studies
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Quality deliverables and automation frameworks showcasing real-world
            testing expertise across conversational AI, enterprise web, and
            performance testing.
          </p>
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card h-full p-6 flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/5 dark:hover:shadow-accent-500/10 hover:-translate-y-1">
                {/* Category & Title */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">
                      {categoryIcons[project.category] || "🧪"}
                    </span>
                    <span className="text-xs font-medium uppercase tracking-wider text-accent-600 dark:text-accent-400">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="flex-1 mb-5">
                  <ul className="space-y-2">
                    {project.highlights.slice(0, 4).map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-pass-500 mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-badge text-[11px]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Artifact link */}
                <div className="pt-4 border-t border-slate-200/50 dark:border-slate-700/50">
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 transition-colors"
                  >
                    {project.artifact}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
