import { createContext, useEffect, useRef, useState } from "react";

const productContext = createContext();

export function ProductsProvider({ children }) {
  const [deviceName, setDeviceName] = useState("");
  const [price, setPrice] = useState("");
  const [tax, setTax] = useState("");
  const [ads, setAds] = useState("");
  const [discount, setDiscount] = useState("");
  const [total, setTotal] = useState(0);
  const [deviceCount, setDevicesCount] = useState("");
  const [deviceCategory, setDeviceCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProductId, setCurrentProductId] = useState(null);
  const [deviceNameError, setDeviceNameError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [countError, setCountError] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const deviceNameInputRef = useRef();
  const priceInputRef = useRef();
  const countInputRef = useRef();
  const categoryInputRef = useRef();
  useEffect(() => {
    deviceNameInputRef.current?.focus();
  }, []);
  const handleAddProduct = () => {

    if (deviceName === "") {
      setDeviceNameError("Please enter the Product's name");
      deviceNameInputRef.current?.focus();
      return false;
    } else {
      setDeviceNameError("");
    }
    if (price === "") {
      setPriceError("Please enter the Product's price");
      priceInputRef.current?.focus();
      return false;
    } else {
      setPriceError("");
    }
    if (deviceCount === "") {
      setCountError("Please enter the Product's Quantity");
      countInputRef.current?.focus();
      return false;
    } else {
      setCountError("");
    }
    if (deviceCategory === "") {
      setCategoryError("Please enter the Product's Category");
      categoryInputRef.current?.focus();
      return false;
    } else {
      setCategoryError("");
    }

    if (isEditing) {
      const updatedProducts = products.map((product) =>
        product.id === currentProductId
          ? {
              ...product,
              title: deviceName,
              price,
              tax,
              ads,
              discount,
              total,
              deviceCount: Number(deviceCount),
              category: deviceCategory,
            }
          : product
      );
      setProducts(updatedProducts);
      setIsEditing(false);
      setCurrentProductId(null);
    } else {
      const newProduct = {
        id: products.length + 1,
        title: deviceName,
        price,
        tax,
        ads,
        discount,
        total,
        deviceCount: Number(deviceCount),
        category: deviceCategory,
      };
      setProducts([...products, newProduct]);
    }

    setDeviceName("");
    setPrice("");
    setTax("");
    setAds("");
    setDiscount("");
    setTotal(0);
    setDeviceCategory("");
    setDevicesCount("");
    deviceNameInputRef.current?.focus();
  };

  const deleteProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts
        .map((product) =>
          product.id === id && product.deviceCount > 0
            ? { ...product, deviceCount: product.deviceCount - 1 }
            : product
        )
        .filter((product) => product.deviceCount > 0)
    );
  };

  const updateProduct = (id) => {
    const productToEdit = products.find((product) => product.id === id);
    if (productToEdit) {
      setDeviceName(productToEdit.title);
      setPrice(productToEdit.price);
      setTax(productToEdit.tax);
      setAds(productToEdit.ads);
      setDiscount(productToEdit.discount);
      setTotal(productToEdit.total);
      setDevicesCount(productToEdit.deviceCount);
      setDeviceCategory(productToEdit.category);
      setIsEditing(true);
      setCurrentProductId(id);
    }
  };

  return (
    <productContext.Provider
      value={{
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
        isEditing,
        products,
        deleteProduct,
        updateProduct,
        deviceNameError,
        priceError,
        countError,
        categoryError,
        deviceNameInputRef,
        priceInputRef,
        countInputRef,
        categoryInputRef,
      }}
    >
      {children}
    </productContext.Provider>
  );
}

export default productContext;
