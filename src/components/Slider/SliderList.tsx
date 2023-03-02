import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import reviews from "../../data/reviews";
import { Review } from "../../data/types";
import { ReviewCard } from "../Reviews/ReviewCard";
import SliderCard from "./SliderCard";

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

  useEffect(() => {
    let currentInterval = setInterval(() => {
      nextReview();
    }, 3000);

    return () => clearInterval(currentInterval);
  }, [index]);

  return (
    <div className="slider">
      {reviews.map((review: Review, i: number) => {
        let itemClass = "nextSlide";
        if (i === index) itemClass = "activeSlide";
        if (i === index - 1 || (index === 0 && i === reviews.length - 1))
          itemClass = "lastSlide";

        return (
          <SliderCard key={review.id} itemClass={itemClass} review={review} />
        );
      })}

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
