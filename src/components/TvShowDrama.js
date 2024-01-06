import React from "react";
import tvShowsData from "../assets/data/tvShowsdata";


const tvShowWrapper = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    height: "95vh",
    width: "100%",
    gap: "20px",
    paddingTop: "20px",
    backgroundColor: 'white'
  };

const tvShowCard = {
    display: "flex",
    maxHeight: "400px",
    maxWidth: "300px",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: "15px",
    backgroundColor: "#f0ede7",
    boxShadow: "0px 9px 14px -2px black"

    
}

function TvShowCardComponent({title, genre, rating, description,}) {

    return (
        <div style={tvShowCard}>
            <h4>{title}</h4>
             <p>{genre}</p>
             <p>{rating}</p>
             <p>{description}</p>
             
        </div>
    )
}


const TvShowsDrama = () => {
    console.log(tvShowsData);
  
    const desiredGenre = 'Drama'; // Replace with the desired genre

    
  
    return (
      <div style={tvShowWrapper}>
        {tvShowsData &&
          tvShowsData.map(({id, title, genre, rating, description }) => {
            // Check if the 'genre' property has a certain type
            if (genre === desiredGenre) {
              return (
                <TvShowCardComponent
                  key={id} // Don't forget to add a unique key
                  title={title}
                  description={description}
                  genre={genre}
                  rating={rating}
                />
              );
            } else {
              return null; // or any other fallback/render nothing
            }
          })}
      </div>
    );
  };
export default TvShowsDrama