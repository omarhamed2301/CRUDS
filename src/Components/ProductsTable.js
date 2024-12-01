import React, { useContext } from "react";
import './ProductsTable.css';
import productContext from "../context/ProductsContext";

export default function ProductsTable() {
  const { products, deleteProduct, updateProduct } = useContext(productContext);

  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr className="text-center">
            <th className="hide-column">Inv. ID</th>
            <th className="hide-column">Name</th>
            <th className="hide-column">Price</th>
            <th className="hide-column">Taxes</th>
            <th className="hide-column">ADS</th>
            <th className="hide-column">Discount</th>
            <th className="hide-column">Category</th>
            <th className="hide-column">Total</th>
            <th className="hide-column">Quantity</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="text-center">
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.tax}</td>
              <td>{product.ads}</td>
              <td>{product.discount}</td>
              <td>{product.category}</td>
              <td>{product.total}</td>
              <td>{product.deviceCount}</td>
              <td>
                <button
                  className="updateBtn"
                  onClick={() => updateProduct(product.id)}
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  className="deleteBtn"
                  onClick={() => deleteProduct(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
