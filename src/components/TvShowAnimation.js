import React, {useState} from "react";
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


function TvShowsAnime() {
  const [desiredGenre, setDesiredGenre] = useState('Animation');

  // Assume you have the 'tvShowsData' array with objects containing the data of TV shows
  return (
    <div style={tvShowWrapper}>
      {tvShowsData &&
        tvShowsData
          .filter(({ genre }) => genre.includes(desiredGenre)) // Check if genre includes desiredGenre
          .map(({ id, title, genre, rating, description }) => (
            <TvShowCardComponent
              key={id}
              title={title}
              description={description}
              genre={genre}
              rating={rating}
            />
          ))}
    </div>
  );
}

export default TvShowsAnime;
