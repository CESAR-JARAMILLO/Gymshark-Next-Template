"use client";

import React, { useRef, useState } from "react";
import "./HeroVideo.scss";

const HeroVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleToggle = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="hero-video">
      <video
        ref={videoRef}
        className="hero-video__background"
        src="/gymshark-women-banner.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="hero-video__overlay">
        <img
          src="/women-hero-text.svg"
          alt="Vital is an icon - 6.9 million of you agree"
          className="hero-video__title-image"
        />
        <a href="#contact" className="hero-video__cta">
          Shop Now
        </a>
      </div>

      <button
        className="hero-video__toggle"
        onClick={handleToggle}
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? (
          <svg
            className="hero-video__icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="20"
            height="20"
          >
            <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
          </svg>
        ) : (
          <svg
            className="hero-video__icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="20"
            height="20"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    </section>
  );
};

export default HeroVideo;
