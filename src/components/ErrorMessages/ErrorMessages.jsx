import styles from "./ErrorMessages.module.css";
const ErrorMessages = ({ message }) => {
  return (
    <div className={styles.errorContainer}>
      {message} Вибачте виникла якась помилка
    </div>
  );
};

export default ErrorMessages;
