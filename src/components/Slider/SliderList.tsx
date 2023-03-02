import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import reviews from "../../data/reviews";
import { ReviewCard } from "../Reviews/ReviewCard";

const SliderList = () => {
  const [index, setIndex] = useState(0);

  const checkIndex = (tempIndex: number) => {
    if (tempIndex > reviews.length - 1) return 0;
    if (tempIndex < 0) return reviews.length - 1;

    return tempIndex;
  };

  const prevReview = () => {
    setIndex((i: number) => {
      return checkIndex(i - 1);
    });
  };

  const nextReview = () => {
    setIndex((i: number) => {
      return checkIndex(i + 1);
    });
  };

  return (
    <div className="slider">
      <article className="reviews">
        <ReviewCard {...reviews[index]} />
      </article>
      <button className="prev" onClick={prevReview}>
        <FaChevronLeft />
      </button>
      <button className="next" onClick={nextReview}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default SliderList;
