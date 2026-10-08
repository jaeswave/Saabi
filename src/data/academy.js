import {
  Code2,
  ShieldCheck,
  ClipboardList,
  BarChart3,
  Database,
  Brain,
} from "lucide-react";

export const tracks = [
  {
    icon: Code2,
    title: "Software Engineering",
    duration: "6 months",
    level: "Beginner to job-ready",
    learn: [
      "HTML, CSS, JavaScript and React",
      "Node.js, databases and APIs",
      "Git, deployment and real projects",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    duration: "4 months",
    level: "Beginner to junior analyst",
    learn: [
      "Networks, Linux and security basics",
      "Ethical hacking and Burp Suite",
      "OWASP Top 10 and incident response",
    ],
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    duration: "3 months",
    level: "Beginner friendly",
    learn: [
      "Agile and Scrum in practice",
      "Planning, risk and stakeholders",
      "Tools like Jira, Trello and Notion",
    ],
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    duration: "4 months",
    level: "Beginner friendly",
    learn: [
      "Excel, SQL and Power BI",
      "Cleaning and visualising data",
      "Dashboards and reporting for business",
    ],
  },
  {
    icon: Database,
    title: "Data Engineering",
    duration: "5 months",
    level: "Intermediate",
    learn: [
      "Python and advanced SQL",
      "Pipelines, ETL and data warehouses",
      "Cloud data tools",
    ],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    duration: "5 months",
    level: "Beginner to intermediate",
    learn: [
      "Python and data foundations",
      "Machine learning basics",
      "Building with AI tools and APIs",
    ],
  },
];

export const academyPerks = [
  {
    title: "Learn by building",
    desc: "Every student ships real projects for a portfolio, not just notes.",
  },
  {
    title: "Mentorship",
    desc: "Small groups and direct feedback from working engineers.",
  },
  {
    title: "Career guidance",
    desc: "CV reviews, interview practice and guidance on first jobs and freelancing.",
  },
  {
    title: "Certificate",
    desc: "A completion certificate once you finish the track and final project.",
  },
];

export const academyFormats = [
  {
    title: "Weekend classes",
    desc: "For students and workers who are busy on weekdays.",
  },
  {
    title: "Online live classes",
    desc: "Join from anywhere with recorded sessions to catch up.",
  },
  {
    title: "Youth and school programmes",
    desc: "Holiday camps and school visits for teens and young adults.",
  },
  {
    title: "Corporate training",
    desc: "Custom workshops for your staff, such as cybersecurity awareness.",
  },
];
