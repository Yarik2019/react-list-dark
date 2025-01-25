import styles from "./Toggle.module.css";
const Toggle = ({ toggleTheme, value, ariaLabel }) => {
  return (
    <button
      className={styles.switcher}
      onClick={toggleTheme}
      readOnly
      aria-label={ariaLabel}
    >
      {value ? "🌙" : "☀️"}
    </button>
  );
};

export default Toggle;
