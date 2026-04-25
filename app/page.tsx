import { PageShell } from "@/components/page-shell";
import Link from "next/link";

export default function HomePage() {
  return (
    <PageShell>
      <section className="hero">
        <div className="container">
          <div className="bg-leaf">
            <img src="/assets/shared/desktop/bg-pattern-leaf.svg" alt="" />
          </div>
          <div className="hero-background hero-flex">
            <div className="hero-content">
              <h1>Award-winning custom designs and digital branding solutions</h1>
              <p>
                With over 10 years in the industry, we are experienced in creating
                fully responsive websites, app design, and engaging brand
                experiences. Find out more about our services
              </p>
              <Link href="/about">
                <div className="btn-light">Learn More</div>
              </Link>
            </div>
            <div className="hero-image">
              <img src="/assets/home/desktop/image-hero-phone.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <div className="grid">
            <div className="grid-item item1">
              <Link href="/web-design">
                <picture>
                  <source
                    media="(max-width: 480px)"
                    srcSet="/assets/home/mobile/image-web-design.jpg"
                  />
                  <source
                    media="(max-width: 768px)"
                    srcSet="/assets/home/tablet/image-web-design.jpg"
                  />
                  <img
                    className="bg-image"
                    src="/assets/home/desktop/image-web-design-large.jpg"
                    alt=""
                  />
                </picture>
                <div className="grid-item-content">
                  <h2>Web Design</h2>
                  <p>
                    view projects
                    <span>
                      <img
                        src="/assets/shared/desktop/icon-right-arrow.svg"
                        alt=""
                      />
                    </span>
                  </p>
                </div>
              </Link>
            </div>

            <div className="grid-item item2">
              <Link href="/app-design">
                <picture>
                  <source
                    media="(max-width: 480px)"
                    srcSet="/assets/home/mobile/image-app-design.jpg"
                  />
                  <source
                    media="(max-width: 768px)"
                    srcSet="/assets/home/tablet/image-app-design.jpg"
                  />

                  <img
                    className="bg-image"
                    src="/assets/home/desktop/image-app-design.jpg"
                    alt=""
                  />
                </picture>
                <div className="grid-item-content">
                  <h2>App Design</h2>
                  <p>
                    view projects
                    <span>
                      <img
                        src="/assets/shared/desktop/icon-right-arrow.svg"
                        alt=""
                      />
                    </span>
                  </p>
                </div>
              </Link>
            </div>

            <div className="grid-item item3">
              <Link href="/graphic-design">
                <picture>
                  <source
                    media="(max-width: 480px)"
                    srcSet="/assets/home/mobile/image-graphic-design.jpg"
                  />
                  <source
                    media="(max-width: 768px)"
                    srcSet="/assets/home/tablet/image-graphic-design.jpg"
                  />

                  <img
                    className="bg-image"
                    src="/assets/home/desktop/image-graphic-design.jpg"
                    alt=""
                  />
                </picture>
                <div className="grid-item-content">
                  <h2>Graphic Design</h2>
                  <p>
                    view projects
                    <span>
                      <img
                        src="/assets/shared/desktop/icon-right-arrow.svg"
                        alt=""
                      />
                    </span>
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="attributes">
        <div className="container">
          <div className="bg-leaf">
            <img src="/assets/shared/desktop/bg-pattern-leaf.svg" alt="" />
          </div>
          <div className="flex-container">
            <div className="item-container">
              <div className="img-container box1">
                <img
                  src="/assets/home/desktop/illustration-passionate.svg"
                  alt=""
                />
              </div>
              <div className="content">
                <h3>Passionate</h3>

                <p>
                  Each project starts with an in-depth brand research to ensure we
                  only create products that serve a purpose. We merge art, design,
                  and technology into exciting new solutions.
                </p>
              </div>
            </div>

            <div className="item-container">
              <div className="img-container box2">
                <img
                  src="/assets/home/desktop/illustration-resourceful.svg"
                  alt=""
                />
              </div>
              <div className="content">
                <h3>Resourceful</h3>
                <p>
                  Everything that we do has a strategic purpose. We use an agile
                  approach in all of our projects and value customer collaboration.
                  It guarantees superior results that fulfill our clients’ needs.
                </p>
              </div>
            </div>

            <div className="item-container">
              <div className="img-container box3">
                <img
                  src="/assets/home/desktop/illustration-friendly.svg"
                  alt=""
                />
              </div>
              <div className="content">
                <h3>Friendly</h3>
                <p>
                  We are a group of enthusiastic folks who know how to put people
                  first. Our success depends on our customers, and we strive to
                  give them the best experience a company can provide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
