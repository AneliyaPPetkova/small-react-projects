import { Category } from "../../data/types";

type MenuCategoriesProps = {
  categories: Array<Category>;
  onFilter: (category: string) => void;
};

const MenuCategories = ({ categories, onFilter }: MenuCategoriesProps) => {
  return (
    <div className="btn-container">
      {categories &&
        categories.length > 0 &&
        categories.map(({ id, title }: Category) => {
          return (
            <button
              type="button"
              key={id}
              className="filter-btn"
              onClick={() => onFilter(title)}
            >
              {title}
            </button>
          );
        })}
    </div>
  );
};

export default MenuCategories;
