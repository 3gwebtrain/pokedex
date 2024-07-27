import { ExampleComponent } from "components";
import styles from "./page.module.css";
export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome</h1>
      <ExampleComponent text="Hello from components" />
    </main>
  );
}
