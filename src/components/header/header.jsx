import { ThemeChange } from "../themechanger/themechanger";
import style from "./header.module.css";

export function Header() {
  return (
    <section className={style["header"]}>
      <h1 className={style["header-title"]}>calc</h1>
      <ThemeChange />
    </section>
  );
}
