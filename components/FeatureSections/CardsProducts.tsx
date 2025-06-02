"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import "./CardsProducts.scss";

type Product = {
  id: number;
  image: string;
  hoverImage: string;
  name: string;
  subTag?: string;
  color?: string;
  price: string;
  rating: number;
  sizes: string[];
};

const products: Product[] = [
  {
    id: 1,
    image: "/shorts-front.png",
    hoverImage: "/shorts-back.png",
    name: "Lift Seamless Shorts",
    subTag: "Limited Edition",
    color: "Black",
    price: "$39.99",
    rating: 4.7,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: 2,
    image: "/shorts-front.png",
    hoverImage: "/shorts-back.png",
    name: "HIGH RISE SHORTS",
    subTag: "Bestseller",
    color: "Navy",
    price: "$29.99",
    rating: 4.5,
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: 3,
    image: "/shorts-front.png",
    hoverImage: "/shorts-back.png",
    name: "SEAMLESS BRA",
    subTag: "New Arrival",
    color: "White",
    price: "$24.99",
    rating: 4.3,
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 4,
    image: "/shorts-front.png",
    hoverImage: "/shorts-back.png",
    name: "COMFORT FIT TEE",
    subTag: "Popular",
    color: "Gray",
    price: "$19.99",
    rating: 4.6,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 5,
    image: "/shorts-front.png",
    hoverImage: "/shorts-back.png",
    name: "ULTRA LIGHT JACKET",
    subTag: "Sale",
    color: "Red",
    price: "$49.99",
    rating: 4.8,
    sizes: ["M", "L", "XL"],
  },
  {
    id: 6,
    image: "/shorts-front.png",
    hoverImage: "/shorts-back.png",
    name: "CLASSIC HOODIE",
    subTag: "Trending",
    color: "Charcoal",
    price: "$34.99",
    rating: 4.9,
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
];

const CardsProducts = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const scroll = (dir: "left" | "right") => {
    if (!containerRef.current) return;
    const offset = dir === "left" ? -340 : 340;
    containerRef.current.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <section className="cards-products">
      <div className="cards-products__header">
        <h2 className="cards-products__title">SHOP THE LOOK</h2>
        <div className="cards-products__controls">
          <button
            className="cards-products__control"
            onClick={() => scroll("left")}
            aria-label="Scroll left"
          >
            ◀
          </button>
          <button
            className="cards-products__control"
            onClick={() => scroll("right")}
            aria-label="Scroll right"
          >
            ▶
          </button>
        </div>
      </div>

      <div className="cards-products__row" ref={containerRef}>
        {products.map((product) => (
          <div
            className="product-tile"
            key={product.id}
            onMouseEnter={() => setHoveredId(product.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="product-tile__image-wrapper">
              <Image
                src={
                  hoveredId === product.id ? product.hoverImage : product.image
                }
                alt={product.name}
                width={320}
                height={400}
                className="product-tile__image"
              />
              <button
                className="product-tile__wishlist"
                aria-label="Add to wishlist"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#333"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="product-tile__wishlist-icon"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </button>

              <div className="product-tile__sizes">
                {product.sizes.map((size) => (
                  <span key={size} className="product-tile__size">
                    {size}
                  </span>
                ))}
              </div>
            </div>

            <div className="product-tile__info">
              <div className="product-tile__text">
                <h3 className="product-tile__name">{product.name}</h3>
                <span className="product-tile__subtag">{product.subTag}</span>
                {product.color && (
                  <span className="product-tile__color">{product.color}</span>
                )}
                <span className="product-tile__price">{product.price}</span>
              </div>
              <div className="product-tile__rating">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="#333"
                >
                  <path d="M12 .587l3.668 7.571 8.332 1.151-6.064 5.979 1.43 8.298L12 18.896l-7.366 4.69 1.43-8.298-6.064-5.979 8.332-1.151z" />
                </svg>
                {product.rating.toFixed(1)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardsProducts;
