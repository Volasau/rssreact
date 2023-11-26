import React from 'react';
import Products from './products/products';
import Search from '../components/Search';

export const getStaticProps = async () => {
  const response = await fetch('https://dummyjson.com/products?limit=0');
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { products: data.products },
  };
};

export default function Page({ products }) {
  return (
    <>
      <h1>
        Извините за не полную работу ЭТО все что смог сделать с новой API за
        день
      </h1>
      <Search placeholder="Search invoices..." />
      <Products products={products} />
    </>
  );
}
