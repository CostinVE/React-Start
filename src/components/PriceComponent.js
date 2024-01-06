import React from "react";
import pricingData from "../assets/data/pricingData";

const priceWrapperComponent = {
  display: "flex",
  justifyContent: "center",
  maxWidth: "1200px",
  gap: "20px",
  paddingTop: "20px",
  backgroundColor: 'antiquewhite'
};

const priceCard = {
  padding: "20px",
  border: "1px solid black",
  borderRadius: "10px",
};



function PriceCardComponent({ title, description, footer, features }) {

  return (

    <div style={priceCard}>
      {title && <h3>{title}</h3> }
      <p>{description}</p>
      <p>{footer}</p>
      <ul>
        {features.map((item) => (
          <li key={title + item}>(item)</li>
        ))}
      </ul>
    </div>
  );
}

function PriceComponent() {  console.log(pricingData)
  return (
    <div style={priceWrapperComponent}>
    {pricingData &&
      pricingData.map(({ id, name, description, price , features}) =>   (<PriceCardComponent
      title={name}
      description={description}
      footer={price}
      features={features}
      key={id}
    />))}
    </div>
  );
}

export default PriceComponent;
