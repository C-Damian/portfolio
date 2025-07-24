import { Briefcase, Code, LucideCircleArrowDown, User } from "lucide-react"



export const AboutSection = () => {
  return <section id="about" className="py-24 px-4 relative">
    {" "}
    <div className="container mx-auto max-w-5xl">
      <h2 className=" text-3xl md:text-4xl font-bold mb:12 text-center">
        About <span className="text-primary"> Me</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-6">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Passionate Backend Developer and UAT tester</h3>

          <p className="text-muted-foreground">
            Experienced IT professional with a background in product delivery, UAT, and automation-driven environments.<br/>
            Skilled in cross-functional collaboration across development, QA, and operations to ensure smooth implementation and continuous improvement.<b/>
            Proficient in scripting (Python, Bash), Linux, AWS, and core networking, security, and systems administration concepts.
          </p>
          <p className="text-muted-foreground">
            Certified in A+, Network+, Security+, ITIL 4, AWS Cloud Practitioner, and Linux Essentials.<br/>
            Actively expanding into infrastructure-as-code, containerization, and backend API development (FastAPI, Django).<br/>
            Hold a B.S. in Information Technology with a strong grasp of the SDLC and automation best practices.<br/>
            Interested in the intersection of infrastructure, operations, and emerging tech to drive reliability and innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <a href="#contact" className="cosmic-button">
              Get In Touch
            </a>
            <a target="_blank" href="https://www.google.com" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/15 transition-colors duration-300">
              Download CV <LucideCircleArrowDown className="inline pb-1" />
            </a>
          </div>

        </div>
        <div className="grid grid-cols-1 gap-6">
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10"><Code className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">
                Back-end Development</h4>
                <p className="text-muted-foreground">
                Designing and implementing robust server-side solutions that prioritize reliability, scalability, and simplicity to meet real-world business requirements.
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10"><User className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">
                IT & Devops</h4>
                <p className="text-muted-foreground">
                Bridging development and operations to streamline infrastructure, automate workflows, and deliver secure, efficient, and scalable IT solutions aligned with business goals.
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10"><Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg"> 
                Product Delivery & UAT</h4>
                <p className="text-muted-foreground">
                  Driving end-to-end product delivery with a focus on aligning technical outcomes with user needs through rigorous testing, stakeholder collaboration, and continuous improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}