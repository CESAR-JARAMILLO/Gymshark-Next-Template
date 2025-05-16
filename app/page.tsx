import styles from "./page.module.css";
import HeroVideo from "@/components/Hero/HeroVideo";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HeroVideo />
      </main>
    </div>
  );
}
