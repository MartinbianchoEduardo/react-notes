import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate(); //switch to a different route from inside code

  const navigateHandler = () => {
    navigate("/products");
  };

  return (
    <div>
      <h1>My home page</h1>
      <p>
        Go to <Link to="/products">products</Link>
      </p>
      <button onClick={navigateHandler}>navigate using useNavigate</button>
    </div>
  );
};

export default HomePage;
