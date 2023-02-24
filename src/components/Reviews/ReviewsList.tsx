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
  
  const prevReview = () => {
    setIndex((index) => {
      return checkIndex(index - 1);
    });
  };

  const nextReview = () => {
    setIndex((index) => {
      return checkIndex(index + 1);
    });
  };

  const randomReview = () => {
    setIndex(() => {
      return getRandomIndex();
    });
  };

  function getRandomIndex() {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    while (randomNumber === index) {
      randomNumber = Math.floor(Math.random() * reviews.length);
    }
    return randomNumber;
  }

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
