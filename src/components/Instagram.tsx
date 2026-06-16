import Image from "next/image";
import { gallery, social } from "@/content";
import { asset } from "@/lib/asset";
import { InstagramIcon, TikTokIcon } from "./icons";
import styles from "./Instagram.module.css";

export default function Instagram() {
  return (
    <section className={`section ${styles.section}`} id="insta">
      <div className="wrap">
        <div className={styles.head}>
          <span className="eyebrow">{social.instagram.handle}</span>
          <h2 className="chewy">Suivez le café</h2>
        </div>

        <div className={styles.grid}>
          {gallery.map((img) => (
            <a
              key={img.src}
              href={social.instagram.url}
              target="_blank"
              rel="noopener"
              className={styles.tile}
            >
              <Image
                src={asset(img.src)}
                alt={img.alt}
                fill
                sizes="(max-width: 900px) 50vw, 25vw"
                className={styles.tileImg}
              />
            </a>
          ))}
        </div>

        <div className={styles.socials}>
          <a href={social.instagram.url} target="_blank" rel="noopener">
            <InstagramIcon />
            Instagram
          </a>
          <a href={social.tiktok.url} target="_blank" rel="noopener">
            <TikTokIcon />
            TikTok
          </a>
        </div>
      </div>
    </section>
  );
}
