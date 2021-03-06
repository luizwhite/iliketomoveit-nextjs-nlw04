import Head from 'next/head';

const TwitterThumb: React.FC = () => (
  <div>
    <Head>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Teste" />
      <meta
        name="twitter:image"
        content="http://95eb43f4d229.ngrok.io/icons/thumb_twitter.png"
      />
    </Head>
  </div>
);

export default TwitterThumb;
