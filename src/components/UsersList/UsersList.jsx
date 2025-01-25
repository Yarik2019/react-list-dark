import { useSelector } from "react-redux";
import UserItem from "../userItem/UserItem";
import styles from "./UsersList.module.css";
// import { selectUsers } from "../../redux/users/selectors";
import { selectFilteredUsers } from "../../redux/users/slice";
const UsersList = () => {
  const users = useSelector(selectFilteredUsers);

  return (
    <div className={styles.blockList}>
      {users.length ? (
        <ul className={styles.usersList}>
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </ul>
      ) : (
        <p className={styles.text}>Нажаль пустий список</p>
      )}
    </div>
  );
};

export default UsersList;
