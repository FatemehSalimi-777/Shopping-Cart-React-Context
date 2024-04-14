import { createQueryObject } from "../helpers/createQueryObject";
import { FaListUl } from "react-icons/fa";
import styles from "./SideBar.module.css";
import { categories } from "../constants/categoryList";

function SideBar({ setQuery, query }) {
  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();

    if (tagName !== "LI") return;
    setQuery((query) => createQueryObject(query, { category: category }));
  };
  return (
    <div className={styles.sidebar}>
      <div>
        <FaListUl />
        <p>Categories</p>
      </div>
      <ul onClick={categoryHandler}>
        {categories.map((category) => (
          <li
            key={category.id}
            className={
              category.type.toLowerCase() === query.category
                ? styles.selected
                : null
            }
          >
            {category.type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
