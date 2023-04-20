import { Link } from "react-router-dom";

const ProductsPage = () => {
  return (
    <div>
      <h1>Products Page</h1>
      <p>
        Go to <Link to="/">home</Link>
      </p>
    </div>
  );
};

export default ProductsPage;
