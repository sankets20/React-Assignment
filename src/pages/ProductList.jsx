import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductList = () => {
  const products = useSelector(state => state.products);

  return (
    <div>
      <h2>Product List</h2>
      <Link to="/add"><button>Add Product</button></Link>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Total Cost</th>
            <th>Raw Materials</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td>
                <Link to={`/edit/${p.id}`}>{p.name}</Link>
              </td>
              <td>{p.category}</td>
              <td>₹ {p.totalCost}</td>
              <td>{p.materials.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
