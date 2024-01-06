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
const TvShowsDramaPage = () => {
  return <>
  <SortBarComponent />
  <TvShowsDrama />
  </>
}



const PricingPage = () => <PriceComponent />;

function App() {
  return (
    <div className="App">
      <NavComponent />
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={ <PricingPage />} />
          <Route path="/tvshow" element={<TvShowsPage />} />
          <Route path="/tvshowDrama" element={<TvShowsDramaPage />} />
        </Routes>
      </BrowserRouter>
      <FooterComponent />
    </div>
  );
}

export default App;
