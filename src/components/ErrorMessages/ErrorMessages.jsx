import styles from "./ErrorMessages.module.css";
const ErrorMessages = ({ message }) => {
  return <div className={styles.errorContainer}>{message}</div>;
};

export default ErrorMessages;
