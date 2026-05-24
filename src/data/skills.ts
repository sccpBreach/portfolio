export interface Skill {
  name: string;
  icon: string;
  level: number;
}

export interface SkillCategory {
  label: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: "Frontend",
    skills: [
      { name: "React", icon: "SiReact", level: 90 },
      { name: "Next.js", icon: "SiNextdotjs", level: 85 },
      { name: "TypeScript", icon: "SiTypescript", level: 85 },
      { name: "Tailwind CSS", icon: "SiTailwindcss", level: 90 },
      { name: "HTML & CSS", icon: "SiHtml5", level: 95 },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", icon: "SiNodedotjs", level: 75 },
      { name: "Firebase", icon: "SiFirebase", level: 80 },
      { name: "REST API", icon: "SiPostman", level: 85 },
    ],
  },
  {
    label: "Database",
    skills: [
      { name: "Firestore", icon: "SiFirebase", level: 80 },
      { name: "PostgreSQL", icon: "SiPostgresql", level: 65 },
    ],
  },
  {
    label: "Tools",
    skills: [
      { name: "Git", icon: "SiGit", level: 85 },
      { name: "VS Code", icon: "VscVscode", level: 90 },
      { name: "Figma", icon: "SiFigma", level: 70 },
      { name: "npm", icon: "SiNpm", level: 80 },
    ],
  },
  {
    label: "AI Tools",
    skills: [
      { name: "ChatGPT", icon: "SiOpenai", level: 90 },
      { name: "Claude", icon: "SiAnthropic", level: 95 },
      { name: "GitHub Copilot", icon: "SiGithub", level: 85 },
    ],
  },
];
