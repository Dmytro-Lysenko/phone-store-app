import { useState } from "react";
import AddNewBookForm from "../Components/Phones/AddNewBookForm";
import ErrorModal from "../Components/UI/ErrorModal";
import LoadingIndicator from "../Components/UI/LoadingIndicator";

const AddNewPhone = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const addNewPhoneHandler = (
    phoneModel,
    phoneDisplay,
    phonePrice,
    phonePhoto
  ) => {
    if (phonePrice > 1400) {
      setError("Wrong price! Max price 1400$");
    } else {
      const newPhone = {
        model: phoneModel,
        display: phoneDisplay,
        price: phonePrice,
        photo: phonePhoto,
      };
      setIsLoading(true);
      fetch(
        "https://react-app-81b61-default-rtdb.europe-west1.firebasedatabase.app/phones.json",
        {
          method: "POST",
          body: JSON.stringify(newPhone),
        }
      ).then(() => {
        setIsLoading(false);
        setError("Failed to fetch!!! Check the address!");
      });
    }
  };

  const closeErrorModalHandler = () => {
    setIsLoading(false);
    setError(null);
  };

  return (
    <div>
      <h1>Add New Book</h1>

      {isLoading && <LoadingIndicator />}
      {error && (
        <ErrorModal onClose={closeErrorModalHandler}>{error}</ErrorModal>
      )}
      <AddNewBookForm OnAddPhone={addNewPhoneHandler} />
    </div>
  );
};

export default AddNewPhone;
