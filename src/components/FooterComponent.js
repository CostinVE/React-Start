import React from "react";
import { FooterItem } from "./FooterItem";

const footerStyle = {
  textAlign: "center",
  color: "white",
  fontSize: "20px",
  backgroundColor: "black",
};

function FooterComponent() {
  return (
    <div style={footerStyle}>
      <p>This should be the mighty footer.</p>
      <div style={{ display: "flex", justifyContent: "space-around", bottom: 0,}}>
        <FooterItem text={"W3SCHOOLS"} />
        <FooterItem text={"@React.Dev"} />
        <FooterItem text={"Adelin Sofrag"} />
        <FooterItem text={"GPT.exe"} />
      </div>
    </div>
  );
}

export default FooterComponent;
