import Link from "next/link";

export function CtaSection() {
  return (
    <section className="cta">
      <div className="container">
        <div className="background">
          <div className="content">
            <div className="text">
              <h2>Let&apos;s talk about your project</h2>
              <p>
                Ready to take it to the next level? Contact us today and find out
                how our expertise can help your business grow.
              </p>
            </div>
            <Link href="/contact">
              <div className="btn-light">Get in Touch</div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
