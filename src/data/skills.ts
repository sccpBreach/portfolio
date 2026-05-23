export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  label: string;
  skills: Skill[];
}

// Icon key mapping — di-resolve di komponen Skills
export const skillCategories: SkillCategory[] = [
  {
    label: "Frontend",
    skills: [
      { name: "React", icon: "SiReact" },
      { name: "Next.js", icon: "SiNextdotjs" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
      { name: "HTML & CSS", icon: "SiHtml5" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", icon: "SiNodedotjs" },
      { name: "Firebase", icon: "SiFirebase" },
      { name: "REST API", icon: "SiPostman" },
    ],
  },
  {
    label: "Database",
    skills: [
      { name: "Firestore", icon: "SiFirebase" },
      { name: "PostgreSQL", icon: "SiPostgresql" },
    ],
  },
  {
    label: "Tools",
    skills: [
      { name: "Git", icon: "SiGit" },
      { name: "VS Code", icon: "VscVscode" },
      { name: "Figma", icon: "SiFigma" },
      { name: "npm", icon: "SiNpm" },
    ],
  },
  {
    label: "AI Tools",
    skills: [
      { name: "ChatGPT", icon: "SiOpenai" },
      { name: "Claude", icon: "SiAnthropic" },
      { name: "GitHub Copilot", icon: "SiGithub" },
    ],
  },
];
