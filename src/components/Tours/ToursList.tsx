import { useEffect, useState } from "react";
import Loading from "./Loading";
import TourCard from "./TourCard";
import { Tour } from "../../data/Types";
import { toursApiUrl } from "../../data/constants";

export const ToursList = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(toursApiUrl);
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
      <section>
        <div className="title">
          <h1>Our Guided Tours</h1>
          <div className="underline"></div>
        </div>
        <div className="tours">
          {tours.map((tour: Tour) => {
            return <TourCard key={tour.id} {...tour}></TourCard>;
          })}
        </div>
      </section>
    );
  }
};
