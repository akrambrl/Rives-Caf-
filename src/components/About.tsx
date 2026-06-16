import Image from "next/image";
import { asset } from "@/lib/asset";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={`section ${styles.section}`} id="about">
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.copy}>
          <span className="eyebrow">L&apos;histoire</span>
          <h2 className="chewy">
            Une halte
            <br />
            au bord de l&apos;eau
          </h2>
          <p>
            « Rives » évoque les berges, le bord de l&apos;eau, l&apos;endroit où
            l&apos;on s&apos;arrête. RIVES Café, c&apos;est cette parenthèse
            parisienne : un comptoir en zellige bordeaux, la lumière dorée du
            matin et l&apos;odeur du café fraîchement moulu.
          </p>
          <p>
            On torréfie avec soin, on pâtisse maison chaque matin, et on prend le
            temps. Comme à la maison.
          </p>
          <div className={`squares ${styles.squares}`}>
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>

        <div className={styles.photo}>
          <div className={styles.photoFrame}>
            <Image
              src={asset("/assets/mood/r08.png")}
              alt="Terrasse de RIVES Café"
              fill
              sizes="(max-width: 900px) 100vw, 600px"
              className={styles.photoImg}
            />
          </div>
          <div className={styles.badge}>
            Fait
            <br />
            maison
            <small>chaque jour</small>
          </div>
        </div>
      </div>
    </section>
  );
}
