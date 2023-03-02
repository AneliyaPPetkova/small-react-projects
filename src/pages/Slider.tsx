import NavigationBar from "../components/NavigationBar";
import SliderList from "../components/Slider/SliderList";

const Slider = () => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <main>
        <section>
          <div className="title">
            <h1>Testimonials</h1>
            <div className="underline"></div>
          </div>
          <SliderList />
        </section>
      </main>
    </>
  );
};

export default Slider;
