import { site } from "@/content";
import zellige from "../../public/assets/zellige-tile.png";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <header
      className={styles.hero}
      id="hero"
      style={{ backgroundImage: `url(${zellige.src})` }}
    >
      <div className={styles.inner}>
        <div className={`${styles.logo} chewy`}>RiVES</div>
        <div className={styles.sub}>Café</div>
        <h1 className="chewy">Good coffee, good people, good day.</h1>
        <p className={styles.lead}>{site.description}</p>
        <div className={styles.cta}>
          <a href="#menu" className="btn btn-cream">
            Voir la carte
          </a>
          <a href="#find" className="btn btn-ghost on-dark">
            Nous trouver
          </a>
        </div>
      </div>
      <div className={styles.scrolldown}>Défiler</div>
    </header>
  );
}
