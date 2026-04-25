import { DesignLinksGrid } from "@/components/design-links-grid";
import { PageShell } from "@/components/page-shell";

const projects = [
  {
    image: "/assets/graphic-design/desktop/image-change.jpg",
    title: "TIM BROWN",
    description: "A book cover designed for Tim Brown's new release, 'Change'",
  },
  {
    image: "/assets/graphic-design/desktop/image-boxed-water.jpg",
    title: "BOXED WATER",
    description: "A simple packaging concept made for Boxed Water",
  },
  {
    image: "/assets/graphic-design/desktop/image-science.jpg",
    title: "SCIENCE",
    description: "A poster made in collaboration with the Federal Art Project",
  },
];

export default function GraphicDesignPage() {
  return (
    <PageShell>
      <section className="header">
        <div className="container">
          <div className="bg-leaf">
            <img src="/assets/shared/desktop/bg-pattern-leaf.svg" alt="" />
          </div>
          <div className="header-background-graphic header-flex">
            <div className="header-content">
              <h1>Graphic Design</h1>
              <p>
                We deliver eye-catching branding materials that are tailored to
                meet your business objectives
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

      <DesignLinksGrid current="graphic" />
    </PageShell>
  );
}
