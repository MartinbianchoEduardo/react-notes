import { Link } from "react-router-dom";
import MainNav from "../components/MainNav";

const HomePage = () => {
  return (
    <div>
      <h1>My home page</h1>
      <p>
        Go to <Link to="/products">products</Link>
      </p>
    </div>
  );
};

export default HomePage;
