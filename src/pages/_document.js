import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/0.0.0-359252c/tailwind.min.css" crossOrigin="anonymous" />
        </Head>  
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
