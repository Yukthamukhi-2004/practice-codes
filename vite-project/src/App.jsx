import Card from "./components/Card";

function App() {
  const details = {
    name: "Yuktha",
    description: "Software Engineer I role",
    fav: "Interests",
    likes: ["Ionic", "Open Source", "App Dev"],
  };

  return (
    <div>
<<<<<<< HEAD
      <AnotherButton count={count} setCount={setCount}></AnotherButton>
      <AnotherButton count={count + 100} setCount={setCount}></AnotherButton>
      <AnotherButton count={count - 10} setCount={setCount}></AnotherButton>
      <AnotherButton count={count} setCount={setCount * 10}></AnotherButton>
=======
      <Card
        name={details.name}
        description={details.description}
        fav={details.fav}
        likes={details.likes}
      />
>>>>>>> 859fc3c (Update practice codes and App.jsx in src)
    </div>
  );
}

export default App;
