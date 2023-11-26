import React from 'react';
import InfoProduct from './InfoProduct';
import { useRouter } from 'next/router';

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { product: data },
  };
};

function OneProduct(product) {
  console.log(product);
  const router = useRouter();

  const handleCloseClick = () => {
    router.push('/');
  };
  return (
    <>
      <h1>DetalInfo</h1>
      <button onClick={handleCloseClick}>CLOSE</button>
      <InfoProduct product={product} />
    </>
  );
}

export default OneProduct;
