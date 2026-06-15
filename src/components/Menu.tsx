import { menu } from "@/content";
import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <section className={`section ${styles.section}`} id="menu">
      <div className="wrap">
        <div className={styles.head}>
          <span className="eyebrow light">La carte</span>
          <h2 className="chewy">Café &amp; pâtisseries</h2>
        </div>

        <div className={styles.card}>
          {menu.map((col) => (
            <div key={col.title} className={styles.col}>
              <h3>
                {col.title}
                <span className={`squares ${styles.colSquares}`}>
                  <i />
                  <i />
                  <i />
                </span>
              </h3>
              {col.items.map((item, i) => (
                <div
                  key={item.name}
                  className={styles.row}
                  data-last={i === col.items.length - 1 || undefined}
                >
                  <span className={styles.name}>{item.name}</span>
                  <span className={styles.dots} aria-hidden="true" />
                  <span className={styles.price}>{item.price}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className={styles.foot}>
          <a href="#" className="btn btn-cream">
            Voir la carte complète
          </a>
        </div>
      </div>
    </section>
  );
}
