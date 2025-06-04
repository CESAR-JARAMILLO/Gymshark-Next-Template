"use client";

import React, { useState } from "react";
import Image from "next/image";
import "./CardsGrid.scss";

type Card = {
  id: number;
  image: string;
  title: string;
  description?: string;
};

const womensCards: Card[] = [
  { id: 1, image: "/leggings.png", title: "Womens Leggings" },
  { id: 2, image: "/leggings.png", title: "Womens Shorts" },
  { id: 3, image: "/leggings.png", title: "Womens Bra" },
  { id: 4, image: "/leggings.png", title: "Womens Hoodie" },
];

const mensCards: Card[] = [
  { id: 5, image: "/lifting-men.png", title: "Mens Joggers" },
  { id: 6, image: "/lifting-men.png", title: "Mens Shorts" },
  { id: 7, image: "/lifting-men.png", title: "Mens Tank" },
  { id: 8, image: "/lifting-men.png", title: "Mens Hoodie" },
];

const CardsGridTwo = () => {
  const [activeCategory, setActiveCategory] = useState<"womens" | "mens">(
    "womens"
  );

  const cards = activeCategory === "womens" ? womensCards : mensCards;

  return (
    <section className="cards-grid cards-grid--overlay-bottom-left grid--4 cards-grid--scroll-sm">
      <h2 className="cards-grid__title">HOT RIGHT NOW</h2>

      <div className="cards-grid__toggle">
        <button
          className={`cards-grid__toggle-btn ${
            activeCategory === "womens" ? "active" : ""
          }`}
          onClick={() => setActiveCategory("womens")}
        >
          Womens
        </button>
        <button
          className={`cards-grid__toggle-btn ${
            activeCategory === "mens" ? "active" : ""
          }`}
          onClick={() => setActiveCategory("mens")}
        >
          Mens
        </button>
      </div>

      <div className="cards-grid__container">
        {cards.map((card) => (
          <div className="cards-grid__card" key={card.id}>
            <Image
              src={card.image}
              alt={card.title}
              width={320}
              height={240}
              className="cards-grid__image"
            />
            <div className="cards-grid__body">
              <h3 className="cards-grid__name">{card.title}</h3>
              <button className="cards-grid__button">Shop Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardsGridTwo;
