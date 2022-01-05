import PhoneItem from "./PhoneItem";

const PhoneList = (props) => {

  return (
    <div>
      <h1>Phone List</h1>
      {props.phone.map((phone) => {
        return (
          <PhoneItem
            key={phone.id}
            model={phone.model}
            display={phone.display}
            price={phone.display}
            photo={phone.photo}
          />
        );
      })}
    </div>
  );
};

export default PhoneList;
