"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import "./CardsWithModal.scss";

type Card = {
  id: number;
  image: string;
  title: string;
};

const mockCards: Card[] = [
  { id: 1, image: "/img-card-1.jpg", title: "Card One" },
  { id: 2, image: "/img-card-1.jpg", title: "Card Two" },
  { id: 3, image: "/img-card-1.jpg", title: "Card Three" },
  { id: 4, image: "/img-card-1.jpg", title: "Card Four" },
  { id: 5, image: "/img-card-1.jpg", title: "Card Five" },
  { id: 6, image: "/img-card-1.jpg", title: "Card Six" },
  { id: 7, image: "/img-card-1.jpg", title: "Card Seven" },
  { id: 8, image: "/img-card-1.jpg", title: "Card Eight" },
  { id: 9, image: "/img-card-1.jpg", title: "Card Nine" },
];

const products = [
  {
    id: 1,
    image: "/img-card-1.jpg",
    tag: "New",
    title: "Classic Black Tee",
    description: "A soft, breathable shirt perfect for everyday wear.",
    price: "29.99",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    image: "/img-card-1.jpg",
    tag: "Bestseller",
    title: "Gym Shorts",
    description: "Lightweight and durable workout shorts.",
    price: "34.99",
    sizes: ["S", "M", "L"],
  },
];

const CardsWithModal = () => {
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!containerRef.current) return;
    const offset = dir === "left" ? -340 : 340;
    containerRef.current.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <section className="cards-section">
      <div className="cards-section__header">
        <h2 className="cards-section__title">Featured Cards</h2>
        <div className="cards-section__controls">
          <button
            className="cards-section__control"
            onClick={() => scroll("left")}
            aria-label="Scroll left"
          >
            <svg
              className="cards-section__icon"
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
            className="cards-section__control"
            onClick={() => scroll("right")}
            aria-label="Scroll right"
          >
            <svg
              className="cards-section__icon"
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

      <div className="cards-section__row" ref={containerRef}>
        {mockCards.map((card) => (
          <div className="card" key={card.id}>
            <Image
              src={card.image}
              alt={card.title}
              width={320}
              height={400}
              className="card__image"
            />
            <button
              className="card__button"
              onClick={() => setActiveModal(card.id)}
            >
              <svg
                className="card__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 5c-7.633 0-11 7-11 7s3.367 7 11 7 11-7 11-7-3.367-7-11-7zm0 12c-2.762 0-5-2.239-5-5s2.238-5 5-5c2.761 0 5 2.239 5 5s-2.239 5-5 5zm0-8c-1.654 0-3 1.347-3 3s1.346 3 3 3 3-1.347 3-3-1.346-3-3-3z" />
              </svg>
              Open Modal
            </button>
          </div>
        ))}
      </div>

      {activeModal && (
        <div className="modal" onClick={() => setActiveModal(null)}>
          <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal__close-icon"
              onClick={() => setActiveModal(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M18.3 5.71 12 12l6.3 6.29-1.42 1.42L12 13.41l-6.29 6.3-1.42-1.42L10.59 12 4.29 5.71 5.7 4.29 12 10.59l6.29-6.3z" />
              </svg>
            </button>

            <h3 className="modal__heading">Get The Look</h3>

            <div className="modal__products">
              {products.map((product) => (
                <div key={product.id} className="modal__product">
                  <div className="modal__product-image">
                    <img src={product.image} alt={product.title} />
                  </div>

                  <div className="modal__product-info">
                    <span className="modal__tag">{product.tag}</span>
                    <h4 className="modal__title">{product.title}</h4>
                    <p className="modal__description">{product.description}</p>
                    <div className="modal__price">${product.price}</div>

                    <select className="modal__select">
                      {product.sizes.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              ))}
            </div>

            <button className="modal__add-to-cart">Add to Cart</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CardsWithModal;
