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
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-159451872-1"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-159451872-1');
            </script>
        </Head>  
        <body>
          <Main />
          <NextScript />
          <script src="https://cloud.vajra.ai/vajra-support.js"></script>
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
