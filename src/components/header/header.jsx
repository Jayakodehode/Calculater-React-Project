import style from "./header.module.css";
export function Header() {
  return (
    <div className={style["header"]}>
      <h1>Calc</h1>
      <div className={style["color-theme"]}>
        <h4>THEME</h4>
        <div className={style["toogle-container"]}>
          <div className={style["toogle-numbers"]}>
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
          <span className={style["toogle"]}></span>
        </div>
      </div>
    </div>
  );
}
