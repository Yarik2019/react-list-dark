import { useSelector } from "react-redux";
// import UserItem from "../userItem/UserItem.jsx";
import styles from "./ContactsList.module.css";
import { selectFilteredUsers } from "../../redux/users/slice.js";

const ContactsList = () => {
  const users = useSelector(selectFilteredUsers);
  return (
    <div className={styles.blockList}>
      dsadas
      {users.length ? (
        <ul className={styles.usersList}>
          {users.map((user) => (
            <div key={user.id}> dsadas</div>
            // <UserItem key={user.id} user={user} />
          ))}
        </ul>
      ) : (
        <p className={styles.text}>Нажаль пустий список</p>
      )}
    </div>
  );
};

export default ContactsList;
