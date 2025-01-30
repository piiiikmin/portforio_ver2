import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header>
        <p>header</p>
      </header>

      <main className={styles.main}>
      <h1>Hello, Next.js!</h1>
        <Image
          className={styles.logo}
          src="/images/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </main>

      <footer className={styles.footer}>
        <p>footer</p>
      </footer>
    </div>
  )
}
