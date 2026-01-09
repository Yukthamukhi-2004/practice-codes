import { useState } from "react";

function App() {
  const [count, setCount] = useState(0); //defining initial state

  return (
    <div>
      <AnotherButton count={count} setCount={setCount}></AnotherButton>
      <AnotherButton count={count + 100} setCount={setCount}></AnotherButton>
      <AnotherButton count={count - 10} setCount={setCount}></AnotherButton>
      <AnotherButton count={count} setCount={setCount * 10}></AnotherButton>
    </div>
  );
}

//component
function AnotherButton(props) {
  function onClickHandler() {
    props.setCount(props.count + 1);
  }
  return <button onClick={onClickHandler}>Counter {props.count}</button>;
}

export default App;
