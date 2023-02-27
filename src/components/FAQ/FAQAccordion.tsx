import { useState } from "react";
import questions from "../../data/faq";
import { FAQ } from "../../data/types";
import FAQItem from "./FAQItem";

const FAQAccordion = () => {
  const [faqItems, setFaqItems] = useState<Array<FAQ>>(questions);
  return (
    <div>
      {faqItems.map((faqItem: FAQ) => {
        return <FAQItem key={faqItem.id} {...faqItem} />;
      })}
    </div>
  );
};

export default FAQAccordion;
