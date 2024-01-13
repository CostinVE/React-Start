import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import NavComponent from "./components/NavComponent";
import PriceComponent from "./components/PriceComponent";
import FooterComponent from "./components/FooterComponent";
import OverviewComponent from "./components/OverviewComponent";
import TitleComponent from "./components/TitleComponent";
import DescriptionComponent from "./components/DescriptionComponent";
import TvShowsComponent from "./components/TvShowCard";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SortBarComponent from "./components/SortComponent";
import TvShowsDrama from "./components/TvShowDrama";
import TvShowsAnime from "./components/TvShowAnimation";
import TvShowsAction from "./components/TvShowAction";
import TvShowsCrime from "./components/TvShowCrime";
import TvShowsComedy from "./components/TvShowComedy";
// import AlphabeticalSort from "./components/AlphabeticalSort";
import LowToHighComponent from "./components/LowToHigh";
import React from "react";

const HomePage = () => {
  return <>
    <HeaderComponent />
    <OverviewComponent />
    <PriceComponent />
    <section>
      <TitleComponent text={"This is another section title"} />
      <DescriptionComponent text={"Another description"} />
      <DescriptionComponent text={"Another description"} />
      <DescriptionComponent text={"Another description"} />
      <DescriptionComponent text={"Another description"} />
    </section>
  </>;
};

const TvShowsPage = () => {
  return <>
  <SortBarComponent />
  <TvShowsComponent />
  </>
}


const PricingPage = () => <PriceComponent />;

const TvShowsDramaPage = () => {
  return <>
  <SortBarComponent />
  <TvShowsDrama />
  </>
}

const TvShowsAnimePage = () => {
  return <>
  <SortBarComponent />
  <TvShowsAnime />
  </>
}

const TvShowsActionPage = () => {
  return <>
  <SortBarComponent />
  <TvShowsAction />
  </>
}

const TvShowsCrimePage = () => {
  return <>
  <SortBarComponent />
  <TvShowsCrime />
  </>
}

const TvShowsComedyPage = () => {
  return <>
  <SortBarComponent />
  <TvShowsComedy />
  </>
}

// const AlphabeticalPage = () => {
//   return <>
//   <SortBarComponent />
//   <AlphabeticalSort />
//   </>
// }

const LowToHighPage = () => {
  return <>
  <SortBarComponent />
  <LowToHighComponent />
  </>
}

function App() {
  return (
    <div className="App">
      <NavComponent />
      <BrowserRouter basename="/">
        <Routes>
          {/* <Route path="/A>Z" element={<AlphabeticalPage />} /> */}
          <Route path="/lowtohigh" element={<LowToHighPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={ <PricingPage />} />
          <Route path="/tvshow" element={<TvShowsPage />} />
          <Route path="/tvshowDrama" element={<TvShowsDramaPage />} />
          <Route path="/tvshowAnime" element={<TvShowsAnimePage />} />
          <Route path="/tvshowAction" element={<TvShowsActionPage />} />
          <Route path="/tvshowCrime" element={<TvShowsCrimePage />} />
          <Route path="/tvshowComedy" element={<TvShowsComedyPage />} />
        </Routes>
      </BrowserRouter>
      <FooterComponent />
    </div>
  );
}

export default App;
