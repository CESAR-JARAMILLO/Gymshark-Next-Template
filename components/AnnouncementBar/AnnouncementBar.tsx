import React from "react";
import "./AnnouncementBar.scss";

const AnnouncementBar = () => {
  return (
    <div className="announcement-bar">
      <div className="announcement-bar__text">
        Big Summer Sale – Up to 50% Off!
      </div>
      <button className="announcement-bar__toggle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="20"
          height="20"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>
    </div>
  );
};

export default AnnouncementBar;
