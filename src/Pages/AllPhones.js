import { useEffect, useState } from "react";
import PhoneList from "../Components/Phones/PhoneList";
import LoadingIndicator from "../Components/UI/LoadingIndicator";

const DATA = [
  {
    id: 1,
    model: "Samsung",
    display: "6.4",
    price: 600,
    photo: "https://content2.rozetka.com.ua/goods/images/preview/245951013.jpg",
  },
  {
    id: 2,
    model: "Iphone",
    price: 900,
    display: "6.1",
    photo: "https://content2.rozetka.com.ua/goods/images/preview/37389483.jpg",
  },
];

const AllPhones = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-app-81b61-default-rtdb.europe-west1.firebasedatabase.app/phones.json"
    )
      .then((response) => response.json())
      .then((result) => {
        setIsLoading(false);

      })
      .catch((err) => {
        setError("Failed to fetch! Something went wrong");
      });
  }, []);

  return (
    <div>
      <div>
        <h1>Phone List</h1>
        {isLoading && <LoadingIndicator />}
      </div>
      <PhoneList phone={DATA} />
    </div>
  );
};

export default AllPhones;
