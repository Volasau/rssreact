import Image from 'next/image';
import React, { useState } from 'react';
import Loading from '../../components/loading';

export interface product {
  id: number;
  title: string;
  brand: string;
  category: string;
  description: string;
  images: string;
}

function InfoProduct({ product: product }) {
  const [isLoading, setIsLoading] = useState(false);
  if (!product) {
    return <h1>Empty product</h1>;
  }
  const handleImageLoad = () => {
    setIsLoading(true);
  };

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
      {!isLoading && <Loading />}
      <Image
        className={`info__image ${!isLoading ? 'hidden' : ''}`}
        src={product.product.images[0]}
        alt="Picture"
        width={400}
        height={400}
        placeholder="blur"
        blurDataURL={blurDataURL}
        priority
        onLoad={handleImageLoad}
      />
    </>
  );
}

export default InfoProduct;
