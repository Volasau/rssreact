import Head from 'next/head';
import React from 'react';

function Error() {
  return (
    <>
      <Head>
        <title> ERROR </title>
        <link rel="icon" type="image/png" href="../public/favicon.png" />
      </Head>
      <h1>404</h1>
      <h2>ERROOOOORRRRR</h2>
    </>
  );
}

export default Error;
