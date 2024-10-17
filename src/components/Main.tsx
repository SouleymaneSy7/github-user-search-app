import React from "react";

import Title from "./Title";
import {
  CompanyIcon,
  LinkIcon,
  LocationIcon,
  TwitterIcon,
} from "../icons/Icons.component";
import { useUserContext } from "../contexts/UserContext";

const Main: React.FC = () => {
  const { viewState, userData } = useUserContext();

  if (userData === null) {
    return (
      <React.Fragment>
        <div className="starter">You must search a Github username!</div>
      </React.Fragment>
    );
  }

  if (viewState.status === "loading") {
    return (
      <React.Fragment>
        <div className="loading">Loading...</div>
      </React.Fragment>
    );
  }

  if (viewState.status === "errors") {
    return (
      <React.Fragment>
        <div className="errors">Errors for Fetching Data!!!</div>
      </React.Fragment>
    );
  }

  return (
    <main className="main | container">
      <section className="user-contents">
        <div className="user-contents__top | flex">
          <div className="user__profile-img">
            <img
              src={userData.avatar_url}
              alt={`${userData.name} profile picture`}
            />
          </div>
          <div className="user__information">
            <h1 className="user__name">{userData.name}</h1>
            <p className="user__pseudo-name">@{userData.login}</p>
            <time dateTime="07-08-2022">{userData.created_at}</time>
          </div>
        </div>

        <div className="user-contents__bottom">
          <p className="user__bio">{userData.bio}</p>

          <div className="user__stats">
            <div className="stats">
              <p>Repos</p>
              <Title level="h2">{userData.public_repos} </Title>
            </div>
            <div className="stats">
              <p>Followers</p>
              <Title level="h2">{userData.followers}</Title>
            </div>
            <div className="stats">
              <p>Following</p>
              <Title level="h2">{userData.following}</Title>
            </div>
          </div>

          <ul className="user__links">
            <li className="user__links-container | flex">
              <LocationIcon />
              {userData.location ? userData.location : "Not Available"}
            </li>

            <li className="user__links-container | flex">
              <TwitterIcon />@
              {userData.twitter_username
                ? userData.twitter_username
                : "Not Available"}
            </li>

            <li className="user__links-container | flex">
              <LinkIcon />
              {userData.blog ? userData.blog : "Not Available"}
            </li>

            <li className="user__links-container | flex">
              <CompanyIcon />
              {userData.company ? userData.company : "Not Available"}
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Main;
