import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Features from 'sections/ultimate-features';
import WhyVajra from 'sections/features';
import IntroVideo from 'sections/intro-video';
import HowItWorks from 'sections/useful-features';
import Widgets from 'sections/widgets';
import Pricing from 'sections/pricing';
import Faq from 'sections/faq';
import Contact from 'sections/contact';
import { useRef } from 'react';
import VajraPricing from 'sections/vajra-pricing';
import VajraPricingNew from 'sections/vajra-pricing-new';

export default function IndexPage() {

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Vajra.ai" /> 
        <Banner />
        <Features />
        <WhyVajra />
        {/* <IntroVideo /> */}
        <HowItWorks />
        <Widgets />
        
        <Faq />
        <Pricing />
        {/* <VajraPricing /> */}
        {/* <VajraPricingNew /> */}
        <Contact id="section1" />
        <script src="https://cloud.vajra.ai/vajra-support-demo.js"></script> 
      </Layout>
    </ThemeProvider>
  );
}
