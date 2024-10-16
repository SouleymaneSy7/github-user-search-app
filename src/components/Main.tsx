import Title from "./Title";
import {
  CompanyIcon,
  LinkIcon,
  LocationIcon,
  TwitterIcon,
} from "../icons/Icons.component";
import React from "react";

const Main = () => {
  return (
    <main className="user-contents">
      {/* Loading */}
      <React.Fragment>
        <div className="loading">Loading...</div>
      </React.Fragment>

      {/* User Contents */}
      <React.Fragment>
        <div className="user-contents__top | flex">
          <div className="user__profile-img">
            <img src="" alt="" />
          </div>
          <div className="user__information">
            <h1 className="user__name">Souleymane Sy</h1>
            <p className="user__pseudo-name">@souleymanesy7</p>
            <time dateTime="07-08-2022">Joined 07 aug 2022</time>
          </div>
        </div>

        <div className="user-contents__bottom">
          <p className="user__quotes">Some Text</p>

          <div className="user__stats">
            <div className="stats">
              <p>Repos</p>
              <Title level="h2">73</Title>
            </div>
            <div className="stats">
              <p>Followers</p>
              <Title level="h2">31</Title>
            </div>
            <div className="stats">
              <p>Following</p>
              <Title level="h2">113</Title>
            </div>
          </div>

          <ul className="user__links">
            <li className="user__links-container | flex">
              <LocationIcon />
              Guinée, Conakry
            </li>

            <li className="user__links-container | flex">
              <TwitterIcon />
              @souleymanesy43
            </li>

            <li className="user__links-container | flex">
              <LinkIcon />
              souleymane-sy.dev
            </li>

            <li className="user__links-container | flex">
              <CompanyIcon />
              Google, Co
            </li>
          </ul>
        </div>
      </React.Fragment>

      {/* Errors */}
      <React.Fragment>
        <div className="errors">Errors</div>
      </React.Fragment>
    </main>
  );
};

export default Main;
