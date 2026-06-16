import Image from "next/image";
import { site } from "@/content";
import hero from "../../public/assets/hero-rives.png";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <header className={styles.hero} id="hero">
      <Image
        src={hero}
        alt="RiVES Café"
        priority
        sizes="100vw"
        className={styles.banner}
      />
      <div className={styles.inner}>
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
    </header>
  );
}
