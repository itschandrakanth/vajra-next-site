import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import UltimateFeatures from 'sections/ultimate-features';
import OfferFeatures from 'sections/offer-features';
import IntroVideo from 'sections/intro-video';
import UsefulFeatures from 'sections/useful-features';
import Widgets from 'sections/widgets';
import Pricing from 'sections/pricing';
import Faq from 'sections/faq';
import OfferContact from 'sections/offer-contact';
import { useRef } from 'react';
import VajraPricing from 'sections/vajra-pricing';

export default function IndexPage() {

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Vajra.ai" /> 
       
        <OfferFeatures />
        {/* <IntroVideo /> */}
        {/* <UsefulFeatures />
        <Widgets /> */}
        {/* <Pricing /> */}
        {/* <Faq /> */}
        {/* <VajraPricing /> */}
        <OfferContact id="section1" />
      </Layout>
    </ThemeProvider>
  );
}
