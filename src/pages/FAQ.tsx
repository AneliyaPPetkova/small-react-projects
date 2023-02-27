import FAQAccordion from "../components/FAQ/FAQAccordion";
import NavigationBar from "../components/NavigationBar";

export const FAQ = () => {
  return (
    <>
      <NavigationBar />
      <main>
        <section>
          <div className="title">
            <h1>Frequently Asked Questions</h1>
            <div className="underline"></div>
          </div>
          <div className="faq-list">
            <h3>General Questions</h3>
            <FAQAccordion />
          </div>
        </section>
      </main>
    </>
  );
};
