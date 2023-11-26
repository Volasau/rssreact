import React from 'react';
import Link from 'next/link';

function Products({ products }) {
  return (
    <>
      <div className="container__product">
        {products?.map(({ id, title, description }) => (
          <div className="contaner__item" key={id}>
            <Link href={`products/${id}`}>
              <div className="title__product">{title}</div>
              <div>{description}</div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
