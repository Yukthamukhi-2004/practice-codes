import "../styles/card.css";

function Card(props) {
  return (
    <div className="card">
      <h1>{props.name}</h1>
      <h2>{props.description}</h2>
      <h1>{props.fav}</h1>
      <ul>
        {props.likes.map((i, index) => (
          <li key={index}>{i}</li>
        ))}
      </ul>
      <div className="socials">
        <button onClick={() => window.open(props.socials.LinkedIn)}>
          LinkedIn
        </button>
        <button onClick={() => window.open(props.socials.Twitter)}>
          Twitter
        </button>
        <button onClick={() => window.open(props.socials.Github)}>
          GitHub
        </button>
      </div>
    </div>
  );
}
export default Card;
