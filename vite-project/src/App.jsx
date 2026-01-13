import Card from "./components/Card.jsx";

function App() {
  const details = {
    name: "Yukthamukhi",
    description: "Software Engineer 1 role",
    fav: "Interest",
    likes: ["Ionic", "Open Source", "Open Dev"],
  };

  return (
    <div>
      <Card
        name={details.name}
        description={details.description}
        fav={details.fav}
        likes={details.likes}
      />
    </div>
  );
}

export default App;
