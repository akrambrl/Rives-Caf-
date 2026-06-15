import { social } from "@/content";
import styles from "./Recruit.module.css";

export default function Recruit() {
  return (
    <section className={`section ${styles.section}`} id="recruit">
      <div className={`wrap ${styles.inner}`}>
        <span className="eyebrow light">Rejoindre l&apos;équipe</span>
        <h2 className="chewy">On recrute !</h2>
        <p>
          Barista, pâtissier·ère, ou serveur·euse en salle — si tu aimes le bon
          café et les gens, on a une place pour toi à Rives.
        </p>
        <a href={`mailto:${social.jobsEmail}`} className="btn btn-cream">
          Envoyer ma candidature
        </a>
      </div>
    </section>
  );
}
