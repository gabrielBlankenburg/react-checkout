import React from "react";
import CheckoutCard from "./templates/CheckoutCard";
import "./main.css";

const ExampleComponent = ({data, settings}) => {
  return <CheckoutCard data={data} settings={settings} />;
};

export default ExampleComponent;
