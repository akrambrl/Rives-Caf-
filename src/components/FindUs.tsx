import { findUs } from "@/content";
import { PinIcon, ClockIcon, MailIcon } from "./icons";
import styles from "./FindUs.module.css";

export default function FindUs() {
  return (
    <section className={`section ${styles.section}`} id="find">
      <div className="wrap">
        <div className={styles.grid}>
          <div className={styles.info}>
            <span className="eyebrow">Nous trouver</span>
            <h2>On vous attend</h2>

            <div className={styles.row}>
              <span className={styles.ic}>
                <PinIcon />
              </span>
              <div>
                <b>Adresse</b>
                <span>{findUs.address}</span>
              </div>
            </div>

            <div className={styles.row}>
              <span className={styles.ic}>
                <ClockIcon />
              </span>
              <div>
                <b>Horaires</b>
                <span>
                  {findUs.hours.map((h, i) => (
                    <span key={h}>
                      {h}
                      {i < findUs.hours.length - 1 && <br />}
                    </span>
                  ))}
                </span>
              </div>
            </div>

            <div className={styles.row}>
              <span className={styles.ic}>
                <MailIcon />
              </span>
              <div>
                <b>Contact</b>
                <span>
                  {findUs.email} · {findUs.phone}
                </span>
              </div>
            </div>

            <a
              href={findUs.mapsLink}
              target="_blank"
              rel="noopener"
              className={`btn btn-ghost ${styles.btn}`}
            >
              Ouvrir dans Google Maps
            </a>
          </div>

          <div className={styles.map}>
            <iframe
              title="Carte — RIVES Café, Paris 19e"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={findUs.mapsEmbed}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
