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
import OfferFeatureGrid from 'sections/offer/offer-feature-grid'
import Dashboard from 'sections/offer/offer-dashboard';
import OfferForm from 'sections/offer/offer-form';
import OfferRightImg from 'sections/offer/offer-right-img'
import Services from 'sections/services'

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
  return (
    <ThemeProvider theme={theme}>
        <Layout>
            <SEO title="Vajra.ai - AI and ML Business Solutions" /> 
            <Offer />
            <OfferHeading />
            <OfferLeftImg />
            <OfferFeatureGrid />
            <OfferRightImg />
            {/* <OfferLeftImg /> */}
            <Services />

            {/* <Dashboard /> */}
            <OfferForm />

        </Layout>
    </ThemeProvider>

    
    
  )
}