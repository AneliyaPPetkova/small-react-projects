import NavigationBar from "../components/NavigationBar";
import { ToursList } from "../components/Tours/ToursList";

export const Tours = () => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <main>
        <ToursList />
      </main>
    </>
  );
};
