import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct, updateProduct } from "../redux/features/products/productSlice";
import { calculateProductTotal } from "../utils/calculations";
import { UNITS, CATEGORIES } from "../utils/constants";
import MaterialForm from "./MaterialForm";
import { useNavigate } from "react-router-dom";

const ProductForm = ({ existingProduct }) => {
  const [name, setName] = useState(existingProduct?.name || "");
  const [unit, setUnit] = useState(existingProduct?.unit || "");
  const [category, setCategory] = useState(existingProduct?.category || "");
  const [expiry, setExpiry] = useState(existingProduct?.expiry || "");
  const [materials, setMaterials] = useState(existingProduct?.materials || []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalCost = calculateProductTotal(materials);

  const handleSubmit = e => {
    e.preventDefault();

    const productData = {
      id: existingProduct?.id,
      name,
      unit,
      category,
      expiry,
      materials,
      totalCost,
    };

    existingProduct
      ? dispatch(updateProduct(productData))
      : dispatch(addProduct(productData));

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Product Name" value={name} onChange={e => setName(e.target.value)} />
      
      <select value={unit} onChange={e => setUnit(e.target.value)}>
        <option value="">Unit</option>
        {UNITS.map(u => <option key={u}>{u}</option>)}
      </select>

      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option value="">Category</option>
        {CATEGORIES.map(c => <option key={c}>{c}</option>)}
      </select>

      <input type="date" value={expiry} onChange={e => setExpiry(e.target.value)} />

      <MaterialForm materials={materials} setMaterials={setMaterials} />

      <h4 className="total">Total Cost: ₹ {totalCost}</h4>


      <button type="submit">Save</button>
    </form>
  );
};

export default ProductForm;
