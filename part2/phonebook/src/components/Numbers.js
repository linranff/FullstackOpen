const Numbers = ({ persons }) => {
  return persons.map((person) => (
    <li key={person.name}>
      {person.name} {person.phone}
    </li>
  ));
};

export default Numbers;
