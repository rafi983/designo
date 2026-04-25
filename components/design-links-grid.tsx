import Link from "next/link";

export function DesignLinksGrid({ current }: { current: "web" | "app" | "graphic" }) {
  const showWeb = current !== "web";
  const showApp = current !== "app";
  const showGraphic = current !== "graphic";

  const links = [
    showWeb
      ? {
          href: "/web-design",
          title: "Web Design",
          desktop: "/assets/home/desktop/image-web-design-small.jpg",
          tablet: "/assets/home/tablet/image-web-design.jpg",
          mobile: "/assets/home/mobile/image-web-design.jpg",
        }
      : null,
    showApp
      ? {
          href: "/app-design",
          title: "App Design",
          desktop: "/assets/home/desktop/image-app-design.jpg",
          tablet: "/assets/home/tablet/image-app-design.jpg",
          mobile: "/assets/home/mobile/image-app-design.jpg",
        }
      : null,
    showGraphic
      ? {
          href: "/graphic-design",
          title: "Graphic Design",
          desktop: "/assets/home/desktop/image-graphic-design.jpg",
          tablet: "/assets/home/tablet/image-graphic-design.jpg",
          mobile: "/assets/home/mobile/image-graphic-design.jpg",
        }
      : null,
  ].filter(Boolean) as {
    href: string;
    title: string;
    desktop: string;
    tablet: string;
    mobile: string;
  }[];

  return (
    <section className="services">
      <div className="container">
        <div className="pages-grid">
          {links.map((item, idx) => (
            <div key={item.href} className={`grid-item item${idx + 1}`}>
              <Link href={item.href}>
                <picture>
                  <source media="(max-width: 480px)" srcSet={item.mobile} />
                  <source media="(max-width: 768px)" srcSet={item.tablet} />
                  <img className="bg-image" src={item.desktop} alt="" />
                </picture>
                <div className="grid-item-content">
                  <h2>{item.title}</h2>
                  <p>
                    view projects
                    <span>
                      <img src="/assets/shared/desktop/icon-right-arrow.svg" alt="" />
                    </span>
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
