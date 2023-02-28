import MenuList from "../components/Menu/MenuList";
import NavigationBar from "../components/NavigationBar";

export const Menu = () => {
  return (
    <>
      <NavigationBar />
      <main>
        <section className="menu">
          <div className="title">
            <h1>Menu</h1>
            <div className="underline"></div>
          </div>
          <MenuList />
        </section>
      </main>
    </>
  );
};
