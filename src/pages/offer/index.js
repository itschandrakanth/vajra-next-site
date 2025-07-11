import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Logo from 'components/logo';
import { useState, useRef } from 'react';
import FeedChat from "sections/feedchat/feedchat";
import Offer from "sections/offer/offer-banner";
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import OfferHeading from 'sections/offer/offer-heading';
import OfferLeftImg from 'sections/offer/offer-left-img'
import LeftDash from 'sections/offer/left-dash';
import OfferFeatureGrid from 'sections/offer/offer-feature-grid'
import Dashboard from 'sections/offer/offer-dashboard';
import OfferForm from 'sections/offer/offer-form';
import OfferRightImg from 'sections/offer/offer-right-img'
import RightDash from 'sections/offer/right-dash'
import Services from 'sections/services'
import Faq from 'sections/faq'
import Banner from '../../sections/banner';
import analyticsAnim from '../../assets/animations/analytics2.json';
import Lottie from 'react-lottie';
// import Script from 'next/script'


const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Example() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const openMobileMenu = () => {
    setMobileMenu(true);
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  const LottieDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: analyticsAnim,
    // rendererSettings: {
    //   preserveAspectRatio: "xMidYMid slice",
    // },
  };
  return (
    <ThemeProvider theme={theme}>
        <Layout>
            <SEO title="Vajra.ai - AI and ML Business Solutions" /> 
            <Offer />
            <OfferHeading />
            <Banner />
            <LeftDash />
            <RightDash />
            <OfferLeftImg />
            
              {/* <div className="p-10">
                <Lottie options={LottieDefaultOptions}/>
              </div>
              <div className="">
                <Faq />
              </div> */}
              <Faq />
            
            
            <OfferFeatureGrid />
            <OfferRightImg />
            {/* <OfferLeftImg /> */}
            <Services />

            {/* <Dashboard /> */}
            <OfferForm id="form" />
            <script async src="https://www.googletagmanager.com/gtag/js?id=AW-10824972134" strategy="beforeInteractive" />
            <script
              id="show-banner"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'AW-10824972134');`,
                }}
            />

        </Layout>
    </ThemeProvider>

    
    
  )
}