import CardsWithModal from "@/components/FeatureSections/CardsWithModal";
import styles from "./page.module.css";
import HeroVideo from "@/components/Hero/HeroVideo";
import CardsWithButton from "@/components/FeatureSections/CardsWithButton";
import CardsProducts from "@/components/FeatureSections/CardsProducts";
import CardsGridOne from "@/components/FeatureSections/CardsGridOne";
import CardsGridTwo from "@/components/FeatureSections/CardsGridTwo";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HeroVideo />
        <CardsWithModal />
        <CardsWithButton />
        <CardsProducts />
        <CardsGridOne />
        <CardsGridTwo />
      </main>
    </div>
  );
}
