import styles from "./UserModal.module.css";

const UserModal = ({ userModal }) => {
  if (!userModal) return null;
  return (
    <div className={styles.userInfo}>
      <div className={styles.blockInfo}>
        <h3 className={styles.userTitle}>Name:</h3>
        <p className={styles.userName}>{userModal.name || "N/A"}</p>
      </div>

      <div className={styles.blockInfo}>
        <h3 className={styles.userTitle}>Age:</h3>
        <p className={styles.userAge}>{userModal.age || "N/A"}</p>
      </div>

      <div className={styles.blockInfo}>
        <h3 className={styles.userTitle}>Email:</h3>
        <p className={styles.userEmail}>{userModal.email || "N/A"}</p>
      </div>

      <div className={styles.blockInfo}>
        <h3 className={styles.userTitle}>Phone:</h3>
        <p className={styles.userPhone}>{userModal.phone || "N/A"}</p>
      </div>

      <div className={styles.blockInfo}>
        <h3 className={styles.userTitle}>Address:</h3>
        <p className={styles.userAddress}>{userModal.address || "N/A"}</p>
      </div>
    </div>
  );
};

export default UserModal;
