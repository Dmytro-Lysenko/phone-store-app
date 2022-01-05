const PhoneItem = (props) => {
  return (
    <div>
      <section>
        <h2>{props.model}</h2>
        <h1>{props.display}</h1>
        <p>{props.price}</p>
        <div>
          <img src={props.photo} alt={props.model} />
        </div>
      </section>
    </div>
  );
};

export default PhoneItem;
