import { useState } from "react";
import { ReviewCard } from "./ReviewCard";
import reviews from "../../data/reviews";

export const ReviewsList = () => {
  const [index, setIndex] = useState(0);

  return (
    <>
      <ReviewCard {...reviews[index]}  />
    </>
  );
};
