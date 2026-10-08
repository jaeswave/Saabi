import { Globe, Smartphone, Palette, ShieldCheck, Cloud, Workflow, CreditCard, Bot, BarChart3, Network, LifeBuoy, GraduationCap } from 'lucide-react'
// partner: true => delivered through vetted partners that ExeTech manages
export const services = [
  { icon: Globe, title: 'Websites & web apps', desc: 'Fast, responsive websites, portals and full applications.', points: ['React, Next.js, Node.js, PostgreSQL', 'SEO-ready and mobile-first', 'Admin dashboards and CMS'] },
  { icon: Smartphone, title: 'Mobile apps', desc: 'Android and iOS apps for customers and staff.', points: ['MVP to full release', 'Push notifications and payments', 'App store publishing'], partner: true },
  { icon: Palette, title: 'UI/UX design', desc: 'Interfaces people enjoy using and your brand is proud of.', points: ['User research and wireframes', 'Clickable prototypes', 'Design systems'], partner: true },
  { icon: ShieldCheck, title: 'Cybersecurity', desc: 'Find and fix weaknesses before attackers do.', points: ['Penetration testing (Burp Suite)', 'OWASP Top 10 code reviews', 'Linux hardening and staff training'] },
  { icon: Cloud, title: 'Cloud & DevOps', desc: 'Reliable infrastructure and automated releases.', points: ['AWS setup and migration', 'Docker and CI/CD pipelines', 'Monitoring and backups'] },
  { icon: Workflow, title: 'Automation & dashboards', desc: 'Replace manual work and see your business live.', points: ['Workflow automation', 'Real-time executive dashboards', 'Reporting and alerts'] },
  { icon: CreditCard, title: 'Payments & integrations', desc: 'Connect your product to the systems you rely on.', points: ['Paystack and other gateways', 'APIs, ERP and CRM links', 'Automatic reconciliation'] },
  { icon: Bot, title: 'AI & chatbots', desc: 'Practical AI that saves time and serves customers.', points: ['Support and sales chatbots', 'Document and data processing', 'AI features inside your product'], partner: true },
  { icon: BarChart3, title: 'Data & analytics', desc: 'Turn raw data into decisions.', points: ['Data pipelines and warehouses', 'Business intelligence reports', 'Forecasting and insights'], partner: true },
  { icon: Network, title: 'IT infrastructure & networking', desc: 'The physical side of your technology.', points: ['Office networks and Wi-Fi', 'Servers, CCTV and access control', 'Smart-office installations'], partner: true },
  { icon: LifeBuoy, title: 'Managed IT & support', desc: 'A dependable team on call every month.', points: ['Maintenance and updates', 'Hosting, domains and business email', 'Uptime monitoring and helpdesk'] },
  { icon: GraduationCap, title: 'Consulting & training', desc: 'Strategy and skills for your team.', points: ['Technical strategy and audits', 'Project management', 'Software and cybersecurity workshops'] },
]
