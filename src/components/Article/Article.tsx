import React from "react";
import SwiperComponent from "../SwiperComponent/SwiperComponent";

export default function Article({ product }: { product: IProduct }) {
  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    brand,
    stock,
    category,
    thumbnail,
    images,
  } = product;
  return (
    <article className="mt-4 ">
      <div>
        <div>
          <h2>{title}</h2>
          <p>{brand}</p>
          <p>{category}</p>
        </div>
        <p>{description}</p>
        <p>
          Price: <span>{price}</span>
        </p>
      </div>
      <div className="mt-4">
        <SwiperComponent images={images} />
      </div>
    </article>
  );
}
