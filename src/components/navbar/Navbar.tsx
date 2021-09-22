import { Calendar } from "../calendar";
import { faEllipsisV, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface NavbarProps {
  route: string;
}

export const Navbar: React.FC<NavbarProps> = ({ route }) => {
  const [expand, setExpand] = useState(false);
  const isActive = (page: string) => {
    const style = route === page ? "active" : "";
    return style;
  };

  return (
    <div id="navbar">
      <div className="logo">
        <h3> SPACETAGRAM </h3>
        <p> Brought to you by NASA's image API </p>
      </div>

      <div className="routes">
        <FontAwesomeIcon
          onClick={() => setExpand(!expand)}
          icon={faEllipsisV}
        />
        <ul className={`${expand ? "show" : ""}`}>
          <li className={isActive("/")}>
            <a href="/"> Home </a>
          </li>
          <li className={isActive("/favourites")}>
            <a href="/favourites"> Favourites </a>
          </li>
          <li>
            <a className="btn disabled" href="/">
              {" "}
              Astronomy Photo of the Day{" "}
            </a>
          </li>
          <FontAwesomeIcon
            icon={faArrowRight}
            onClick={() => setExpand(!expand)}
          />
        </ul>
      </div>

      <div className="calendar">
        <Calendar />
      </div>
    </div>
  );
};
