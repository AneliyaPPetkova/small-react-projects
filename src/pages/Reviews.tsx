import NavigationBar from "../components/NavigationBar";
import { ReviewsList } from "../components/Reviews/ReviewsList";

export const Reviews = () => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <main>
        <div className="title">
          <h1>Testimonials</h1>
          <div className="underline"></div>
        </div>
        <ReviewsList />
      </main>
    </>
  );
};
