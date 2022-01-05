import PhoneList from "../Components/Phones/PhoneList";

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
  return (
    <div>
      <PhoneList phone={DATA} />
    </div>
  );
};

export default AllPhones;
