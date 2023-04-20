import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];

const ProductsPage = () => {
  return (
    <div>
      <h1>Products Page</h1>
      <p>
        Go to <Link to="/">home</Link>
      </p>

      <ul>
        {PRODUCTS.map((p) => {
          return (
            <li key={p.id}>
              <Link to={`/products/${p.id}`}>{p.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductsPage;
