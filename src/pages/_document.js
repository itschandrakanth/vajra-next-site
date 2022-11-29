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
          {/* <script src="https://cloud.vajra.ai/vajra-support-demo.js"></script> */}
          {/* <script src="https://cloud.vajra.ai/vajra-support.js"></script> */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '264700875575907');
              fbq('track', 'PageView');
            `,
              }}
            />
  {/* ON 29 NOV 2022 */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=AW-10990217379`}
          />

          <script
            dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-10990217379');
            `,
              }}
            />


            <script
            dangerouslySetInnerHTML={{
            __html: `
            gtag('event', 'conversion', {'send_to': 'AW-10990217379/1u-MCMCGzIMYEKPRxfgo'})
            `,
              }}
            />


          {/* Hotjar Heatmaps */}
          {/* <script
            dangerouslySetInnerHTML={{
            __html: `
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:2926424,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=')
            `,
              }}
          /> */}

            {/* <noscript><img height="1" width="1" style="display:none"
            src="https://www.facebook.com/tr?id=264700875575907&ev=PageView&noscript=1"
            /></noscript> */}
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
