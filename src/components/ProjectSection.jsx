import { ArrowRight, ExternalLink, Github } from "lucide-react";
import apigatewayImg from "../assets/apigateway.png"
import xbotImg from "../assets/xbot.png"

const projects = [
  {
    id: 1,
    title: "AWS API Gateway",
    description: "An API Gateway to interact with AWS services.",
    image: apigatewayImg,
    tags: ["FastAPI", "AWS", "Terraform", "CI/CD", "Python"],
    demoUrl: "https://www.youtube.com/watch?v=CeB2i8V0O9c",
    githubUrl: "https://github.com/C-Damian/cloud-ops-api-gateway",
  },
  {
    id: 2,
    title: "FastAPI X Bot",
    description:
      "A FastAPI bot that automatically posts daily tech tips to X and autogenerates its own tips",
    image: xbotImg,
    tags: ["FastAPI", "SQLalchemy", "PostgresSQL", "AI Promtp Engineering"],
    demoUrl: "https://github.com/C-Damian/FastAPI-X-Bot",
    githubUrl: "https://github.com/C-Damian/FastAPI-X-Bot",
  },
  {
    id: 3,
    title: "File Converter or Blockchain Tracker",
    description:
      "Upcoming Project",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/C-Damian"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};