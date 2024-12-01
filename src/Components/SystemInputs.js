import React, { useContext, useEffect } from "react";
import CreateBtn from "./CreateBtn";
import "./SystemInputs.css";
import productContext from "../context/ProductsContext";
export default function SystemInputs() {
  const {
    deviceName,
    setDeviceName,
    price,
    setPrice,
    tax,
    setTax,
    ads,
    setAds,
    discount,
    setDiscount,
    total,
    setTotal,
    deviceCount,
    setDevicesCount,
    deviceCategory,
    setDeviceCategory,
    handleAddProduct,
    deviceNameError,
    priceError,
    countError,
    categoryError,
    deviceNameInputRef,
    priceInputRef,
    countInputRef,
    categoryInputRef,
  } = useContext(productContext);

  // const deviceNameInputRef = useRef();

  const handleAddProductAndFocus = () => {
    handleAddProduct();
  };

  useEffect(() => {
    function calculateTotal() {
      var totalResult = price + tax + ads - discount;
      if (totalResult < 0) totalResult = total;
      setTotal(totalResult);
    }
    calculateTotal();
  }, [total, price, tax, ads, discount, setTotal]);
  console.log(deviceName);
  return (
    <div className="SystemInputs">
      <form>
        {deviceNameError && (
          <p className="validation-message">{deviceNameError}</p>
        )}
        <input
          ref={deviceNameInputRef}
          type="text"
          placeholder="Enter the device's name:"
          className="form-control mb-3"
          value={deviceName}
          onChange={(e) => setDeviceName(e.target.value)}
        />

        {priceError && <p className="validation-message">{priceError}</p>}
        <div
          className="priceResultInputs mb-3"
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "nowrap",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <input
            type="number"
            placeholder="Price:"
            ref={priceInputRef}
            className="form-control"
            style={{ width: "25%" }}
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
          <input
            type="number"
            placeholder="Tax:"
            className="form-control"
            style={{ width: "25%" }}
            value={tax}
            onChange={(e) => setTax(Number(e.target.value))}
          />
          <input
            type="number"
            placeholder="ADS:"
            className="form-control"
            style={{ width: "25%" }}
            value={ads}
            onChange={(e) => setAds(Number(e.target.value))}
          />
          <input
            type="number"
            placeholder="Discount:"
            className="form-control"
            style={{ width: "25%" }}
            value={discount}
            onChange={(e) => setDiscount(Number(e.target.value))}
          />
        </div>

        <p className="mb-3 text-center">
          Total: <span>${total}</span>
        </p>
        {countError && <p className="validation-message">{countError}</p>}
        <input
          type="number"
          placeholder="Enter how many devices you want to add:"
          ref={countInputRef}
          className="form-control mb-3"
          value={deviceCount}
          onChange={(e) => setDevicesCount(Number(e.target.value))}
        />
        {categoryError && <p className="validation-message">{categoryError}</p>}
        <input
          type="text"
          placeholder="Enter the device's category:"
          ref={categoryInputRef}
          className="form-control mb-3"
          value={deviceCategory}
          onChange={(e) => setDeviceCategory(e.target.value)}
        />
        <div className="CreateBtn text-center">
          <CreateBtn handleAddProduct={handleAddProductAndFocus} />
        </div>
      </form>
    </div>
  );
}
