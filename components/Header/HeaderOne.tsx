import React from "react";

const HeaderOne = () => {
  return (
    <header className="header header1">
      <div className="header1__left">
        <button className="header1__menu-button" aria-label="Toggle menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="28"
            height="28"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div className="header1__logo">
          <a href="/">
            <img
              src="/gymshark-header-logo.svg"
              alt="Logo"
              className="header1__logo-image"
            />
          </a>
        </div>
      </div>

      <nav className="header1__collections-nav">
        <a href="/link" className="header1__collection-link">
          WOMEN
        </a>
        <a href="/link" className="header1__collection-link">
          MEN
        </a>
        <a href="/link" className="header1__collection-link">
          ACCESSORIES
        </a>
      </nav>

      <nav className="header1__icon-nav">
        <a href="/favorites" className="header1__icon-link header1__icon-heart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="24"
            height="24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </a>

        <a href="/cart" className="header1__icon-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="24"
            height="24"
          >
            <path d="M6 2l1.5 4h9L18 2" />
            <path d="M3 6h18v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6z" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>
        </a>

        <a href="/account" className="header1__icon-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="24"
            height="24"
          >
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </a>
      </nav>
    </header>
  );
};

export default HeaderOne;
