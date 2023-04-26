import { useState } from "react";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const textChangeHandler = () => {
    setChangedText((prevState) => setChangedText(!prevState));
  };

  return (
    <div>
      <h1>Hello</h1>
      {!changedText && <p>Good to see you</p>}
      {changedText && <p>GREAT to see you</p>}
      <button onClick={textChangeHandler}>Change Text</button>
    </div>
  );
};

export default Greeting;
