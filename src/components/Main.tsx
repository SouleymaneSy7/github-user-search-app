import React from "react";

import { useUserContext } from "../contexts/UserContext";

import {
  CompanyIcon,
  LinkIcon,
  LocationIcon,
  TwitterIcon,
} from "../icons/Icons.component";

import Title from "./Title";
import ErrorsPage from "./ErrorsPage";
import Loader from "./Loader";

const Main: React.FC = () => {
  const { searchTerm, viewState, userData } = useUserContext();

  if (searchTerm.length <= 0) {
    return (
      <React.Fragment>
        <div className="starter | container">
          You must insert a Github username in the input search field and press
          Enter.
        </div>
      </React.Fragment>
    );
  }

  if (viewState.status === "loading") {
    return (
      <React.Fragment>
        <Loader />
      </React.Fragment>
    );
  }

  if (viewState.status === "errors") {
    return (
      <React.Fragment>
        <ErrorsPage />
      </React.Fragment>
    );
  }

  const dateResult = new Date(userData!.created_at).toLocaleDateString("fr-FR");
  const websiteShorter = userData!.blog.split("/")[2];

  return (
    <main className="main | container">
      <section className="user-contents">
        <div className="user-contents__top | flex">
          <div className="user__profile-img">
            <img
              src={userData!.avatar_url}
              alt={`${userData!.name} profile picture`}
            />
          </div>
          <div className="user__information">
            <h1 className="user__name">
              {userData!.name ? userData!.name : userData!.login}
            </h1>
            <p className="user__pseudo-name">@{userData!.login}</p>
            <time dateTime={dateResult} className="user__joined">
              Joined at {dateResult}
            </time>
          </div>
        </div>

        <div className="user-contents__bottom">
          <p
            className="user__bio"
            style={{ opacity: userData!.location ? "100%" : "75%" }}
          >
            {userData!.bio ? userData!.bio : "This profile has no bio"}
          </p>

          <div className="user__stats">
            <div className="stats">
              <p>Repos</p>
              <Title level="h2">{userData!.public_repos}</Title>
            </div>
            <div className="stats">
              <p>Followers</p>
              <Title level="h2">{userData!.followers}</Title>
            </div>
            <div className="stats">
              <p>Following</p>
              <Title level="h2">{userData!.following}</Title>
            </div>
          </div>

          <ul className="user__links" role="list">
            <li
              className="user__links-container | flex"
              style={{ opacity: userData!.location ? "100%" : "75%" }}
            >
              <LocationIcon />
              {userData!.location ? userData!.location : "Not Available"}
            </li>

            <li
              className="user__links-container | flex"
              style={{ opacity: userData!.twitter_username ? "100%" : "75%" }}
            >
              {userData!.twitter_username ? (
                <a
                  href={`https://twitter.com/${userData!.twitter_username}`}
                  target="_blank"
                >
                  <TwitterIcon />
                  {`@${userData!.twitter_username}`}
                </a>
              ) : (
                <React.Fragment>
                  <TwitterIcon />
                  Not Available
                </React.Fragment>
              )}
            </li>

            <li
              className="user__links-container | flex"
              style={{ opacity: userData!.blog ? "100%" : "75%" }}
            >
              {userData!.blog ? (
                <a href={userData!.blog} target="_blank">
                  <LinkIcon />
                  {websiteShorter}
                </a>
              ) : (
                <React.Fragment>
                  <LinkIcon />
                  Not Available
                </React.Fragment>
              )}
            </li>

            <li
              className="user__links-container | flex"
              style={{ opacity: userData!.company ? "100%" : "75%" }}
            >
              <CompanyIcon />
              {userData!.company ? userData!.company : "Not Available"}
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Main;
