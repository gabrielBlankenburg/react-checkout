import React, { useState } from "react";
import ReactCheckout from "./library";
import Menu from "./components/Menu";
import "./styles.css";

const defaultSettings = {
  checkoutForm: {
    numberPlaceholder: "NUMBER",
    namePlaceholder: "NAME",
    expirationPlaceholder: "EXPIRATION",
    cvvPlaceholder: "CVV",
    buttonText: "CHECKOUT",
    onSubmit: () => {}
  },
  card: {
    numberPlaceholderSymbol: "•",
    namePlaceholder: "Full Name",
    expirationLabelPlaceholder: "Expiration",
    expirationValuePlaceholder: "MM/AA",
    cvvPlaceholderSymbol: "•"
  },
  background: "transparent",
  padding: "0"
};

export default function App() {
  const [settings, setSettings] = useState(defaultSettings);

  const setValue = (field, value) => {
    setSettings({
      ...settings,
      [field]: value
    });
  };

  return (
    <div className="App">
      <Menu settings={settings} setValue={setValue}  />
      <ReactCheckout settings={settings} />
    </div>
  );
}
