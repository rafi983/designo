import { LocationsLinksSection } from "@/components/locations-links-section";
import { PageShell } from "@/components/page-shell";

export default function AboutPage() {
  return (
    <PageShell>
      <section className="header about-header">
        <div className="container">
          <div className="bg-leaf">
            <img src="/assets/shared/desktop/bg-pattern-leaf.svg" alt="" />
          </div>
          <div className="card">
            <div className="background">
              <div className="content">
                <h2>About Us</h2>
                <p>
                  Founded in 2010, we are a creative agency that produces lasting
                  results for our clients. We&apos;ve partnered with many startups,
                  corporations, and nonprofits alike to craft designs that make
                  real impact. We&apos;re always looking forward to creating brands,
                  products, and digital experiences that connect with our clients&apos;
                  audiences.
                </p>
              </div>
              <div className="image">
                <picture>
                  <source
                    media="(max-width: 440px)"
                    srcSet="/assets/about/mobile/image-about-hero.jpg"
                  />
                  <source
                    media="(max-width: 970px)"
                    srcSet="/assets/about/tablet/image-about-hero.jpg"
                  />
                  <img src="/assets/about/desktop/image-about-hero.jpg" alt="" />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="talent">
        <div className="container">
          <div className="lg-card">
            <div className="bg-image">
              <picture>
                <source
                  media="(max-width: 970px)"
                  srcSet="/assets/shared/desktop/bg-pattern-three-circles.svg"
                />
                <img src="/assets/shared/desktop/bg-pattern-two-circles.svg" alt="" />
              </picture>
            </div>
            <picture>
              <source
                media="(max-width: 440px)"
                srcSet="/assets/about/mobile/image-world-class-talent.jpg"
              />
              <source
                media="(max-width: 970px)"
                srcSet="/assets/about/tablet/image-world-class-talent.jpg"
              />

              <img
                src="/assets/about/desktop/image-world-class-talent.jpg"
                alt=""
              />
            </picture>
            <div className="content">
              <h2>World-class talent</h2>
              <p>
                We are a crew of strategists, problem-solvers, and technologists.
                Every design is thoughtfully crafted from concept to launch,
                ensuring success in its given market. We are constantly updating
                our skills in a myriad of platforms.
              </p>
              <p>
                Our team is multi-disciplinary and we are not merely interested in
                form — content and meaning are just as important. We give great
                importance to craftsmanship, service, and prompt delivery. Clients
                have always been impressed with our high-quality outcomes that
                encapsulates their brand&apos;s story and mission.
              </p>
            </div>
          </div>
        </div>
      </section>

      <LocationsLinksSection />

      <section className="real-deal">
        <div className="container">
          <div className="lg-card">
            <div className="bg-image">
              <picture>
                <source
                  media="(max-width: 970px)"
                  srcSet="/assets/shared/desktop/bg-pattern-three-circles.svg"
                />
                <img src="/assets/shared/desktop/bg-pattern-two-circles.svg" alt="" />
              </picture>
            </div>
            <picture>
              <source
                media="(max-width: 440px)"
                srcSet="/assets/about/mobile/image-real-deal.jpg"
              />
              <source
                media="(max-width: 970px)"
                srcSet="/assets/about/tablet/image-real-deal.jpg"
              />

              <img src="/assets/about/desktop/image-real-deal.jpg" alt="" />
            </picture>
            <div className="content">
              <h2>The real deal</h2>
              <p>
                As strategic partners in our clients&apos; businesses, we are ready to
                take on any challenge as our own. Solving real problems require
                empathy and collaboration, and we strive to bring a fresh
                perspective to every opportunity. We make design and technology
                more accessible and give you tools to measure success.
              </p>
              <p>
                We are visual storytellers in appealing and captivating ways. By
                combining business and marketing strategies, we inspire audiences
                to take action and drive real results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
