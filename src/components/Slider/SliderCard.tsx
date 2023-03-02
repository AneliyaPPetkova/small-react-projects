import { FaQuoteRight } from "react-icons/fa";
import { Review } from "../../data/types";

type SliderCardProps = {
  review: Review;
  itemClass: string;
};

const SliderCard = ({ review, itemClass }: SliderCardProps) => {
  const { name, image, job, text } = review;

  return (
    <article className={`reviews ${itemClass}`}>
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
    </article>
  );
};

export default SliderCard;
