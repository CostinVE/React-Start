import React from "react";

const navComponentStyle = {
  backgroundColor: "#fafafa",
  color: "black",
  fontSize: "20px",
  display: "flex",
  justifyContent: "space-between",
  maxWidth: "1200px",
  margin: "auto",
};

const menuListStyle = {
  listStyle: "none",
  display: "flex",
  gap: "20px",
  alignItems: "center",
};

const menuWrapperStyle = {
  display: "flex",
  flexWrap: "wrap",
  alignContent: "center",
};

function NavComponent() {
  return (
    <>
      <div style={navComponentStyle}>
        <h1>LOGO</h1>
        <nav style={menuWrapperStyle}>
          <ul style={menuListStyle}>
            <li>TvShows</li>
            <li>Recipes</li>
            <li>Pricing</li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default NavComponent;
