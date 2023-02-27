import { useState } from "react";
import { ReviewCard } from "./ReviewCard";
import reviews from "../../data/reviews";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const ReviewsList = () => {
  const [index, setIndex] = useState(0);

  const checkIndex = (tempIndex: number) => {
    if (tempIndex > reviews.length - 1) return 0;
    if (tempIndex < 0) return reviews.length - 1;

    return tempIndex;
  };

  const randomIndex = (currentIndex: number) => {
    let randomNumber: number;

    do {
      randomNumber = Math.floor(Math.random() * reviews.length);
    } while (randomNumber === currentIndex);

    return randomNumber;
  };

  const prevReview = () => {
    setIndex((i) => {
      return checkIndex(i - 1);
    });
  };

  const nextReview = () => {
    setIndex((i) => {
      return checkIndex(i + 1);
    });
  };

  const randomReview = () => {
    setIndex((i) => {
      return randomIndex(i);
    });
  };

  return (
    <article className="reviews">
      <ReviewCard {...reviews[index]} />

      <div className="button-container">
        <button className="prev-btn" onClick={prevReview}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextReview}>
          <FaChevronRight />
        </button>
        <button className="random-btn" onClick={randomReview}>
          Surprise me
        </button>
      </div>
    </article>
  );
};
