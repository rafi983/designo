import { DesignLinksGrid } from "@/components/design-links-grid";
import { PageShell } from "@/components/page-shell";

const projects = [
  {
    image: "/assets/app-design/desktop/image-airfilter.jpg",
    title: "AIRFILTER",
    description: "Solving the problem of poor indoor air quality by filtering the air",
  },
  {
    image: "/assets/app-design/desktop/image-eyecam.jpg",
    title: "EYECAM",
    description:
      "Product that lets you edit your favorite photos and videos at any time",
  },
  {
    image: "/assets/app-design/desktop/image-faceit.jpg",
    title: "FACEIT",
    description:
      "Get to meet your favorite internet superstar with the faceit app",
  },
  {
    image: "/assets/app-design/desktop/image-todo.jpg",
    title: "TODO",
    description: "A todo app that features cloud sync with light and dark mode",
  },
  {
    image: "/assets/app-design/desktop/image-loopstudios.jpg",
    title: "LOOPSTUDIOS",
    description: "A VR experience app made for Loopstudios",
  },
];

export default function AppDesignPage() {
  return (
    <PageShell>
      <section className="header">
        <div className="container">
          <div className="bg-leaf">
            <img src="/assets/shared/desktop/bg-pattern-leaf.svg" alt="" />
          </div>
          <div className="header-background-app header-flex">
            <div className="header-content">
              <h1>App Design</h1>
              <p>
                Our mobile designs bring intuitive digital solutions to your
                customers right at their fingertips
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="projects">
        <div className="container">
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.title} className="card">
                <div className="image">
                  <img src={project.image} alt="" />
                </div>
                <div className="content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DesignLinksGrid current="app" />
    </PageShell>
  );
}
