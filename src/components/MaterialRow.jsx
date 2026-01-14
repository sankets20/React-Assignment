import { calculateMaterial } from "../utils/calculations";

const MaterialRow = ({ material, index, materials, setMaterials }) => {
  const updateField = (field, value) => {
    const updated = [...materials];
    updated[index][field] = value;

    const { qty, price } = updated[index];
    const calc = calculateMaterial(Number(qty), Number(price));
    updated[index] = { ...updated[index], ...calc };

    setMaterials(updated);
  };

  return (
    <div className="material-row">
      <input placeholder="Material Name" onChange={e => updateField("name", e.target.value)} />
      <input type="number" placeholder="Qty" onChange={e => updateField("qty", e.target.value)} />
      <input type="number" placeholder="Price" onChange={e => updateField("price", e.target.value)} />
      <span>Total: ₹ {material.totalAmount}</span>
      
    </div>
  );
};

export default MaterialRow;
