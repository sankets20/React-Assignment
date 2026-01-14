import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductForm from "../components/ProductForm";

const EditProduct = () => {
  const { id } = useParams();
  const product = useSelector(state =>
    state.products.find(p => p.id === id)
  );

  return (
    <div>
      <h2>Edit Product</h2>
      {product && <ProductForm existingProduct={product} />}
    </div>
  );
};

export default EditProduct;
