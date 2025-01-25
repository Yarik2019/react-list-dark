import styles from "./FilterBox.module.css";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter, handleSort } from "../../redux/filters/slice.js";
import {
  selectedNameFilter,
  selectedSortKey,
  selectedSortOrder,
} from "../../redux/filters/selectors.js";
const FilterBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectedNameFilter);
  const sortKey = useSelector(selectedSortKey);
  const sortOrder = useSelector(selectedSortOrder);

  const handleSortClick = (key) => {
    if (sortKey === key) {
      dispatch(
        handleSort({ key, order: sortOrder === "asc" ? "desc" : "asc" })
      );
    } else {
      dispatch(handleSort({ key, order: "asc" }));
    }
  };
  return (
    <section className={styles.filterBox}>
      <div className={styles.blockInput}>
        <input
          className={styles.input}
          type="text"
          value={filter}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
          placeholder="Search or filter the list..."
        />
      </div>

      <div className={styles.sortControls}>
        <button onClick={() => handleSortClick("name")}>
          Sort Name ({sortKey === "name" ? sortOrder : "asc"})
        </button>
        <button onClick={() => handleSortClick("age")}>
          Sort Age ({sortKey === "age" ? sortOrder : "asc"})
        </button>
      </div>
    </section>
  );
};

export default FilterBox;
