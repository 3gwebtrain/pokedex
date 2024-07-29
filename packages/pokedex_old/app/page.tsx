"use client";
import { ExampleComponent } from "components";
import { useSelector } from "react-redux";
import styles from "./page.module.css";
export default function Home() {
  const store = useSelector((state) => console.log(state));
  return (
    <main className={styles.main}>
      <h1>Welcome </h1>
      <ExampleComponent text="Hello from components" />
    </main>
  );
}
