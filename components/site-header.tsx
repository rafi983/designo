"use client";

import Link from "next/link";
import { useState } from "react";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-flex container">
        <Link href="/">
          <img
            src="/assets/shared/desktop/logo-dark.png"
            className="logo"
            alt="Designo Logo"
          />
        </Link>
        <div className="main-menu-items">
          <ul className="menu-items-list">
            <li>
              <Link href="/about">Our Company</Link>
            </li>
            <li>
              <Link href="/locations">Locations</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="mobile-menu">
          <div
            className="mobile-menu-toggle"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <img
              src="/assets/shared/mobile/icon-hamburger.svg"
              alt="menu button"
              className={`hamburger ${isOpen ? "hide" : ""}`}
            />
            <img
              src="/assets/shared/mobile/icon-close.svg"
              alt="close button"
              className={`close ${isOpen ? "show" : "hide"}`}
            />
          </div>
          <div
            className={`mobile-menu-modal ${isOpen ? "active" : ""}`}
            onClick={() => setIsOpen(false)}
          />
          <div className={`mobile-menu-items ${isOpen ? "active" : ""}`}>
            <ul className="mobile-menu-list">
              <li>
                <Link href="/about" onClick={() => setIsOpen(false)}>
                  Our Company
                </Link>
              </li>
              <li>
                <Link href="/locations" onClick={() => setIsOpen(false)}>
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
