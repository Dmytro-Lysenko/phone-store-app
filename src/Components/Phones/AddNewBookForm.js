import { useState } from "react";

const AddNewBookForm = (props) => {
  const [enteredModel, setEnteredModel] = useState("");
  const [enteredDisplay, setEnteredDisplay] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredPhoto, setEnteredPhoto] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    props.OnAddPhone(enteredModel, enteredDisplay, enteredPrice, enteredPhoto)
    setEnteredModel("");
    setEnteredDisplay("");
    setEnteredPrice("");
    setEnteredPhoto("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="model">Model: </label>
        <input
          minLength="4"
          type="text"
          id="model"
          value={enteredModel}
          onChange={(e) => setEnteredModel(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="display">Display: </label>
        <input
          type="text"
          id="display"
          value={enteredDisplay}
          onChange={(e) => setEnteredDisplay(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="price">Price: </label>
        <input
          type="number"
          id="price"
          value={enteredPrice}
          onChange={(e) => setEnteredPrice(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="photo">Photo: </label>
        <input
          type="url"
          id="photo"
          value={enteredPhoto}
          onChange={(e) => setEnteredPhoto(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Add phone</button>
      </div>
    </form>
  );
};

export default AddNewBookForm;
