import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const textChangeHandler = () => {
    setChangedText((prevState) => setChangedText(!prevState));
  };

  return (
    <div>
      <h1>Hello</h1>
      {!changedText && <Output>Good to see you</Output>}
      {changedText && <p>GREAT to see you</p>}
      <button onClick={textChangeHandler}>Change Text</button>
    </div>
  );
};

export default Greeting;
