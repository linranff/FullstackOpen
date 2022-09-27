import { useState } from "react";
import Numbers from "./components/Numbers";
import Filter from "./components/Filter";
import Form from "./components/Form";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "040-123456", id: 1 },
    { name: "Ada Lovelace", phone: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", phone: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", phone: "39-23-6423122", id: 4 },
  ]);

  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  //Object keys-values comparing logic
  //somewhat complicated indeed
  function areTheseObjectsEqual(first, second) {
    if (
      first === null ||
      first === undefined ||
      second === null ||
      second === undefined
    ) {
      return first === second;
    }

    if (first.constructor !== second.constructor) {
      return false;
    }

    if (first instanceof Function || first instanceof RegExp) {
      return first === second;
    }

    if (first === second || first.valueOf() === second.valueOf()) {
      return true;
    }

    if (first instanceof Date) return false;

    if (Array.isArray(first) && first.length !== second.length) {
      return false;
    }

    if (!(first instanceof Object) || !(second instanceof Object)) {
      return false;
    }

    const firstKeys = Object.keys(first);

    const allKeysExist = Object.keys(second).every(
      (i) => firstKeys.indexOf(i) !== -1
    );

    const allKeyValuesMatch = firstKeys.every((i) =>
      areTheseObjectsEqual(first[i], second[i])
    );

    return allKeysExist && allKeyValuesMatch;
  }

  //main logic

  //form submit event handler

  //input onchange event handler for controlled component
  const changeName = (e) => {
    setNewName(e.target.value);
  };

  const changePhone = (e) => {
    setNewPhone(e.target.value);
  };

  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  const out =
    searchTerm === ""
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchHandler={searchHandler} searchTerm={searchTerm} />
      <h3>Add a New</h3>

      <Form
        persons={persons}
        areTheseObjectsEqual={areTheseObjectsEqual}
        setPersons={setPersons}
        setNewName={setNewName}
        setNewPhone={setNewPhone}
        newName={newName}
        newPhone={newPhone}
        changeName={changeName}
        changePhone={changePhone}
      />
      <h2>Numbers</h2>
      <ul>
        <Numbers persons={out} />
      </ul>
    </div>
  );
};

export default App;
