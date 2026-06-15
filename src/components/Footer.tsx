import { navLinks, social, site, legalAddress } from "@/content";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.grid}`}>
        <div>
          <div className={styles.logo}>RiVES</div>
          <p className={styles.tag}>{site.tagline}</p>
        </div>

        <div>
          <h4>Visiter</h4>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Suivre</h4>
          <ul>
            <li>
              <a href={social.instagram.url} target="_blank" rel="noopener">
                Instagram
              </a>
            </li>
            <li>
              <a href={social.tiktok.url} target="_blank" rel="noopener">
                TikTok
              </a>
            </li>
            <li>
              <a href={`mailto:${social.email}`}>{social.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={`wrap ${styles.legal}`}>
        <span>© 2026 {site.name} · Tous droits réservés</span>
        <span>{legalAddress}</span>
      </div>
    </footer>
  );
}
