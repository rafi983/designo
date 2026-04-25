import { PageShell } from "@/components/page-shell";

export default function LocationsPage() {
  return (
    <PageShell ukFooter>
      <section className="locations-page">
        <div className="container">
          <div className="locations-grid">
            <div className="location-container item-1">
              <div className="content">
                <div className="bg-image">
                  <picture>
                    <source
                      media="(max-width: 440px)"
                      srcSet="/assets/shared/desktop/bg-pattern-three-circles.svg"
                    />
                    <img src="/assets/shared/desktop/bg-pattern-two-circles.svg" alt="" />
                  </picture>
                </div>
                <h2>Canada</h2>
                <div className="text-container">
                  <div className="address">
                    <p>
                      <strong>Designo Central Office </strong> <br />3886
                      Wellington Street<br />
                      Toronto, Ontario M9C 3J5
                    </p>
                  </div>
                  <div className="contacts">
                    <p>
                      <span> Contact</span>
                      <br />
                      P : +1 253-863-8967 <br />M : contact@designo.co
                    </p>
                  </div>
                </div>
              </div>
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcSet="/assets/locations/tablet/image-map-canada.png"
                />

                <img
                  className="map"
                  src="/assets/locations/desktop/image-map-canada.png"
                  alt=""
                />
              </picture>
            </div>

            <div className="location-container item-2">
              <div className="content">
                <div className="bg-image">
                  <picture>
                    <source
                      media="(max-width: 440px)"
                      srcSet="/assets/shared/desktop/bg-pattern-three-circles.svg"
                    />
                    <img src="/assets/shared/desktop/bg-pattern-two-circles.svg" alt="" />
                  </picture>
                </div>
                <h2>Australia</h2>
                <div className="text-container">
                  <div className="address">
                    <p>
                      <strong>Designo AU Office </strong> <br />19 Balonne
                      Street<br />
                      New South Wales 2443
                    </p>
                  </div>
                  <div className="contacts">
                    <p>
                      <span> Contact</span>
                      <br />
                      P : (02) 6720 9092 <br />M : contact@designo.au
                    </p>
                  </div>
                </div>
              </div>

              <picture>
                <source
                  media="(max-width: 768px)"
                  srcSet="/assets/locations/tablet/image-map-australia.png"
                />

                <img
                  className="map"
                  src="/assets/locations/desktop/image-map-australia.png"
                  alt=""
                />
              </picture>
            </div>

            <div className="location-container item-3">
              <div className="content">
                <div className="bg-image">
                  <picture>
                    <source
                      media="(max-width: 440px)"
                      srcSet="/assets/shared/desktop/bg-pattern-three-circles.svg"
                    />
                    <img src="/assets/shared/desktop/bg-pattern-two-circles.svg" alt="" />
                  </picture>
                </div>
                <h2>Canada</h2>
                <div className="text-container">
                  <div className="address">
                    <p>
                      <strong>Designo UK Office </strong> <br />13 Colorado Way
                      <br />
                      Rhyd-y-fro SA8 9GA
                    </p>
                  </div>
                  <div className="contacts">
                    <p>
                      <span>Contact</span> <br />

                      P : +1 253-863-8967 <br />M : contact@designo.co
                    </p>
                  </div>
                </div>
              </div>
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcSet="/assets/locations/tablet/image-map-australia.png"
                />
                <img
                  className="map"
                  src="/assets/locations/desktop/image-map-australia.png"
                  alt=""
                />
              </picture>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
