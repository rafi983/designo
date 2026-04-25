import Link from "next/link";

export function LocationsLinksSection() {
  return (
    <section className="attributes locations">
      <div className="container">
        <div className="bg-leaf">
          <img src="/assets/shared/desktop/bg-pattern-leaf.svg" alt="" />
        </div>
        <div className="flex-container">
          <div className="item-container">
            <div className="img-container box1">
              <img src="/assets/shared/desktop/illustration-canada.svg" alt="" />
            </div>
            <div className="content">
              <h3>Canada</h3>
              <Link href="/locations">
                <div className="btn-dark">See Location</div>
              </Link>
            </div>
          </div>

          <div className="item-container">
            <div className="img-container box2">
              <img
                src="/assets/shared/desktop/illustration-australia.svg"
                alt=""
              />
            </div>
            <div className="content">
              <h3>Australia</h3>
              <Link href="/locations">
                <div className="btn-dark">See Location</div>
              </Link>
            </div>
          </div>

          <div className="item-container">
            <div className="img-container box3">
              <img
                src="/assets/shared/desktop/illustration-united-kingdom.svg"
                alt=""
              />
            </div>
            <div className="content">
              <h3>United Kingdom</h3>
              <Link href="/locations">
                <div className="btn-dark">See Location</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
