import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FAQ } from "../../data/types";

const FAQItem = ({ title, info }: FAQ) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button
          className="btn"
          onClick={() => setShowAnswer((currentState) => !currentState)}
        >
          {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showAnswer && <p>{info}</p>}
    </article>
  );
};

export default FAQItem;
