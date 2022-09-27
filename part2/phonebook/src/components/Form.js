const Form = ({
  newName,
  newPhone,
  changeName,
  changePhone,
  persons,
  areTheseObjectsEqual,
  setPersons,
  setNewName,
  setNewPhone,
}) => {
  const submitHandler = (e) => {
    e.preventDefault();
    const newObject = { name: `${newName}`, phone: `${newPhone}` };

    if (
      persons.some((i) => {
        return areTheseObjectsEqual(i.name, newObject.name);
      })
    ) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(newObject));
      console.log(persons);
    }
    setNewName("");
    setNewPhone("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        name: <input value={newName} onChange={changeName} />
      </div>
      <div>
        phone: <input value={newPhone} onChange={changePhone} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Form;
