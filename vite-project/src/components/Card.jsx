function Card(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.description}</h2>
      <h1>{props.fav}</h1>
      <ul>
        {props.likes.map((i, index) => (
          <li key={index}>{i}</li>
        ))}
      </ul>
    </div>
  );
}
export default Card;
