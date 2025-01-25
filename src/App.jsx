import { useEffect } from "react";
import styles from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./redux/users/operations.js";
import { selectIsLoading, selectIsError } from "./redux/users/selectors.js";
import ContactsList from "./components/ContactsList/ContactsList.jsx";
import FilterBox from "./components/FilterBox/FilterBox.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Loader from "./components/Loader/Loader.jsx";
import { Toaster } from "react-hot-toast";
import ErrorMessages from "./components/ErrorMessages/ErrorMessages.jsx";
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
          {isError && <ErrorMessages message={isError} />}
          {!isLoading && !isError && <ContactsList />}
        </section>
      </main>
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
