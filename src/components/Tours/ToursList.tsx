import { useEffect, useState } from "react";
import Loading from "./Loading";
import TourCard from "./Tour";
import { Tour } from "./Types";

const url = "https://course-api.com/react-tours-project";
export const ToursList = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  } else {
    return (
      <main>
        <section className="container">
          <div className="title">
            <h1>Our Guided Tours</h1>
            <div className="underline"></div>
            <div>
              {tours.map((tour: Tour) => {
                return <TourCard key={tour.id} {...tour}></TourCard>;
              })}
            </div>
          </div>
        </section>
      </main>
    );
  }
};
