import React from "react";
import noImageAvailable from "./noImageAvailable.jpeg";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date } = props;
  return (
    <div>
      <div className="card text-bg-light my-2">
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          style={{ left: "9%" }}
        >
          Trending
        </span>
        <img
          src={!imageUrl ? noImageAvailable : imageUrl}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {title}
            <small>
              <span className="badge rounded-pill bg-danger">New</span>
            </small>
          </h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-danger">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
