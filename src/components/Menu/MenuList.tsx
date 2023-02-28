import { useEffect, useState } from "react";
import MenuCategories from "./MenuCategories";
import menu from "../../data/menu";
import { Category, MenuItem } from "../../data/types";
import MenuListItem from "./MenuListItem";

const MenuList = () => {
  const [menuItems, setMenuItems] = useState<Array<MenuItem>>(menu);
  const [categories, setCategories] = useState<Array<Category>>();

  const filterMenu = (category: string) => {
    if (category !== "all") {
      let filteredMenuItems = menu.filter((item) => item.category === category);
      setMenuItems(filteredMenuItems);
    } else {
      setMenuItems(menu);
    }
  };
  useEffect(() => {
    let tempCategories = menu
      .map((menuItem) => {
        return menuItem.category;
      })
      .filter((x, i, a) => a.indexOf(x) == i) // Distinct the categories
      .map((categoryTitle, index) => {
        return { id: index + 1, title: categoryTitle };
      });

    if (tempCategories.length !== 0)
      setCategories([{ id: 0, title: "all" }, ...tempCategories]);
  }, []);

  return (
    <>
      {categories && categories.length > 0 && (
        <MenuCategories categories={categories} onFilter={filterMenu} />
      )}
      <div className="section-center">
        {menuItems.map((item: MenuItem) => {
          return <MenuListItem key={item.id} {...item} />;
        })}
      </div>
    </>
  );
};

export default MenuList;
