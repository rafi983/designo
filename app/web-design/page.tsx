import { DesignLinksGrid } from "@/components/design-links-grid";
import { PageShell } from "@/components/page-shell";

const projects = [
  {
    image: "/assets/web-design/desktop/image-express.jpg",
    title: "EXPRESS",
    description: "A multi-carrier shopping website for ecommerce businesses",
  },
  {
    image: "/assets/web-design/desktop/image-transfer.jpg",
    title: "TRANSFER",
    description:
      "Site for low-cost money transfers and sending money within seconds",
  },
  {
    image: "/assets/web-design/desktop/image-photon.jpg",
    title: "PHOTON",
    description:
      "A state-of-the-art music player with high-resolution audio and DSP effects",
  },
  {
    image: "/assets/web-design/desktop/image-builder.jpg",
    title: "BUILDER",
    description: "Connects users with local contractors based on their location",
  },
  {
    image: "/assets/web-design/desktop/image-blogr.jpg",
    title: "BLOGR",
    description: "Blogr is a platform for creating an online blog or publication",
  },
  {
    image: "/assets/web-design/desktop/image-camp.jpg",
    title: "CAMP",
    description: "Get expert training in coding, data,design, and digital marketing",
  },
];

export default function WebDesignPage() {
  return (
    <PageShell>
      <section className="header">
        <div className="container">
          <div className="bg-leaf">
            <img src="/assets/shared/desktop/bg-pattern-leaf.svg" alt="" />
          </div>
          <div className="header-background-web header-flex">
            <div className="header-content">
              <h1>Web Design</h1>
              <p>
                We build websites that serve as powerful marketing tools and bring
                memorable brand experiences.
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

      <DesignLinksGrid current="web" />
    </PageShell>
  );
}
