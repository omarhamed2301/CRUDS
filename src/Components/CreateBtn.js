import React, { useContext } from "react";
import productContext from "../context/ProductsContext";

export default function CreateBtn({ handleAddProduct }) {
  const { isEditing } = useContext(productContext);

  return (
    <button 
      type="button" 
      className="mb-4" 
      onClick={handleAddProduct}
    >
      {isEditing ? "Update" : "Create"}
    </button>
  );
}
