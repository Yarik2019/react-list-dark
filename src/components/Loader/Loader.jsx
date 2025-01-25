import { BallTriangle } from "react-loader-spinner";
import styles from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={styles.loader}>
      <BallTriangle
        height="80"
        width="80"
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
