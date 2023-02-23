import NavigationBar from "../components/NavigationBar";
import { ReviewsList } from "../components/Reviews/ReviewsList";
import { FaBeer } from "react-icons/fa";

export const Reviews = () => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <main>
        <div className="title">
          <h1>Testimonials</h1>
          <div className="underline"></div>
          <h3> Lets go for a <FaBeer />? </h3>
        </div>
        <ReviewsList />
      </main>
    </>
  );
};
