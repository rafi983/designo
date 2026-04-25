import Link from "next/link";

export function SiteFooter({ compact = false, ukContact = false }: { compact?: boolean; ukContact?: boolean }) {
  return (
    <footer className="footer" id={compact ? "about-footer" : undefined}>
      <div className="container">
        <nav className="footer-nav">
          <img
            className="logo"
            src="/assets/shared/desktop/logo-light.png"
            alt="logo"
          />
          <div className="divider-1" />
          <ul className="footer-nav-menu">
            <li className="footer-nav-item">
              <Link href="/about">Our Company</Link>
            </li>
            <li className="footer-nav-item">
              <Link href="/locations">Locations</Link>
            </li>
            <li className="footer-nav-item">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="divider-2" />
        <div className="footer-info-container">
          <div className="address">
            <p>
              <strong>Designo Central Office </strong> <br />3886 Wellington
              Street<br />
              Toronto, Ontario M9C 3J5
            </p>
          </div>
          <div className="contact-numbers">
            {ukContact ? (
              <p>
                Contact
                <br />
                <span>P : 07831151400 </span>
                <br />
                <span>M : contact@designo.uk </span>
              </p>
            ) : (
              <p>
                Contact Us (Central Office)
                <br />
                <span>P : +1 253-863-8967 </span>
                <br />
                <span>M : contact@designo.co </span>
              </p>
            )}
          </div>
          <div className="socials">
            <a href="#">
              <img src="/assets/shared/desktop/icon-facebook.svg" alt="" />
            </a>
            <a href="#">
              <img src="/assets/shared/desktop/icon-youtube.svg" alt="" />
            </a>
            <a href="#">
              <img src="/assets/shared/desktop/icon-twitter.svg" alt="" />
            </a>
            <a href="#">
              <img src="/assets/shared/desktop/icon-pinterest.svg" alt="" />
            </a>
            <a href="#">
              <img src="/assets/shared/desktop/icon-instagram.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
