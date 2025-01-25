import styles from "./ContactsItem.module.css";
import Modal from "../Modal/Modal.jsx";
import UserModal from "../Modal/UserModal/UserModal.jsx";
import { useToggle } from "../../hooks/useToggle.jsx";
const ContactsItem = ({ user }) => {
  const { isOpen, openModel, closeModel } = useToggle();
  const imgUrl = "https://demo-source.imgix.net/canyon.jpg?dpr=2&h=480&w=640";
  if (!user) return null;
  return (
    <li className={styles.userCard}>
      <div className={styles.userItem} onClick={openModel}>
        <div className={styles.userPhoto}>
          <img src={user.photo || imgUrl} alt={user.name || "User"} />
        </div>
        <div className={styles.userInfo}>
          <h3 className={styles.userName}>{user.name}</h3>
          <p className={styles.userEmail}>{user.email}</p>
          <p className={styles.userAge}>Age: {user.age}</p>
          <p className={styles.userPhone}>Phone: {user.phone}</p>
          <p className={styles.userAddress}>{user.address}</p>
        </div>
      </div>
      <div className={styles.userActions}>
        <button
          className={styles.callBtn}
          aria-label={`Call ${user.name}`}
          onClick={() => alert(`Calling ${user.phone}`)}
        >
          📞 Call
        </button>
        <button
          className={styles.messageBtn}
          aria-label={`Message ${user.name}`}
          onClick={() => alert(`Messaging ${user.name}`)}
        >
          ✉️ Message
        </button>
      </div>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={closeModel}>
          <UserModal onClose={closeModel} userModal={user} />
        </Modal>
      )}
    </li>
  );
};

export default ContactsItem;
