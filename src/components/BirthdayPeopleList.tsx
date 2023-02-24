import { Person } from "../data/types"

type BirthdayPeopleListProps = {
    people: Array<Person>;
}

const BirthdayPeopleList = ({ people }: BirthdayPeopleListProps): JSX.Element => {
  return (
    <>
      <h2>Birthday People</h2>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
                <h4>{name}</h4>
                <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default BirthdayPeopleList;
