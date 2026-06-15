"use client";

import { useEffect, useState } from "react";
import { navLinks, social } from "@/content";
import { InstagramIcon, TikTokIcon } from "./icons";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Passe en crème dès que l'on dépasse 80px de scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloque le scroll de fond quand le menu mobile est ouvert.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ""} ${
        menuOpen ? styles.open : ""
      }`}
    >
      <div className={styles.inner}>
        <a href="#hero" className={styles.logo} onClick={closeMenu}>
          RiVES
        </a>

        <div className={styles.links}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className={styles.social}>
          <a
            href={social.instagram.url}
            aria-label="Instagram"
            target="_blank"
            rel="noopener"
          >
            <InstagramIcon />
          </a>
          <a
            href={social.tiktok.url}
            aria-label="TikTok"
            target="_blank"
            rel="noopener"
          >
            <TikTokIcon />
          </a>
        </div>

        <button
          type="button"
          className={styles.burger}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Panneau mobile (non maquetté, créé pour le responsive) */}
      <div
        id="mobile-menu"
        className={styles.mobilePanel}
        hidden={!menuOpen}
      >
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <div className={styles.mobileSocial}>
          <a
            href={social.instagram.url}
            aria-label="Instagram"
            target="_blank"
            rel="noopener"
            onClick={closeMenu}
          >
            <InstagramIcon />
          </a>
          <a
            href={social.tiktok.url}
            aria-label="TikTok"
            target="_blank"
            rel="noopener"
            onClick={closeMenu}
          >
            <TikTokIcon />
          </a>
        </div>
      </div>
    </nav>
  );
}
