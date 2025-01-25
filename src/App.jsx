import { useEffect } from "react";
import styles from "./App.module.css";
import UsersList from "./components/usersList/UsersList";
import FilterBox from "./components/FilterBox/FilterBox";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./redux/users/operations";
import { selectIsLoading, selectIsError } from "./redux/users/selectors";
import Loader from "./components/Loader/Loader";
import { Toaster } from "react-hot-toast";
function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <>
      <Header />
      <main className="container">
        <section className={styles.sectionFilter}>
          <FilterBox />
        </section>
        <section className={styles.sectionList}>
          {isLoading && !isError && <Loader />}
          {isError && <div>errr</div>}
          {!isLoading && !isError && <UsersList />}
        </section>
      </main>
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
