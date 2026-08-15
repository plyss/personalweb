export const projects = [
  {
    id: 1,
    title: "Enterprise Web & SAP Automation Framework",
    category: "Test Automation",
    description:
      "Designed and maintained a scalable UI automation test framework using Playwright and WebdriverIO to improve regression coverage across enterprise web and SAP applications.",
    highlights: [
      "Built Page Object Model (POM) architecture",
      "Playwright & WebdriverIO automation scripts",
      "UFT One integration for SAP testing",
      "Regression test coverage improvement",
      "SQL-based test data validation",
    ],
    technologies: ["Playwright", "WebdriverIO", "UFT One", "SQL"],
    artifact: "GitHub Repo / Code Sample",
    link: "https://github.com/plyss/automation",
  },
  {
    id: 2,
    title: "Database & API Performance Suite",
    category: "Performance & Database Testing",
    description:
      "Database validation using complex SQL queries and query tuning, combined with API stress testing using k6 and Postman for performance benchmarking.",
    highlights: [
      "Complex SQL query validation & optimization",
      "PostgreSQL database integrity testing",
      "k6 load & stress testing scripts",
      "Postman collection-based API testing",
      "Bash automation for test execution",
    ],
    technologies: ["SQL", "PostgreSQL", "k6", "Postman", "Bash"],
    artifact: "Test Script Snippets / Benchmarks",
    link: "#",
  },
  {
    id: 3,
    title: "UI Performance Audit & Web Vitals Automation",
    category: "Performance Testing",
    description:
      "Automated end-to-end frontend performance auditing by integrating Lighthouse into Playwright test flows to track Core Web Vitals and detect visual degradation during continuous integration.",
    highlights: [
      "Automated Lighthouse audits inside Playwright browser contexts",
      "Continuous Core Web Vitals profiling (LCP, CLS, INP)",
      "Automated HTML performance report generation",
      "Performance budget enforcement in CI pipelines",
    ],
    technologies: ["Playwright", "Lighthouse", "JavaScript", "CI/CD"],
    artifact: "Audit Suite & Sample Reports",
    link: "#",
  },
];