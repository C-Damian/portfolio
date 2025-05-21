import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Python", level: 80, category: "backend" },
  { name: "Bash/Shell Scripting", level: 75, category: "backend" },
  { name: "SQL", level: 70, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },

  // Certifications
  { name: "CompTIA A+", level: 100, category: "certifications" },
  { name: "CompTIA Network+", level: 100, category: "certifications" },
  { name: "CompTIA Security+", level: 100, category: "certifications" },
  { name: "AWS Cloud Practitioner", level: 100, category: "certifications" },
  { name: "ITIL 4 Foundation", level: 100, category: "certifications" },
  { name: "Linux Essentials", level: 100, category: "certifications" },

  // Tools
  { name: "Linux", level: 85, category: "tools" },
  { name: "CLI (Command Line)", level: 80, category: "tools" },
  { name: "Git/GitHub", level: 80, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },  
  { name: "AWS", level: 70, category: "tools" },  
  { name: "VS Code", level: 90, category: "tools" },

  //frontend
  { name: "HTML/CSS", level: 80, category: "fontend" },
  { name: "JavaScript", level: 85, category: "frontend" },
  { name: "React", level: 75, category: "frontend" },
  { name: "TypeScript", level: 60, category: "frontend" },
  { name: "Tailwind CSS", level: 75, category: "frontend" },
  { name: "Next.js", level: 60, category: "frontend" }

]

const categories = ["all", "backend", "certifications", "tools", "frontend"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

  return <section id="skills" className="py-24 px-4 relative bg-secondary/30"
  >
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        My <span className="text-primary"> Skills</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.sort((a, b) => b.level - a.level).map((skill, key) => (
          <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
            <div className="text-left mb-4">
              <h3 className="font-semibold text-lg">{skill.name}</h3>
            </div>
            <div className="w-fill bg-secondary/50 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                style={{ width: skill.level + "%"}}
              />
            </div>
            <div className="text-right mt-1">
              <span className="text-sm text-muted-foreground">{skill.level}%</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
}