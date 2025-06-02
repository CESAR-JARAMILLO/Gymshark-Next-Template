"use client";

import React, { useRef } from "react";
import Image from "next/image";
import "./CardsWithButton.scss";

type Card = {
  id: number;
  image: string;
  title: string;
  description: string;
};

const mockCards: Card[] = [
  {
    id: 1,
    image: "/leggings.png",
    title: "THE DIPPED WAISTBAND LEGGINGS",
    description:
      "Get ‘em while they’re hot. And before they’re out of stock. Again.",
  },
  {
    id: 2,
    image: "/leggings.png",
    title: "Card Two",
    description: "A short description for card two.",
  },
  {
    id: 3,
    image: "/leggings.png",
    title: "Card Three",
    description: "A short description for card three.",
  },
  {
    id: 4,
    image: "/leggings.png",
    title: "Card Four",
    description: "A short description for card four.",
  },
  {
    id: 5,
    image: "/leggings.png",
    title: "Card Five",
    description: "A short description for card five.",
  },
  {
    id: 6,
    image: "/leggings.png",
    title: "Card Six",
    description: "A short description for card six.",
  },
  {
    id: 7,
    image: "/leggings.png",
    title: "Card Seven",
    description: "A short description for card seven.",
  },
  {
    id: 8,
    image: "/leggings.png",
    title: "Card Eight",
    description: "A short description for card eight.",
  },
  {
    id: 9,
    image: "/leggings.png",
    title: "Card Nine",
    description: "A short description for card nine.",
  },
];

const CardsWithButton = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!containerRef.current) return;
    const offset = dir === "left" ? -340 : 340;
    containerRef.current.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <section className="cards-with-button">
      <div className="cards-with-button__header">
        <h2 className="cards-with-button__title">HOT RIGHT NOW</h2>
        <div className="cards-with-button__controls">
          <button
            className="cards-with-button__control"
            onClick={() => scroll("left")}
            aria-label="Scroll left"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="currentColor"
            >
              <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
          <button
            className="cards-with-button__control"
            onClick={() => scroll("right")}
            aria-label="Scroll right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="currentColor"
            >
              <path d="M8.59 16.59 10 18l6-6-6-6-1.41 1.41L13.17 12z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="cards-with-button__row" ref={containerRef}>
        {mockCards.map((card) => (
          <div className="product-card" key={card.id}>
            <Image
              src={card.image}
              alt={card.title}
              width={320}
              height={240}
              className="product-card__image"
            />
            <div className="product-card__body">
              <h3 className="product-card__title">{card.title}</h3>
              <p className="product-card__description">{card.description}</p>
              <button className="product-card__button">Shop Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardsWithButton;
