import React from "react";
import { useAppSelector } from "../hooks";

import "./NavMenu.scss";

export const NavMenu = () => {
  const currentPage = useAppSelector(state => state.pagesInfo.current)


  return (
    <div className="nav-menu">
      <div className="nav-menu__btn-wrapper">
        <div className="nav-menu__btn nav-menu__bag-mail"></div>
        <div className="nav-menu__btn nav-menu__bag-btn"></div>
        <div className="nav-menu__btn nav-menu__bag-loope"></div>
      </div>
      <div style={{position: "absolute", top: 0, left: 0, fontSize: '20px'}} className="page-number">{currentPage}</div>
    </div>
  );
};
