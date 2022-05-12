import React, { Fragment, useEffect } from 'react'
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
import Banner from '../../../sections/banner';
import chatWA from '../../../assets/animations/chat-user.json';
import whatsappLogo from '../../../assets/animations/whatsapp-logo.json';
import whatsappGray from '../../../assets/animations/whatsapp-gray.json';
import Lottie from 'react-lottie';
// import Script from 'next/script'
import logo from '../../../assets/images/vajra-logo.png';
import Video from '../../../sections/whatsapp-video'
import WhatsappForm from '../../../sections/whatsapp/contact'
import WaBgContainer from '../../../assets/images/Icon-Grid.svg'
import Hero from './hero'
import Section2 from './section2'
import Section3 from './section3'
import Section4CTA from './section4CTA'
import Section5 from './section5'
import Section6 from './section6'
import Section7 from './section7'
 
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
            <SEO title="Vajra.ai - HealthCare Use case" /> 
            <Hero />
            <Section2 />
            <Section3 />
            <Section4CTA />
            <Section5 />
            <Section6 />
            <Section7 />


            {/* Form */}
            <WhatsappForm />
            <div>
              <div className="vfloating_btn">
                <a className="va" target="_blank" href="https://wa.me/916302396226?text=hello">
                  <div className="vcontact_icon">
                  <svg width="30" viewBox="0 0 24 24"><defs/><path fill="#fff" d="M20.5 3.4A12.1 12.1 0 0012 0 12 12 0 001.7 17.8L0 24l6.3-1.7c2.8 1.5 5 1.4 5.8 1.5a12 12 0 008.4-20.3z"/><path fill="#4caf50" d="M12 21.8c-3.1 0-5.2-1.6-5.4-1.6l-3.7 1 1-3.7-.3-.4A9.9 9.9 0 012.1 12a10 10 0 0117-7 9.9 9.9 0 01-7 16.9z"/><path fill="#fafafa" d="M17.5 14.3c-.3 0-1.8-.8-2-.9-.7-.2-.5 0-1.7 1.3-.1.2-.3.2-.6.1s-1.3-.5-2.4-1.5a9 9 0 01-1.7-2c-.3-.6.4-.6 1-1.7l-.1-.5-1-2.2c-.2-.6-.4-.5-.6-.5-.6 0-1 0-1.4.3-1.6 1.8-1.2 3.6.2 5.6 2.7 3.5 4.2 4.2 6.8 5 .7.3 1.4.3 1.9.2.6 0 1.7-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4z"/></svg>
                  </div>
                </a>
                {/* <p className="vtext_icon">Chat with Vajra</p> */}
                <p className="vtext_icon_sub">Replies in a minute</p>
              </div>
            </div>
            {/* <script src="https://cloud.vajra.ai/regular-bot.js" vajraRegId="ES3gNLH4yMbagE0r3Hfm"></script> */}
        </Layout>
    </ThemeProvider>

    
    
  )
}

const styles = {
  waContainer: {
    backgroundImage: `url(${WaBgContainer})`
   }
}