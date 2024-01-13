import React from 'react';
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


function LowToHighComponent({ tvShowsData }) {

  const sortTvShowsByRating = () => {
   
    if (!tvShowsData) {
      return [];
    }

    return tvShowsData.slice().sort((a, b) => {
      // Assuming rating is a number, you can directly compare them
      return a.rating - b.rating;
    });
  };

  // Sort TV shows by rating
  const sortedTvShows = sortTvShowsByRating();

  console.log('tvShowsData:', tvShowsData);
  console.log('sortedTvShows:', sortedTvShows);

  return (
    <div style={tvShowWrapper}>
      {sortedTvShows.map(({ id, title, genre, rating, description }) => (
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

export default LowToHighComponent;
