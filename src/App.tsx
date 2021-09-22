import React, { useEffect, useState } from "react";
import "./App.scss";
import { useSelector } from "react-redux";
import { State } from "./state";
import { Gallery } from "./components/gallery";
import { post } from "./components/gallery/types";
import { getPhotos } from "./api";
import { Navbar } from "./components/navbar";
import { useLocation } from "react-router-dom";

function App() {
  const [photos, setPhotos] = useState<typeof post[] | any>();
  const dateRange = useSelector((state: State) => state.dateRange);
  const location = useLocation().pathname;

  async function fetchPhotos() {
    setPhotos(await getPhotos(dateRange));
  }

  useEffect(() => {
    if (location === "/favourites") {
      const likes = localStorage.getItem("likes");
      let store = likes ? JSON.parse(likes) : [];
      setPhotos(store);
    } else {
      fetchPhotos();
    }
  }, [dateRange, location]);

  return (
    <div id="main">
      <div className="nav">
        <Navbar route={location} />
      </div>
      <div className="gallery">
        <Gallery photos={photos} setPhotos={setPhotos} />
      </div>
    </div>
  );
}

export default App;
