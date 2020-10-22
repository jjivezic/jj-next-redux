
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../componets/layout/layout';

const FirstPost = () => {
  return <Layout>
    <Head>
      <title>First Post</title>
    </Head>
    <h1 className="title">
      <h1>First Post</h1>
      <Link href="/"> Back to home</Link>
    </h1>
  </Layout>
}

export default FirstPost;