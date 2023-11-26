import Image from 'next/image';
import React from 'react';

export interface product {
  id: number;
  title: string;
  brand: string;
  category: string;
  description: string;
  images: string;
}

function InfoProduct({ product: product }) {
  if (!product) {
    return <h1>Empty product</h1>;
  }

  const blurDataURL = `data:image/png;base64,${product.product.images[0]}`;

  return (
    <>
      <h2 className="info__title">{product.product.title}</h2>
      <div className="info__drand">
        <strong>brand: </strong>
        {product.product.brand}
      </div>
      <div className="info__category">
        <strong>category: </strong>
        {product.product.category}
      </div>
      <div className="info__description">
        <strong>description: </strong>
        {product.product.description}
      </div>
      <Image
        className="info__image"
        src={product.product.images[0]}
        alt="Picture"
        width={400}
        height={400}
        placeholder="blur"
        blurDataURL={blurDataURL}
        priority
      />
    </>
  );
}

export default InfoProduct;
