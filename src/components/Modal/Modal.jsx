import ReactDOM from "react-dom";
import { useEffect } from "react";
import styles from "./Modal.module.css";
const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.classList.add(styles.noScroll);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove(styles.noScroll);
    };
  }, [isOpen, onClose]);

  return ReactDOM.createPortal(
    <div className={styles.backdrop}>
      <div className={styles.window} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
