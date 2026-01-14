import MaterialRow from "./MaterialRow";

const MaterialForm = ({ materials, setMaterials }) => {
  const addMaterial = () => {
    setMaterials([...materials, {
      id: Date.now(),
      name: "",
      qty: 0,
      price: 0,
      totalPrice: 0,
      tax: 0,
      totalAmount: 0,
    }]);
  };

  return (
    <div>
      <h3>Raw Materials</h3>
      {materials.map((m, i) => (
        <MaterialRow
          key={m.id}
          material={m}
          index={i}
          materials={materials}
          setMaterials={setMaterials}
        />
      ))}
      <button type="button" onClick={addMaterial}>Add Material</button>
    </div>
  );
};

export default MaterialForm;
