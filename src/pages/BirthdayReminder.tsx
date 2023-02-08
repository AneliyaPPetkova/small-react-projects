import peopleData from '../data/people';
import BirthdayPeopleList from "../components/BirthdayPeopleList";
import { useState } from "react";

export const BirthdayReminder = () => {
  const [people, setPeople] = useState(peopleData);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <BirthdayPeopleList people={people}></BirthdayPeopleList>
        <button onClick={() => setPeople([])}>
          clear all
        </button>
      </section>
    </main>
  );
};
