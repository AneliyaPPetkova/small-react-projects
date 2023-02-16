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

  const removeTour = (id: string) => {
    const newTours = tours.filter((tour: Tour) => tour.id !== id);
    setTours(newTours);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (tours.length === 0) {
    return (
      <section>
        <div className="title">
          <h2>No Guided Tours</h2>
          <div className="underline"></div>
        </div>
        <button className="btn" onClick={fetchTours}>
          Refresh
        </button>
      </section>
    );
  }
  return (
    <section>
      <div className="title">
        <h1>Our Guided Tours</h1>
        <div className="underline"></div>
      </div>
      <div className="tours">
        {tours.map((tour: Tour) => {
          return (
            <TourCard
              key={tour.id}
              {...tour}
              removeTour={removeTour}
            ></TourCard>
          );
        })}
      </div>
    </section>
  );
};
